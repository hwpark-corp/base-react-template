import { ExampleState } from './types';

const reducer = {
  // async increment
  requestIncrement: (state: ExampleState) => {
    state.isProcessing = true;
  },
  successIncrement: (state: ExampleState) => {
    state.count += 1;
    state.isProcessing = false;
  },
  failureIncrement: (state: ExampleState) => {
    state.isProcessing = false;
  },
};

export default reducer;
