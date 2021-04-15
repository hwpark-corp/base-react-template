import React from 'react';

import { exampleActions } from 'commons/redux/modules/example';

type CounterProps = {
  count: number;
  isProcessing: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

const Counter = ({
  count,
  isProcessing,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease} disabled={isProcessing}>
        +1
      </button>
      <button onClick={onDecrease} disabled={isProcessing}>
        -1
      </button>
      <button onClick={() => onIncreaseBy(5)} disabled={isProcessing}>
        +5
      </button>
    </div>
  );
};

export default Counter;
