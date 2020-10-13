import axios from "axios";

const instance = axios.create({
  // we need to create an object
  // baseURL: "our API URL goes here"
  //baseURL: "http://localhost:5001/clone-bbe18/us-central1/api", // this was our localhost api
  baseURL: "https://us-central1-clone-bbe18.cloudfunctions.net/api", // THE API (cloud function) URL
});

export default instance;
