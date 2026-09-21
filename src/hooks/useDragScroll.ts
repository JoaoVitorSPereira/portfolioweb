import { useEffect } from 'react';
import type { RefObject } from 'react';

const THRESHOLD = 5;

function scrollableAncestor(from: Element, root: Element): HTMLElement | null {
  for (
    let el: Element | null = from;
    el && el !== root;
    el = el.parentElement
  ) {
    if (!(el instanceof HTMLElement) || el.scrollHeight <= el.clientHeight) {
      continue;
    }
    const { overflowY } = getComputedStyle(el);
    if (overflowY === 'auto' || overflowY === 'scroll') return el;
  }
  return null;
}

// Lets a mouse scroll inside `ref` by click-and-drag, like a finger on a phone.
// Touch already scrolls natively, so only mouse pointers are handled.
export function useDragScroll(ref: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      if (!(e.target instanceof Element)) return;
      const target = scrollableAncestor(e.target, root);
      if (!target) return;

      const startY = e.clientY;
      const startTop = target.scrollTop;
      let dragging = false;

      const onMove = (m: PointerEvent) => {
        const dy = m.clientY - startY;
        if (!dragging && Math.abs(dy) < THRESHOLD) return;
        if (!dragging) {
          dragging = true;
          root.style.userSelect = 'none';
          root.style.cursor = 'grabbing';
        }
        // `instant`: the app windows use smooth scrolling, which would lag the drag.
        target.scrollTo({ top: startTop - dy, behavior: 'instant' });
      };

      const onUp = () => {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('pointercancel', onUp);
        root.style.userSelect = '';
        root.style.cursor = '';
        // A drag must not also click the icon/link it ended on.
        if (dragging) {
          const swallow = (c: Event) => c.stopPropagation();
          root.addEventListener('click', swallow, true);
          // The click fires right after pointerup; if none does, don't keep eating clicks.
          setTimeout(() => root.removeEventListener('click', swallow, true));
        }
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
    };

    // Native link/image dragging would cancel the pointer stream mid-drag.
    const onDragStart = (e: Event) => e.preventDefault();

    root.addEventListener('pointerdown', onDown);
    root.addEventListener('dragstart', onDragStart);
    return () => {
      root.removeEventListener('pointerdown', onDown);
      root.removeEventListener('dragstart', onDragStart);
    };
  }, [ref]);
}
