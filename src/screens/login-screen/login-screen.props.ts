export type ILoginScreen = {
    email: string;
    setEmail: (data: string) => void;
    password: string;
    setPassword: (data: string) => void;
    emailError: string;
    passwordError: string;
    emailRef: any;
    passwordRef: any;
    onPressLogin: () => void;
};