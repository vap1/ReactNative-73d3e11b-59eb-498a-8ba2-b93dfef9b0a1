
import React, { createContext, useState } from 'react';

// Import necessary types
import { User } from '../types/Types';
import { loginUser, logoutUser } from '../apis/AuthApi';

// Define the context type
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Create the context
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async (email: string, password: string) => {},
  logout: async () => {},
});

// Create the AuthContextProvider component
export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Function to handle user login
  const login = async (email: string, password: string) => {
    try {
      const response = await loginUser(email, password);
      // Set the user in the context
      setUser(response.user);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      await logoutUser();
      // Clear the user from the context
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout error
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};