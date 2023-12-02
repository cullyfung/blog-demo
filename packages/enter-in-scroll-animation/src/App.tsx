import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll('.animated-item');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('enter-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedItems.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <div className="mx-auto w-80%">
      <div className="w-full py-12">
        <h2 className="text-4xl text-center font-semibold animated-item">文章标题</h2>
        <p className="text-black/80 py-2 text-xl animated-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu egestas
          efficitur, erat neque egestas erat, eget egestas metus felis non felis. Sed euismod,
          libero eu egestas efficitur, erat neque egestas erat, eget egestas metus felis non felis.
          Sed euismod,
        </p>
        <img
          className="h-[800px] object-cover w-full"
          src="https://w.wallhaven.cc/full/3l/wallhaven-3l7eoy.jpg"
          alt="cover"
        />
      </div>
      <div className="w-full py-12">
        <h2 className="text-4xl text-center font-semibold animated-item">文章标题</h2>
        <p className="text-black/80 py-2 text-xl animated-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu egestas
          efficitur, erat neque egestas erat, eget egestas metus felis non felis. Sed euismod,
          libero eu egestas efficitur, erat neque egestas erat, eget egestas metus felis non felis.
          Sed euismod,
        </p>
        <img
          className="h-[800px] object-cover w-full"
          src="https://w.wallhaven.cc/full/3l/wallhaven-3l7eoy.jpg"
          alt="cover"
        />
      </div>
      <div className="w-full py-12">
        <h2 className="text-4xl text-center font-semibold animated-item">文章标题</h2>
        <p className="text-black/80 py-2 text-xl animated-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu egestas
          efficitur, erat neque egestas erat, eget egestas metus felis non felis. Sed euismod,
          libero eu egestas efficitur, erat neque egestas erat, eget egestas metus felis non felis.
          Sed euismod,
        </p>
        <img
          className="h-[800px] object-cover w-full"
          src="https://w.wallhaven.cc/full/3l/wallhaven-3l7eoy.jpg"
          alt="cover"
        />
      </div>
    </div>
  );
}

export default App;
