/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Text, View } from 'react-native';
import CustomInput from '../../customComponents/Custom Input/CustomInput';
import commonStyles from './style';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const TodoScreen = () => {
    const styles = commonStyles();

    const [listItem, setListItem] = useState('');
    const [lists, setLists] = useState([]);
    const [enableEdit, setEnableEdit] = useState(false);
    const [enableListId, setEnableListId] = useState(0);

    const handleOnChangeText = (value) => {
        setListItem(value);
    };

    //Add list handler
    const addListItemHandler = () => {
        if (listItem !== '') {
            setLists([
                ...lists, { id: Math.floor(Math.random() * 1000), item: listItem },
            ]);
            setListItem('');
        }
    };

    //Edit list Handler
    const editListHandler = (id) => {
        const itemToEdit = lists.find(todo => todo.id === id); // Find the item by its ID
        if (itemToEdit) {
            setListItem(itemToEdit.item);
            setEnableEdit(true);
            setEnableListId(id);
        }
    };

    const editListItemHandler = () => {
        if (listItem !== '') {
            setLists(lists.map(todo =>
                todo.id === enableListId ? { ...todo, item: listItem } : todo
            )
            );
            setListItem('');
            setEnableEdit(false);
            setEnableListId(0);
        }
    };

    //delete list handler
    const deleteListItemHandler = (id) => {
        setLists(lists.filter(list => list.id !== id));
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.listItemContainer}>
                    <Text style={styles.listItem}>{item.item}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.iconEditContainer}>
                        <Icon
                            name={'pencil'}
                            size={25}
                            style={styles.editIcon}
                            color={'#fff'}
                            onPress={() => editListHandler(item.id)}
                        />
                    </View>
                    <View style={styles.iconDeleteContainer}>
                        <Icon
                            name={'delete'}
                            size={25}
                            style={styles.deleteIcon}
                            color={'#fff'}
                            onPress={() => deleteListItemHandler(item.id)}
                        />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>ToDo</Text>
                </View>
                <View style={styles.todoContainer}>
                    <View style={styles.todoInput}>
                        <CustomInput
                            textInputLabel={'Add Item'}
                            onChangeText={value => handleOnChangeText(value, 'item')}
                            value={listItem}
                            placeholder={'Enter list item'}
                        />
                    </View>
                    <View style={styles.iconContainer}>
                        {enableEdit ?
                            <Icon
                                name={'pencil'}
                                size={30}
                                style={styles.icon}
                                color={'#fff'}
                                onPress={editListItemHandler}
                            /> :
                            <Icon
                                name={'plus'}
                                size={30}
                                style={styles.icon}
                                color={'#fff'}
                                onPress={addListItemHandler}
                            />}
                    </View>
                </View>
                <View>
                    <FlatList
                        data={lists}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => {
                            return item.id.toString();
                        }}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};
export default TodoScreen;
