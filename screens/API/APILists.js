import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import commonStyles from './style';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const APILists = () => {
    const styles = commonStyles();
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <TouchableOpacity style={styles.list}>
                    <View style={styles.iconContainer}>
                        <Icon
                            name={'account-group'}
                            size={45}
                            color={'#B980F0'}
                            onPress={()=>navigation.navigate('APIListsDetails',{api:'users'})}
                        />
                    </View>
                    <Text style={styles.title}>Users</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.list}>
                    <View style={styles.iconContainer}>
                        <Icon
                            name={'format-list-bulleted'}
                            size={45}
                            color={'#B980F0'}
                            onPress={()=>navigation.navigate('APIListsDetails',{api:'todos'})}
                        />
                    </View>
                    <Text style={styles.title}>TODO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default APILists;
