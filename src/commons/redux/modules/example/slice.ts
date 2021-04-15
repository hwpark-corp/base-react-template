import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './types';
import reducer from './reducer';

const slice = createSlice({
  name: 'example',
  initialState,
  reducers: reducer,
});

export default slice;
