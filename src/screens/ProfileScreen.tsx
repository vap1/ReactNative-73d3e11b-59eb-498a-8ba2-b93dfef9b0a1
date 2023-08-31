
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';
import { getProfile, updateProfile } from '../apis/ProfileApi';

const ProfileScreen: React.FC = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const request: UserProfileRequest = {
        token: user.token,
      };
      const response: UserProfileResponse = await getProfile(request);
      setName(response.user.name);
      setContactInfo(response.user.contactInfo || '');
      setAddress(response.user.address || '');
      setProfilePicture(response.user.profilePicture || '');
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const saveProfile = async () => {
    try {
      const request: UserProfileUpdateRequest = {
        token: user.token,
        name,
        contactInfo,
        address,
        profilePicture,
      };
      const response: UserProfileUpdateResponse = await updateProfile(request);
      if (response.success) {
        updateUser({ ...user, name, contactInfo, address, profilePicture });
        console.log('Profile updated successfully');
      } else {
        console.error('Error updating profile:', response.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Contact Info:</Text>
      <TextInput value={contactInfo} onChangeText={setContactInfo} />

      <Text>Address:</Text>
      <TextInput value={address} onChangeText={setAddress} />

      <Text>Profile Picture:</Text>
      <Image source={{ uri: profilePicture }} style={{ width: 100, height: 100 }} />

      <Button title="Save" onPress={saveProfile} />
    </View>
  );
};

export default ProfileScreen;