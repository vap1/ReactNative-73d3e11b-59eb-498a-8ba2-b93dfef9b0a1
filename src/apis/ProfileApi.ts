
import { UserProfileRequest, UserProfileResponse } from '../types/Types';
import { BASE_URL } from '../config';

export const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${request.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get user profile');
    }

    const data: UserProfileResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};