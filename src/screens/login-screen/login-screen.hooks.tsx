import { useEffect, useRef, useState } from "react";
import { Alert, TextInput } from "react-native";
import { EmailPattern, ErrorMessages } from "../../utils/constant";
import { resetRoot } from "../../navigators/navigation-utilities";
import { BOTTOM_TABS } from "../../navigators/apisauce-navigation-routes";

export const useLoginScreenHook = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [loginPressed, setLoginPressed] = useState<boolean>(false);
    const [focusedInput, setFocusedInput] = useState<string>('');
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const checkEmail = (fromSubmit = false) => {
        if (loginPressed || fromSubmit) {
            if (!email) {
                setEmailError(ErrorMessages.REQUIRED_EMAIL_ERROR);
                return false;
            }
            if (!EmailPattern.test(email)) {
                setEmailError(ErrorMessages.INVALID_EMAIL_ERROR);
                return false;
            }
        }
        setEmailError('');
        return true;
    };

    const checkPassword = (fromSubmit = false) => {
        if ((loginPressed || fromSubmit) && !password) {
            setPasswordError(ErrorMessages.REQUIRED_PASSWORD_ERROR);
            return false;
        }
        setPasswordError('');
        return true;
    };

    useEffect(() => {
        if (loginPressed) {
            checkEmail();
            checkPassword();
        }
    }, [email, password]);

    const onPressLogin = () => {
        removeFocus();
        setLoginPressed(true);
        const validEmail = checkEmail(true);
        const validPassword = checkPassword(true);
        if (validEmail && validPassword) {
            if (email === 'test@jetdevs.com' && password === 'Test@123') {
                resetRoot(BOTTOM_TABS);
            } else {
                Alert.alert(ErrorMessages.INVALID_CREDENTIALS);
            }
        }
    };

    const removeFocus = () => {
        emailRef.current?.blur();
        passwordRef.current?.blur();
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        focusedInput,
        emailRef,
        passwordRef,
        onPressLogin,
        setFocusedInput,
    };
};