// Api Constant
export const DEFAULT_PAGING_COUNT=10;
export const API_URL = 'https://randomuser.me/api';

// REGEX
export const EmailPattern  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Error message
export const ErrorMessages = {
    REQUIRED_EMAIL_ERROR : "Email is required!",
    REQUIRED_PASSWORD_ERROR : "Password is required!",
    INVALID_EMAIL_ERROR :"Please enter valid email!",
    INVALID_CREDENTIALS: "Invalid login details. Please try again!",
    SOMETHING_WENT_WRONG : "Something went wrong!",
    NO_FAVORITES : "No Favourites!",
};
