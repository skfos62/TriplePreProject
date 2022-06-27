import { useState, useCallback, useMemo, useEffect } from "react";

interface CounterProps {
  start: number;
  end: number;
}

const CountNumber = ({ start, end }: CounterProps) => {
  const [count, setCount] = useState(start);
  const [time, setTime] = useState(5);
  const increment = useMemo(() => end / 200, [end]);
  const doIncrement = () => {
    if (count > end * 0.9) {
      setTime(time + 5);
    }
    if (count < end) {
      const timer = setTimeout(
        () => setCount(count < end - increment ? count + increment : end),
        time
      );

      return () => clearTimeout(timer);
    }
  };
  useEffect(() => {
    doIncrement();
  }, [count, end, increment]);
  return <span>{Math.floor(count)}</span>;
};

export default CountNumber;
