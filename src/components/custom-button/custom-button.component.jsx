import React from 'react';
import './custom-component.styles.scss';

const CustomButton = ({children,isGoogleSignIn, ...restOfCustomButtonProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...restOfCustomButtonProps}>
        {children}
    </button>
)

export default CustomButton;