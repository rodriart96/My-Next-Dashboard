import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { count } from 'console';

interface CounterState {
    count: number,
    isReady: boolean,
}

const initialState : CounterState = {
    count: 10,
    isReady: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    initCounterState(state, action: PayloadAction<number>) {
      if( state.isReady ) return;

      state.count = action.payload;
      state.isReady = true;
    },

    addOne(state) {
      state.count++ ;
    },
    restOne(state) {
      if(state.count === 0) return;

      state.count-- ;
    },
    resetCount(state, action: PayloadAction<number>) {
      if(action.payload < 0) action.payload = 0;

      state.count = action.payload;
    }

  }
});

export const {addOne, restOne, resetCount, initCounterState} = counterSlice.actions;

export default counterSlice.reducer;