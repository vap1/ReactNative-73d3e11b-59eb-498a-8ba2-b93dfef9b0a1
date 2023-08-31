
import { AdminUserDetailsRequest, AdminUserDetailsResponse } from '../types/Types';
import { BASE_URL } from '../config';

export const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${request.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch admin user details');
    }

    const data: AdminUserDetailsResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};