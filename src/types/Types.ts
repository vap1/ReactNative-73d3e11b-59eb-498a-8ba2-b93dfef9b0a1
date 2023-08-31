
// File: src/types/Types.ts

export interface User {
  name: string;
  email: string;
  contactInfo?: string;
  address?: string;
  profilePicture?: string;
}

export interface UserRegistrationRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  message: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  success: boolean;
  message: string;
  token?: string;
}

export interface UserProfileRequest {
  token: string;
}

export interface UserProfileResponse {
  user: User;
}

export interface UserProfileUpdateRequest {
  token: string;
  name?: string;
  contactInfo?: string;
  address?: string;
  profilePicture?: string;
}

export interface UserProfileUpdateResponse {
  success: boolean;
  message: string;
}

export interface AdminUserDetailsRequest {
  token: string;
}

export interface AdminUserDetailsResponse {
  users: User[];
}