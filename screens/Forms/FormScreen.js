/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import commonStyles from './style';
import CustomInput from '../../customComponents/Custom Input/CustomInput';
import { Helper } from '../../Helper';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const basicInfo = {
    name: '',
    email: '',
    mobileno: '',
    password: '',
};
const FormScreen = () => {
    const styles = commonStyles();

    const [formDetails, setFormDetails] = useState({ ...basicInfo });
    const [fieldError, setFieldError] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        let fieldErrors = {};
        let result = true;
        if (Helper.isUndefined(formDetails.name)) {
            fieldErrors.name = 'Please enter the full name';
            result = false;
        } else if (Helper.check40CharacterOnly(formDetails.name)) {
            fieldErrors.name = 'Invalid name (40 characters only)';
            result = false;
        }

        if (Helper.isUndefined(formDetails.email)) {
            fieldErrors.email = 'Please enter the email';
            result = false;
        } else if (!Helper.checkIsValidEmail(formDetails.email)) {
            fieldErrors.email = 'Please enter valid email';
            result = false;
        }

        if (Helper.isUndefined(formDetails.mobileno)) {
            fieldErrors.mobileno = 'Please enter the mobile number';
            result = false;
        } else if (!Helper.checkIsValidPhone(formDetails.mobileno)) {
            fieldErrors.mobileno = 'Please enter valid mobile number';
            result = false;
        }

        if (Helper.isUndefined(formDetails.password)) {
            fieldErrors.password = 'Please enter the password';
            result = false;
        } else if (!Helper.checkIsValidPassword(formDetails.password)) {
            fieldErrors.password = 'Invalid password format';
            result = false;
        }

        setFieldError(fieldErrors);
        return result;
    };

    const handleOnChangeText = (value, fieldName) => {
        setFormDetails({ ...formDetails, [fieldName]: value });
    };

    //Password show hide handler
    const passwordShowHandler = () => {
        setShowPassword(!showPassword);
    };

    const formHandler = () => {
        if (validate()) {
            setFormDetails(basicInfo);
            setFieldError({});
            setShowPassword(false);
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Form</Text>
                </View>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}>
                    <View>
                        <CustomInput
                            textInputLabel={'Full Name'}
                            onChangeText={value => handleOnChangeText(value, 'name')}
                            value={formDetails.name}
                            error={fieldError.name}
                            placeholder={'Please enter the full name'}
                            required />
                        <CustomInput
                            textInputLabel={'Email'}
                            onChangeText={value => handleOnChangeText(value, 'email')}
                            value={formDetails.email}
                            error={fieldError.email}
                            placeholder={'Please enter the email'}
                            keyboardType="email-address"
                            required />
                        <CustomInput
                            textInputLabel={'Mobile Number'}
                            onChangeText={value => handleOnChangeText(value, 'mobileno')}
                            value={formDetails.mobileno}
                            error={fieldError.mobileno}
                            placeholder={'Please enter the mobile number'}
                            keyboardType="numeric"
                            required
                            rightIcon={
                                <Icon
                                    name={'dialpad'}
                                    size={22}
                                    style={styles.icon}
                                />
                            } />
                        <CustomInput
                            textInputLabel={'Password'}
                            onChangeText={value => handleOnChangeText(value, 'password')}
                            value={formDetails.password}
                            error={fieldError.password}
                            secureTextEntry={!showPassword ? true : false}
                            placeholder={'Please enter the password'}
                            required
                            rightIcon={
                                <Icon
                                    name={!showPassword ? 'eye-off' : 'eye'}
                                    size={25}
                                    style={styles.icon}
                                    onPress={passwordShowHandler}
                                />
                            }
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottomButton}>
                <TouchableOpacity onPress={formHandler} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default FormScreen;
