import React from "react";
import { ILoginScreen } from "../login-screen.props";
import { styles } from "./login-screen.style";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View, SafeAreaView, Image } from "react-native";
import { APP_ICON_LARGE } from "../../../../assets/images";
import { Button } from "@rneui/base";
import { colors } from "../../../utils/theme";
import TextInput from "../../../components/text-input";

const LoginScreen = (props: ILoginScreen) => {

    const { email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        emailRef,
        passwordRef,
        onPressLogin,
    } = props;

    return (
        <SafeAreaView style={styles.rootView}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainView}>

                    <View style={styles.logoWrapper}>
                        <Image style={styles.headerImage} source={APP_ICON_LARGE} />
                    </View>

                    <Text style={styles.title}>LOGIN</Text>
                    <View style={styles.textFieldWrapper}>
                        <TextInput
                            autoCapitalize="none"
                            leftIcon={'email-outline'}
                            leftIconType={'material-community'}
                            label={email ? '' : 'Email'}
                            value={email}
                            forwardedRef={emailRef}
                            isFocused={emailRef?.current?.isFocused()}
                            onChangeText={setEmail}
                            returnKeyType="next"
                            secureTextEntry={false}
                            onSubmitEditing={() => {
                                passwordRef.current?.focus();
                            }}
                            error={emailError}
                            tintColor={colors.primary}
                        />

                        <TextInput
                            autoCapitalize="none"
                            leftIcon={'lock'}
                            leftIconType={'octicon'}
                            label={password ? '' : 'Password'}
                            value={password}
                            forwardedRef={passwordRef}
                            isFocused={passwordRef.current?.isFocused()}
                            onChangeText={setPassword}
                            returnKeyType="done"
                            secureTextEntry={true}
                            error={passwordError}
                            tintColor={colors.primary}
                        />
                    </View>
                    <Button
                        title={'LOGIN'}
                        onPress={() => {
                            onPressLogin();
                        }}
                        disabled={!email || !password}
                        buttonStyle={styles.buttonStyle}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView >
    );
};

export default LoginScreen;