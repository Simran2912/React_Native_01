import { Input } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from './style';

const CustomInput = props => {
    const styles = commonStyles();
    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {props.textInputLabel}
                    </Text>
                    {props.required ? <Text style={styles.asterisk}>*</Text> : null}
                </View>
                <Input {...props}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputStyle} />
            </View>
            {props.error ? (
                <Text style={styles.asterisk}>
                    {props.error}
                </Text>
            ) : null}
        </>
    );
};
export default CustomInput;
