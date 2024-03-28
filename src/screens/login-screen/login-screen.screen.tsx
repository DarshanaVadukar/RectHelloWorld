import React from "react";
import LoginScreenView from "./components/login-screen.view";
import { useLoginScreenHook } from "./login-screen.hooks";

export const LoginScreen = () => {

    const { email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        emailRef,
        passwordRef,
        onPressLogin, } = useLoginScreenHook();

    return (
        <LoginScreenView email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            emailError={emailError}
            passwordError={passwordError}
            emailRef={emailRef}
            passwordRef={passwordRef}
            onPressLogin={onPressLogin} />
    );
};