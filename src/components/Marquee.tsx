import { useLayoutEffect, useRef, useState } from 'react';

const phrase = 'FİKİR VAR. HAREKET VAR. KIPIR VAR.';
export default function Marquee() {
  const root = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(4);
  useLayoutEffect(() => {
    const element = root.current, item = element?.querySelector('.marquee-item');
    if (!element || !item) return;
    const measure = () => {
      const width = item.getBoundingClientRect().width;
      if (width) setCopies(Math.max(2, Math.ceil(element.clientWidth / width) + 1));
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    observer.observe(item);
    measure();
    return () => observer.disconnect();
  }, []);
  return <div className="marquee seamless-marquee" ref={root} aria-hidden="true">
    <div className="marquee-track">
      {[0, 1].map(group => <div className="marquee-group" key={group}>
        {Array.from({ length: copies }, (_, item) => <div className="marquee-item" key={item}><span>{phrase}</span><span className="marquee-spark">✳</span></div>)}
      </div>)}
    </div>
  </div>;
}
