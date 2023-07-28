
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompanyData } from '@types';

interface CompanyState {
  data: CompanyData | null;
  loading: boolean;
  error: string | null;
}

const initialState: CompanyState = {
  data: null,
  loading: false,
  error: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<CompanyData>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = companySlice.actions;

export default companySlice.reducer;
