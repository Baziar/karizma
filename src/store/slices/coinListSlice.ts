import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import coins from '@/utils/coins';

interface ICoinListMode {
  list: { name: string; symbol: string; isActive: boolean }[];
  searched: { name: string; symbol: string; isActive: boolean }[];
  isSearched: boolean;
}

const initialState: ICoinListMode = {
  list: [],
  searched: [],
  isSearched: false
};

export const coinListSlice = createSlice({
  name: 'coinList',
  initialState: initialState,
  reducers: {
    onUpdateCoinList: (state, action: PayloadAction<any[]>) => {
      state.list = action.payload;
    },
    onSearchedCoinList: (state, action: PayloadAction<any[]>) => {
      state.searched = action.payload;
    },
    isSearchedCoinList: (state, action: PayloadAction<boolean>) => {
      state.isSearched = action.payload;
    }
  }
});

export const { onUpdateCoinList, onSearchedCoinList, isSearchedCoinList } = coinListSlice.actions;
export const coinListReducer = coinListSlice.reducer;
