import React from 'react';
import './custom-component.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...restOfCustomButtonProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...restOfCustomButtonProps}>
        {children}
    </button>
)

export default CustomButton;