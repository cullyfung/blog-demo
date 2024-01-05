import { useRef, type FC, useEffect, useState } from 'react';

import './App.css';
// import { useInView } from './hooks/useInView';
import { useLazyImage } from './hooks/useLazyImage';

type CardProps = {
  image: string;
};

const Card: FC<CardProps> = ({ image }) => {
  const { isLoaded, imgRef } = useLazyImage(image);

  return (
    <div className="card">
      <img
        ref={imgRef}
        src={isLoaded ? image : undefined}
        alt="og"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu egestas
        egestas, libero erat faucibus erat, at egestas erat urna eget metus.
      </p>
    </div>
  );
};

// const Card: FC<CardProps> = ({ image }) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const { setRef, isInView } = useInView();
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setRef(ref.current!);
//     if (isInView) {
//       setLoaded(true);
//     }
//   }, [isInView, setRef]);

//   return (
//     <div
//       ref={ref}
//       className="card"
//     >
//       <img
//         src={loaded ? image : undefined}
//         alt="og"
//       />
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu egestas
//         egestas, libero erat faucibus erat, at egestas erat urna eget metus.
//       </p>
//     </div>
//   );
// };

function App() {
  const imageUrls = [
    'https://w.wallhaven.cc/full/jx/wallhaven-jxl31y.png',
    'https://w.wallhaven.cc/full/5g/wallhaven-5gpv25.jpg',
    'https://w.wallhaven.cc/full/l8/wallhaven-l8r85q.jpg',
    'https://w.wallhaven.cc/full/jx/wallhaven-jxd1x5.jpg',
    'https://w.wallhaven.cc/full/m3/wallhaven-m3rdj1.jpg',
    'https://w.wallhaven.cc/full/l8/wallhaven-l8rmvl.png',
    'https://w.wallhaven.cc/full/jx/wallhaven-jxrvqq.jpg',
    'https://w.wallhaven.cc/full/gp/wallhaven-gpv12q.png',
    'https://w.wallhaven.cc/full/85/wallhaven-85po1k.png'
  ];

  const cards = imageUrls.map((image, index) => {
    return (
      <Card
        key={index}
        image={image}
      />
    );
  });

  return <div className="container">{cards}</div>;
}

export default App;
