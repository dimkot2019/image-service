import React, {memo} from 'react';
import Button from '../button';

import './AuthPage.css';

const AuthPage = () => {
    return (
        <div className='AuthPage' align='center'>
            <div className='AuthPage__container'>
                <label className='AuthPage__label'>Авторизация:</label>
                <input type='text' className='AuthPage__input' />

                <Button>Войти</Button>
            </div>
        </div>
    );
};

export default memo(AuthPage);