
import { UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';
import { BASE_URL } from '../config';

export const updateProfile = async (request: UserProfileUpdateRequest): Promise<UserProfileUpdateResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${request.token}`,
      },
      body: JSON.stringify({
        name: request.name,
        contactInfo: request.contactInfo,
        address: request.address,
        profilePicture: request.profilePicture,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update profile');
    }

    const data: UserProfileUpdateResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};