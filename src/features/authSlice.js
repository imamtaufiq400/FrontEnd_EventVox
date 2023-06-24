import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: "",
};

// User Biasa
export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: user.email,
        password: user.password,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:5000/me");
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk(
  "user/LogOut",
  await axios.delete("http://localhost:5000/logout")
);

export const DaftarUser = createAsyncThunk(
  "user/DaftarUser",
  async (user, thunkAPI) => {
    // console.log(user);
    try {
      const response = await axios.post("http://localhost:5000/users", {
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
        confPassword: user.password,
        role: "user",
      });
      return response.data;
    } catch (error) {
      // console.log("Error" + error);
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// UserPromotor
export const LoginPromotor = createAsyncThunk(
  "user/LoginPromotor",
  async (user, thunkAPI) => {
    if (user === undefined) {
      return res
        .status(401)
        .json({ msg: " silahkan register akun terlebih dahulu!" });
    }
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: user.email,
        password: user.password,
      });
      if (role !== "promotor") {
        return res.status(401).json({ msg: " Mohon Login Ke Akun Promotor" });
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const DaftarPromotor = createAsyncThunk(
  "user/DaftarPromotor",
  async (user, thunkAPI) => {
    // console.log(user);
    try {
      const response = await axios.post("http://localhost:5000/users", {
        name: user.name,
        username: user.username,
        nomorTelepon: user.nomorTelepon,
        email: user.email,
        password: user.password,
        confPassword: user.password,
        role: "promotor",
      });
      return response.data;
    } catch (error) {
      console.log("Error" + error);
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSucces = true;
      state.user = action.payload;
      localStorage.setItem("users", JSON.stringify({ users: action.payload }));
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //Daftar User
    builder.addCase(DaftarUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DaftarUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSucces = true;
      state.user = action.payload;
    });
    builder.addCase(DaftarUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get user Login
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSucces = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //Daftar Promotor
    builder.addCase(DaftarPromotor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DaftarPromotor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSucces = true;
      state.user = action.payload;
    });
    builder.addCase(DaftarPromotor.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Promotor user Login
    builder.addCase(LoginPromotor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginPromotor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSucces = true;
      state.user = action.payload;
    });
    builder.addCase(LoginPromotor.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
