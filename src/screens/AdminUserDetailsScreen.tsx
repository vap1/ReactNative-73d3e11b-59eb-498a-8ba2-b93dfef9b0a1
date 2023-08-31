
import React, { useEffect, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { AdminUserDetailsResponse, User } from '../types/Types';
import { getAdminUserDetails } from '../apis/AdminApi';

const AdminUserDetailsScreen: React.FC = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = React.useState<User[]>([]);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response: AdminUserDetailsResponse = await getAdminUserDetails(token);
      setUsers(response.users);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const renderUserItem = ({ item }: { item: User }) => (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Contact Info: {item.contactInfo}</Text>
      <Text>Address: {item.address}</Text>
      <Text>Profile Picture: {item.profilePicture}</Text>
    </View>
  );

  return (
    <View>
      <Text>Admin User Details</Text>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

export default AdminUserDetailsScreen;