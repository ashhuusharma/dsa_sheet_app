import axios from 'axios'; // Import AxiosRequestConfig
// import store from '../redux/store'; // Uncomment if using Redux

// Define the API URL
const API_URL = 'http://13.202.202.172:3003/';

// Create Axios instance with base URL and default headers
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interface for request configuration
interface RequestConfig {
    url: string;         // URL for the request
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; // HTTP method
    data?: any;          // Data payload for POST/PUT requests
    headers?: Record<string, string>; // Additional headers
}

// Interface for the response structure
interface APIResponse<T = any> {
    data: T;             // Data returned from the API
}

// Interceptor to inject token into request headers
axiosInstance.interceptors.request.use(
    (config) => {
        // Uncomment and implement if using Redux
        // const { accessToken } = store.getState().user; // Access token from Redux store
        // if (accessToken) {
        //   config.headers = {
        //     ...config.headers,
        //     Authorization: `Bearer ${accessToken}`,
        //   };
        // }
        return config;
    },
    (error) => Promise.reject(error)
);

// Function to handle requests without requiring a token
export const getAxiosWithoutToken = async <T = any>(config: RequestConfig): Promise<APIResponse<T>> => {
    const response: APIResponse<T> = await axiosInstance({
        method: config.method || 'GET',
        url: config.url,
        headers: config.headers,
        data: config.data || {},
    });
    return response;
};

// Function to handle requests that require a token
export const getAxiosWithToken = async <T = any>(config: RequestConfig): Promise<APIResponse<T>> => {
    try {
        // console.log(config.url);
        const response: APIResponse<T> = await axiosInstance({
            method: config.method || 'GET',
            url: config.url,
            headers: config.headers,
            data: config.data || {},
        });
        return response;
    } catch (error: any) {
        if (error.response) {
            if (error.response.status === 401) {
                // Unauthorized, handle token expiration or invalid token
                console.log('Error Code:', error.response.status);
            }
        } else if (error.request) {
            // Request was made but no response received
            console.log('Error Request:', error.request);
        } else {
            // Error setting up the request
            console.log('Error Message:', error.message);
        }
        throw error;
    }
};
