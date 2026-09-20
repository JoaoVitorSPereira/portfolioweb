import { useEffect } from 'react';

import { tools } from '../../lib/agent';

// WebMCP: exposes the tools to in-browser AI agents (https://webmachinelearning.github.io/webmcp/).
// The spec puts the API on `document`; early Chrome previews used `navigator`.
const WebMCP = () => {
  useEffect(() => {
    const mc =
      (document as any).modelContext ?? (navigator as any).modelContext;
    if (!mc?.registerTool) return;

    const ctrl = new AbortController();
    const registered: any[] = [];

    tools.forEach(({ run, ...tool }) => {
      try {
        Promise.resolve(
          mc.registerTool(
            {
              ...tool,
              annotations: { readOnlyHint: true },
              execute: async (input: { language?: string }) => run(input),
            },
            { signal: ctrl.signal },
          ),
        )
          .then(r => registered.push(r))
          .catch(() => {});
      } catch {}
    });

    return () => {
      ctrl.abort();
      registered.forEach(r => r?.unregister?.());
    };
  }, []);

  return null;
};

export default WebMCP;
