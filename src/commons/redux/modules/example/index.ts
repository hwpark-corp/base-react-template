import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'commons/redux';

import slice from './slice';
import { ExampleState } from './types';

const selectorAllState = createSelector(
  (state: ExampleState) => state.count,
  (state: ExampleState) => state.isProcessing,
  (count, isProcessing) => ({
    count,
    isProcessing,
  }),
);

export const exampleSelector = {
  all: (state: RootState) => selectorAllState(state[EXAMPLE]),
};

export const EXAMPLE = slice.name;
export const exampleReducer = slice.reducer;
export const exampleActions = slice.actions;
