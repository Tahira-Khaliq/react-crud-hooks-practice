import axios from "axios";

const ApiBaseUrl = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiBaseUrl


// Here we are creating instance, we will use this instance in app instead o base url everywhere.