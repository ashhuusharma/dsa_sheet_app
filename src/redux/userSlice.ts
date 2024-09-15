import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SecureStorage from 'react-secure-storage';
import { getAxiosWithoutToken } from '../axios/AxiosObj';

// Define initial state type
interface UserState {
  userDetails: any;
  loading: boolean;
  isLoggedIn: boolean;
  error: string | null;
  accessToken: string | null | any;
  refreshToken: string | null | any;
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
const storage = SecureStorage; // Use default exported instance

// Async thunk for initializing user from secure storage
export const initializeUserAsync = createAsyncThunk('user/initializeUserAsync', async () => {
  try {
    const isLoggedInStr = await storage.getItem('isLoggedIn');
    const isLoggedIn = isLoggedInStr === 'true';

    const userDetailsStr: any = await storage.getItem('userDetails');
    const userDetails: any = userDetailsStr ? JSON.parse(userDetailsStr) : {}; // Parse user details from storage

    const accessToken = await storage.getItem('accessToken') || null;
    const refreshToken = await storage.getItem('refreshToken') || null;

    return { isLoggedIn, userDetails, accessToken, refreshToken };
  } catch (error) {
    console.error('Error initializing user data:', error);
    throw error;
  }
});

// Async thunk for user login
export const getLoginUser = createAsyncThunk(
  'user/getLoginUser',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const formData = { email, password };
      const response = await getAxiosWithoutToken({
        method: 'POST',
        url: 'auth/login/', // Replace with your login API endpoint
        data: formData,
      });

      const { access, refresh, user } = response.data;
      await storage.setItem('isLoggedIn', 'true');
      await storage.setItem('accessToken', access);
      await storage.setItem('refreshToken', refresh);
      await storage.setItem('userDetails', JSON.stringify(user)); // Save user details

      return { access, refresh, user }; // Return the user details along with tokens
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Login failed. Please try again.');
    }
  }
);

// Async thunk for user registration
export const getUserRegister = createAsyncThunk(
  'user/getUserRegister',
  async ({ email, username, password }: { email: string; username: string; password: string }, { rejectWithValue }) => {
    try {
      const formData = { email, username, password, fname: "Demo", lname: "Account", number: "9876543210" };
      const response = await getAxiosWithoutToken({
        method: 'POST',
        url: 'auth/register/', // Replace with your registration API endpoint
        data: formData,
      });

      const { access, refresh, user } = response.data;
      if (access && refresh) {
        await storage.setItem('accessToken', access);
        await storage.setItem('refreshToken', refresh);
        await storage.setItem('userDetails', JSON.stringify(user)); // Store user details
      }

      return { access, refresh, user }; // Return the user details along with tokens
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Registration failed. Please try again.');
    }
  }
);

// Async thunk for user logout
export const getLogoutUser = createAsyncThunk('user/getLogoutUser', async (_, { rejectWithValue }) => {
  try {
    await storage.clear(); // Clear all secure storage items
    return true;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling user initialization
      .addCase(initializeUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initializeUserAsync.fulfilled, (state, action) => {
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
      // Handling user login
      .addCase(getLoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.userDetails = action.payload.user;
        state.error = null;
      })
      .addCase(getLoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handling user registration
      .addCase(getUserRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload.user;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(getUserRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handling user logout
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

// Selector to access user state
export const selectUser = (state: { user: UserState }) => state.user;

export default userSlice.reducer;
