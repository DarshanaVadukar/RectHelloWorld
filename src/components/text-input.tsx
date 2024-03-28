import { StyleProp, StyleSheet, TextInputProps, TextStyle, View } from "react-native";
import { colors } from "../utils/theme";
import { horizontalScale, verticleScale } from "../utils/scalling";
import React from "react";
import {TextField} from 'rn-material-ui-textfield';
import { Icon } from "@rneui/themed";


export interface TextFieldProps extends TextInputProps {
    label: string;
    inputStyle?: StyleProp<TextStyle>;
    tintColor?: string;
    baseColor?: string;
    leftIcon?: string;
    leftIconType?: string;
    placeholder?: string;
    value: string;
    error?: string;
    forwardedRef?: any;
    textColor?: string;
    fontSize?: number;
    labelFontSize?: number;
    labelTextStyle?: StyleProp<TextStyle>;
    onChangeText: (e: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    secureTextEntry?: boolean;
    isFocused?: boolean;
}

function TextInput(props: TextFieldProps): React.ReactElement {
    const {
        forwardedRef,
        leftIcon,
        leftIconType,
        label,
        value,
        error,
        onChangeText,
        onFocus,
        onBlur,
        onSubmitEditing,
        textColor = colors.textBlack,
        fontSize = verticleScale(16),
        labelFontSize = verticleScale(14),
        tintColor = colors.gray,
        baseColor = colors.gray,
        labelTextStyle = styles.inputLabel,
        returnKeyType = 'done',
        secureTextEntry = false,
        maxLength,
        keyboardType,
        isFocused,
        ...rest
    } = props;

    const renderLeftItem = () => {
        const iconColor = isFocused ? colors.primary : colors.gray;
        return (
            <View style={styles.leftView}>
                {leftIcon && (
                    <Icon
                        name={leftIcon}
                        type={leftIconType}
                        color={iconColor}
                        size={horizontalScale(25)}
                    />
                )}
            </View>
        );
    };


    return (
        <TextField
            label={label}
            value={value}
            error={error}
            ref={forwardedRef}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            textColor={textColor}
            fontSize={fontSize}
            labelFontSize={labelFontSize}
            tintColor={tintColor}
            baseColor={baseColor}
            errorColor={colors.error}
            labelTextStyle={labelTextStyle}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            renderLeftAccessory={renderLeftItem}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            lineWidth={1}
            activeLineWidth={1}
            disabledLineWidth={1}
            keyboardType={keyboardType}
            {...rest}
        />
    );
}

export default TextInput ;

const styles = StyleSheet.create({
    inputLabel: {
        paddingTop: 3,
        color: colors.white,
    },
    inputText: {
        fontSize: verticleScale(14),
    },
    leftView: { paddingEnd: 10 },
});