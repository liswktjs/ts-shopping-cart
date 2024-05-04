import {
  useEffect,
  useRef,
  PropsWithChildren,
} from "react";

interface Props {
  triggerAction: () => void;
}

const ObserverContainer = ({
  children,
  triggerAction,
}: PropsWithChildren<Props>) => {
  const observerRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          if (
            entries[0].isIntersecting
          ) {
            triggerAction();
          }
        },
        {
          root: null,
          rootMargin: "10px",
          threshold: 0.1,
        }
      );

    if (observerRef.current) {
      observer.observe(
        observerRef.current
      );
    }
  }, [triggerAction]);

  return (
    <div ref={observerRef}>
      {children}
    </div>
  );
};

export default ObserverContainer;
