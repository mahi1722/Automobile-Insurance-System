import axios from "axios";

// Base URL for your backend API
const API_URL = "http://localhost:8080/api"; 

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for CORS with credentials
});

// Function to set the JWT token in the header
const setAuthHeader = (jwt) => {
  if (jwt) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

// Axios service for authentication
const authService = {
  signUp: async (userData, navigate) => {
    try {
      const response = await axiosInstance.post("/user/signup", userData);
      const { jwt, role } = response.data;
      
      // Store the JWT token in localStorage or sessionStorage
      localStorage.setItem("token", jwt);
      localStorage.setItem("role", role);
      
      // Set the Authorization header for future requests
      setAuthHeader(jwt);
      
      // Navigate to the respective dashboard
      if (role === "ROLE_CUSTOMER") {
        navigate("/customer-dashboard");  // Redirect to customer dashboard
      } else if (role === "ROLE_ADMIN") {
        navigate("/admin-dashboard");  // Redirect to admin dashboard
      }
    } catch (error) {
      // More detailed error handling
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Signup Error Response:", error.response.data);
        console.error("Status Code:", error.response.status);
        
        // You might want to set an error state or show a toast notification
        throw new Error(error.response.data.message || "Signup failed");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        throw new Error("No response from server. Please check your network connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
        throw new Error("An unexpected error occurred");
      }
    }
  },

  // Similar modifications for signIn method...
  signIn: async (credentials, navigate) => {
    try {
      const response = await axiosInstance.post("/user/signin", credentials);
      const { jwt, role } = response.data;
      
      localStorage.setItem("token", jwt);
      localStorage.setItem("role", role);
      
      setAuthHeader(jwt);

      return { role };
      
    
    } catch (error) {
      if (error.response) {
        console.error("Signin Error Response:", error.response.data);
        console.error("Status Code:", error.response.status);
        throw new Error(error.response.data.message || "Signin failed");
      } else if (error.request) {
        console.error("No response received:", error.request);
        throw new Error("No response from server. Please check your network connection.");
      } else {
        console.error("Error setting up request:", error.message);
        throw new Error("An unexpected error occurred");
      }
    }
  },

  logout: (navigate) => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    
    setAuthHeader(null);
    
    navigate("/login");
  },
};

export default authService;