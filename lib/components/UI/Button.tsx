import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from "../../styles/styles.ts";

const CustomButton = ({ onPress, title, disabled = false }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableOpacity
            style={[
                styles.loadMoreButton,
                isPressed && !disabled && styles.loadMoreButtonPressed,
                disabled && styles.loadMoreButtonDisabled
            ]}
            onPress={disabled ? null : onPress}
            onPressIn={() => !disabled && setIsPressed(true)}
            onPressOut={() => !disabled && setIsPressed(false)}
            disabled={disabled}
        >
            <Text style={[
                styles.buttonText,
                disabled && styles.buttonTextDisabled
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;