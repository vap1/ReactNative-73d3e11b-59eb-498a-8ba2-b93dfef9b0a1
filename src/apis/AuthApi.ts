
import { UserLoginRequest, UserLoginResponse } from '../types/Types';
import { BASE_URL } from '../config';

export const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data: UserLoginResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};