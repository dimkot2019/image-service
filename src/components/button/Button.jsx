import React, {memo} from 'react';

import './Button.css';

const Button = ({children, theme = 'primary', ...props}) => {
    const className = `Button Button_${theme}`;
    return (
        <button className={className} {...props}>{children}</button>
    );
};

export default memo(Button);
