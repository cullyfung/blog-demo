import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function getColumns(containerWidth: number) {
  if (containerWidth > 1200) {
    return 6;
  } else if (containerWidth > 768 && containerWidth <= 1200) {
    return 4;
  } else {
    return 3;
  }
}

function App() {
  const list = [
    '/photo-1.avif',
    '/photo-2.avif',
    '/photo-3.avif',
    '/photo-4.avif',
    '/photo-5.avif',
    '/photo-6.avif',
    '/photo-7.avif',
    '/photo-8.avif',
    '/photo-9.avif',
    '/photo-10.avif',
    '/photo-11.avif',
    '/photo-12.avif'
  ];

  const container = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    if (container.current) {
      const items = Array.from(document.querySelectorAll('.item')) as HTMLDivElement[];
      setItems(items);
    }
  }, []);

  const handleResize = useCallback(() => {
    if (container.current) {
      const containerWidth = container.current.offsetWidth;
      const columns = getColumns(containerWidth);
      const columnWidth = containerWidth / columns;
      container.current.style.setProperty('--item-width', columnWidth + 'px');
      const columnHeights = new Array(columns).fill(0);

      items.forEach((item) => {
        const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
        item.style.transform = `translate(${columnWidth * shortestColumn}px, ${
          columnHeights[shortestColumn]
        }px)`;

        columnHeights[shortestColumn] += item.offsetHeight;
      });
    }
  }, [items]);

  useEffect(() => {
    const observer = new ResizeObserver(() => handleResize());
    if (container.current) {
      observer.observe(container.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [handleResize]);

  return (
    <div
      ref={container}
      className="container"
    >
      {list.map((item) => (
        <div
          className="item"
          key={item}
        >
          <img src={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
