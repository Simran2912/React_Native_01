/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { getTodoApi, getUserApi } from '../../services/apiServices';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import commonStyles from './style';

const ListDetails = ({ route }) => {
    const [userListData, setUserListData] = useState([]);
    const [todoListData, setTodoListData] = useState([]);

    const isFocused = useIsFocused();
    const styles = commonStyles();
    const { api } = route?.params;

    useEffect(() => {
        if (isFocused) {
            getDataHandler();
        }
    }, [isFocused, api]);

    //Get User And Todo Data
    const getDataHandler = async () => {
        try {
            let data;
            if (api === 'users') {
                data = await getUserApi();
                if (data) {
                    setUserListData(data);
                }
            } else {
                data = await getTodoApi();
                if (data) {
                    setTodoListData(data);
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderUserItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.cardIconContainer}>
                    <Icon
                        name={'account'}
                        size={45}
                        color={'#B980F0'}
                    />
                </View>
                <View style={styles.cardDataContainer}>
                    <Text style={styles.cardData}>{item.name}</Text>
                    <Text style={styles.cardData}>{item.username}</Text>
                    <Text style={styles.cardData}>{item.email}</Text>
                    <Text style={styles.cardData}>{item.phone}</Text>
                </View>
            </View>
        );
    };

    const renderTodoItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.cardIconContainer}>
                    <Icon
                        name={'format-list-checks'}
                        size={45}
                        color={'#B980F0'}
                    />
                </View>
                <View style={styles.cardDataContainer}>
                    <Text style={styles.cardData}>{item.title}</Text>
                </View>
            </View>
        );
    };

    const renderEmpty = () => {
        return (
          <View style={styles.renderEmptyList}>
            <Text>No data found</Text>
          </View>
        );
      };
    return (
        <View style={styles.container}>
            <FlatList
                data={api === 'users' ? userListData : todoListData}
                renderItem={api === 'users' ? renderUserItem : renderTodoItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => {
                    return item.id.toString();
                }}
                ListEmptyComponent={renderEmpty}
            />
        </View>
    );
};

export default ListDetails;
