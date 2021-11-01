import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxUtils } from 'utils/redux';
import { incrementAsync } from './counter.thunks';

export interface CounterState {
  currentRunningOperation: string;
  value: number;
}

const initialState: CounterState = {
  currentRunningOperation: 'idle',
  value: 0,
};

const SLICE_NAME = '@counter';

export const counterSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.currentRunningOperation = 'idle';
        state.value += action.payload;
      })
      .addMatcher(ReduxUtils.isPendingAction(SLICE_NAME), (state, action) => {
        state.currentRunningOperation = action.type;
      })
      .addMatcher(ReduxUtils.isRejectedAction(SLICE_NAME), (state, action) => {
        state.currentRunningOperation = 'idle';
      })
      .addDefaultCase((state) => {
        state.currentRunningOperation = 'idle';
      });
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
