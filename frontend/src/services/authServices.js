import apiConnector from './ApiConnectors.js';
import { toast } from 'sonner';
import { AUTH_ENDPOINTS } from './apiEndPoint.js';

export const login = async (formData) => {
  try {
    const response = await apiConnector.post(AUTH_ENDPOINTS.LOGIN, formData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      withCredentials: true,
    });
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
      formData,
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.log('registration error:', error);

    const message =
      error.response?.data?.message ||
      'Something went wrong during registration';

    toast.error(message);
  }
};
