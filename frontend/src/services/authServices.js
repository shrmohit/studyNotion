import apiConnector from './ApiConnectors.js';
import { toast } from 'sonner';
import { AUTH_ENDPOINTS } from './apiEndPoint.js';

export const login = async (formData) => {
  try {
    const response = await apiConnector.post(AUTH_ENDPOINTS.LOGIN, formData);
    if (response.data.success) {
      toast.success('Login successful');
    }

    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || 'Login failed');
    throw error;
  }
};

export const register = async (formData) => {
  try {
    const response = await apiConnector.post(
      AUTH_ENDPOINTS.REGISTER,
      formData
    );

    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    console.log('registration error:', error);

    const message =
      error.response?.data?.message ||
      'Something went wrong during registration';

    toast.error(message);
  }
};

export const forgotPassword = async (formData) => {
  try {
    console.log("forgot")
    const response = await apiConnector.post(
      AUTH_ENDPOINTS.FORGOT_PASSWORD,
      formData
    );

    console.log(response.data);
    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    console.log("123error ", error);
    const message =
      error.response?.data?.message ||
      'Something went wrong during forgot password';

    toast.error(message);
  }
};
