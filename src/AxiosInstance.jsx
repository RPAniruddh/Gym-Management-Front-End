import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://localhost:1235", 
    });
     
    axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('jwtToken');
        console.log(token )
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
     
    axiosInstance.interceptors.response.use(
      (response) => response, 
      (error) => {
        if (error.response) {
          if (error.response.status === 403) {
            alert("Session expired! Redirecting to login...");
            window.location.href = "/signIn";
          } else if (error.response.status === 500) {
            alert("Server error! Please try again later.");
          }
        }
        return Promise.reject(error);
      }
    );
     
    export default axiosInstance;
 