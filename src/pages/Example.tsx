import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Counter from 'components/example/Counter';

import { exampleActions, exampleSelector } from 'commons/redux/modules/example';

const { requestIncrement } = exampleActions;

const CounterContainer = () => {
  const counter = useSelector(exampleSelector.all);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(requestIncrement());
  };

  const onDecrease = () => {};

  const onIncreaseBy = (diff: number) => {
    console.log(diff);
  };

  return (
    <Counter
      count={counter.count}
      isProcessing={counter.isProcessing}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
};

const Example = () => {
  return (
    <div>
      <div>Example</div>
      <CounterContainer />
    </div>
  );
};

export default Example;
