import { useEffect, useRef } from 'react';
import Card from './components/Card';

function App() {
  const scrollBoxRef = useRef<HTMLDivElement>(null);

  const resizeBody = () => {
    const height = scrollBoxRef.current?.offsetHeight;
    document.body.style.height = `${height}px`;
  };

  const scroll = () => {
    scrollBoxRef.current!.style.transform = `translateY(${-window.scrollY}px)`;
  };

  useEffect(() => {
    window.addEventListener('load', resizeBody);
    window.addEventListener('resize', resizeBody);
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('load', resizeBody);
      window.removeEventListener('resize', resizeBody);
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div
      ref={scrollBoxRef}
      className="relative flex flex-col items-center shrink-0 transition-ease w-full"
    >
      <Card
        title="title1"
        image="https://w.wallhaven.cc/full/vq/wallhaven-vq27p5.jpg"
      />
      <Card
        title="title2"
        image="https://w.wallhaven.cc/full/l8/wallhaven-l8gxqr.png"
      />
      <Card
        title="title3"
        image="https://w.wallhaven.cc/full/yx/wallhaven-yxkzjg.jpg"
      />
      <Card
        title="title4"
        image="https://w.wallhaven.cc/full/zy/wallhaven-zyv1xw.png"
      />
    </div>
  );
}

export default App;
