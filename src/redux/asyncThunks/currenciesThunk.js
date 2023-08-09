import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

 const getCurrencies = createAsyncThunk("getCurrencies", async (pageNumber) => {
  try {
    const response = await axios.get(
      `https://api.coincap.io/v2/assets/?limit=${pageNumber * 50}`
    );
    const data = { data: response.data.data, status: response.status };
    return data;
  } catch (error) {
    console.error(error.message);
  }
});

export { getCurrencies };
