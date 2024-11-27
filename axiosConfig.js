import axios from "axios";

const instance = axios.create({
  baseURL: "https://chatapp-backend-q70l.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
