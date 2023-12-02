import { useEffect, useRef } from 'react';

interface SlideDampContainerProps {
  children?: React.ReactNode;
  damping?: number; // 阻尼系数，更大的值表示更大的阻尼效果
}

const SlideDampContainer = ({ children, damping = 0.08 }: SlideDampContainerProps) => {
  const lastPos = useRef(0); // 记录上次滚动位置
  const newPos = useRef(0); // 记录新位置
  const speed = useRef(0); // 初始速度

  const animateId = useRef<number>();

  // 帧动画函数
  const animate = () => {
    const delta = newPos.current - lastPos.current;

    // 使用阻尼系数调整速度
    speed.current += delta * damping;
    lastPos.current += speed.current;

    // 使用CSS transform来使内容滚动
    document.body.style.transform = `translate3d(0, ${-lastPos.current}px, 0)`;

    // 清除速度以防止其无限制地增长
    speed.current *= 0.95;

    // 调用requestAnimationFrame进行下次绘制
    animateId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // 更新新位置而非直接操作lastPos
      newPos.current = window.scrollY;
    });

    // 初始化动画
    animate();

    // 清理函数
    return () => {
      window.removeEventListener('scroll', () => {});
      cancelAnimationFrame(animateId.current!);
    };
  }, []);

  return <div>{children}</div>;
};

export default SlideDampContainer;
