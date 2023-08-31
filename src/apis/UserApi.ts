
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/Types';
import { post } from './ApiUtils';

export const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  try {
    const response = await post('/api/register', request);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};