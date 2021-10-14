import axios from "axios";

const BASE_URL = "https://coding-challenge-api.aerolab.co";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExYWU0ZjliNzc4MTAwMjA5YzVhOWEiLCJpYXQiOjE2MjEyMDg2NTV9.aQGeM3xtRCIQFBNMPjJt9SyGnFDBj_tTcc8Z-SR6zIs",
};

const AXIOS_REQ = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

export default AXIOS_REQ;
