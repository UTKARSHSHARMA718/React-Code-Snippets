import { useEffect, useState } from "react";

import { throttle } from "../Services/Throttle";

const useScrollDirection = () => {
  const [scrollingDirection, setScrollingDirection] = useState(0); // -1 -> up, +1 -> down and 0 -> no scroll
  let lastScrollPosition =
    window?.pageYOffset || document?.documentElement?.scrollTop;

  const handleOnScroll = throttle(() => {
    const scrollTopPosition =
      window?.pageXOffset || document?.documentElement?.scrollTop;

    if (scrollTopPosition > lastScrollPosition) {
      setScrollingDirection(1);
    } else if (scrollTopPosition < lastScrollPosition) {
      setScrollingDirection(-1);
    }
    lastScrollPosition = scrollTopPosition;
  }, 20);

  useEffect(() => {
    window?.addEventListener("scroll", handleOnScroll, false);

    return () => {
      window?.removeEventListener("scroll", handleOnScroll, false);
    };
  }, []);
  return { scrollingDirection };
};

export default useScrollDirection;
