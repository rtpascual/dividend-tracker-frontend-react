import axios from "axios";

const API_URL = "/api/dividends/";

const createDividend = async (dividendData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, dividendData, config);

  return response.data;
};

const getDividends = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteDividend = async (dividendID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + dividendID, config);

  return response.data;
};

const dividendService = {
  createDividend,
  getDividends,
  deleteDividend,
};

export default dividendService;
