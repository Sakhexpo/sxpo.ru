import type { Element, Root, RootContent } from 'hast';

const addClass = (node: Element, className: string) => {
  const current = node.properties.className;
  const classes = Array.isArray(current) ? current.map(String) : current ? [String(current)] : [];
  if (!classes.includes(className)) classes.push(className);
  node.properties.className = classes;
};

export function rehypeTourContent() {
  return (tree: Root) => {
    const visit = (parent: Root | Element) => {
      if (!parent.children) return;

      const children: RootContent[] = [];
      for (const child of parent.children as RootContent[]) {
        if (child.type === 'element' && child.tagName === 'table') {
          addClass(child, 'tour-content-table');
          children.push({
            type: 'element',
            tagName: 'div',
            properties: { className: ['tour-table-scroll'], role: 'region', ariaLabel: 'Таблица программы тура', tabIndex: 0 },
            children: [child],
          });
          continue;
        }

        if (child.type === 'element' && child.tagName === 'p') {
          const first = child.children[0];
          if (first?.type === 'element' && first.tagName === 'strong') {
            const label = first.children.map((part) => part.type === 'text' ? part.value : '').join('').trim();
            if (/^День\s+\d+/i.test(label)) {
              addClass(child, 'timeline-item');
              addClass(first, 'timeline-marker');
            }
          }
        }

        if (child.type === 'element' && /^h[3-4]$/.test(child.tagName)) {
          const headingText = child.children.map((part) => part.type === 'text' ? part.value : '').join(' ');
          if (/День\s+\d+/i.test(headingText)) addClass(child, 'timeline-heading');
        }

        if (child.type === 'element') visit(child);
        children.push(child);
      }
      parent.children = children as typeof parent.children;
    };

    visit(tree);
  };
}
