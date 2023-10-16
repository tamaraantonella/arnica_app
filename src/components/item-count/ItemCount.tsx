import React, { useEffect, useState } from 'react';

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (count: number) => void;
}

export const ItemCount = ({ stock, initial, onAdd }: ItemCountProps) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const add = () => {
    if (count >= 0 && count < stock) {
      setCount(count + 1);
    }
  };

  const remove = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className="flex flex-col w-40 my-5 mx-auto">
      <div className="flex w-full">
        <button onClick={() => remove()} className="w-5 h-5 border-none text-base text-main-dark">
          -
        </button>
        <p className="w-3/4 text-center">{count}</p>
        <button onClick={() => add()} className="w-5 h-5 border-none text-base text-main-dark">
          +
        </button>
      </div>
      <button className="w-full border-none bg-main-light p-1 text-light-bg transition-all duration-200 ease-in-out hover:bg-light-bg hover:text-main-dark" onClick={() => onAdd(count)}>
        Add to chart
      </button>
    </div>
  );
};
