
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../types/Types';
import { getUserDetails } from '../apis/AdminApi';

interface ListViewProps {
  token: string;
}

interface ListViewState {
  users: User[];
}

class ListView extends React.Component<ListViewProps, ListViewState> {
  constructor(props: ListViewProps) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  fetchUserDetails = async () => {
    try {
      const response = await getUserDetails(this.props.token);
      if (response.success) {
        this.setState({ users: response.users });
      } else {
        console.log('Failed to fetch user details');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  renderUserItem = ({ item }: { item: User }) => (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Contact Info: {item.contactInfo}</Text>
      <Text>Address: {item.address}</Text>
      <Text>Profile Picture: {item.profilePicture}</Text>
    </View>
  );

  render() {
    const { users } = this.state;

    return (
      <View>
        <Text>User Details:</Text>
        <FlatList
          data={users}
          renderItem={this.renderUserItem}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}

export default ListView;