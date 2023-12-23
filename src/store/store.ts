import { configureStore } from '@reduxjs/toolkit';
import { coinListReducer } from './slices';

const store = configureStore({
  reducer: {
    coinList: coinListReducer
  }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export { store };
