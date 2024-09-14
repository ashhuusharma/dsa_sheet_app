import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SecureStorage from 'react-secure-storage';
import { getAxiosWithToken, getAxiosWithoutToken } from '../axios/AxiosObj';

// Define initial state type
interface UserState {
  userDetails: any;
  loading: boolean;
  isLoggedIn: boolean;
  error: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

// Initial state
const initialState: UserState = {
  userDetails: {},
  loading: false,
  isLoggedIn: false,
  error: null,
  accessToken: null,
  refreshToken: null,
};

// Initialize secure storage
const storage = SecureStorage;  // Use the default exported instance

export const initializeUserAsync = createAsyncThunk('user/initializeUserAsync', async () => {
  try {
    const isLoggedInStr = await storage.getItem('isLoggedIn');
    const isLoggedIn = isLoggedInStr === 'true'; // Ensure comparison with a string

    const userDetailsStr = await storage.getItem('userDetails');
    const userDetails = userDetailsStr ? userDetailsStr : {}; // Handle null or undefined

    const accessToken = await storage.getItem('accessToken') || null;
    const refreshToken = await storage.getItem('refreshToken') || null;

    return { isLoggedIn, userDetails, accessToken, refreshToken };
  } catch (error) {
    console.error('Error initializing user data:', error);
    throw error;
  }
});

export const getLoginUser = createAsyncThunk(
  'user/getLoginUser',
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const formData = { GST_No: username, password };
      const response = await getAxiosWithoutToken({
        method: 'POST',
        url: 'vendor/login/',
        data: formData,
      });

      const { access, refresh } = response.data;
      await storage.setItem('isLoggedIn', 'true');
      await storage.setItem('accessToken', access);
      await storage.setItem('refreshToken', refresh);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Unknown error');
    }
  }
);

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAxiosWithToken({
        method: 'GET',
        url: 'vendor/VendorProfile/',
      });

      await storage.setItem('userDetails', JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getLogoutUser = createAsyncThunk(
  'user/getLogoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await storage.clear();
      return true;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initializeUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initializeUserAsync.fulfilled, (state, action: any) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        state.userDetails = action.payload.userDetails;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
        state.error = null;
      })
      .addCase(initializeUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to initialize user data';
      })
      .addCase(getLoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.error = null;
      })
      .addCase(getLoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
        state.error = null;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getLogoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.userDetails = {};
        state.accessToken = null;
        state.refreshToken = null;
        state.error = null;
      })
      .addCase(getLogoutUser.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const selectUser = (state: { user: UserState }) => state.user;

export default userSlice.reducer;
