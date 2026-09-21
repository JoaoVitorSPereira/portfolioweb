import { useEffect } from 'react';

import { tools, type ToolInput } from '@/lib/agent';

// Minimal typing for the WebMCP API, which is not in the DOM typings yet.
interface Registration {
  unregister?: () => void;
}

interface ModelContext {
  registerTool: (
    tool: {
      name: string;
      description: string;
      inputSchema: object;
      annotations: { readOnlyHint: boolean };
      execute: (input: ToolInput) => Promise<unknown>;
    },
    options?: { signal: AbortSignal },
  ) => Promise<Registration | void> | Registration | void;
}

interface WithModelContext {
  modelContext?: ModelContext;
}

// WebMCP: exposes the tools to in-browser AI agents (https://webmachinelearning.github.io/webmcp/).
// The spec puts the API on `document`; early Chrome previews used `navigator`.
export default function WebMCP() {
  useEffect(() => {
    const mc =
      (document as Document & WithModelContext).modelContext ??
      (navigator as Navigator & WithModelContext).modelContext;
    if (!mc?.registerTool) return;

    const ctrl = new AbortController();
    const registered: Registration[] = [];

    tools
      .filter(t => t.readOnly)
      .forEach(({ run, readOnly, ...tool }) => {
        try {
          Promise.resolve(
            mc.registerTool(
              {
                ...tool,
                annotations: { readOnlyHint: true },
                execute: async input => run(input),
              },
              { signal: ctrl.signal },
            ),
          )
            .then(r => r && registered.push(r))
            .catch(() => {});
        } catch {}
      });

    return () => {
      ctrl.abort();
      registered.forEach(r => r.unregister?.());
    };
  }, []);

  return null;
}
