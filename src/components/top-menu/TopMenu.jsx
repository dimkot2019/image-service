import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import Button from '../button';
import {actions} from '../../infrastructure/store/config';

import './TopMenu.css';

const TopMenu = () => {
    const {login} = useSelector(state => state);

    const handleSignIn = () => {
        actions.changeLogin('Дмитрий Котелевич');
    };

    const handleSignOut = () => {
        actions.changeLogin('');
    };

    return (
        <div className='UserName'>
            <div className='UserName_container'>
                {!login && <Button onClick={handleSignIn} style={{margin:'auto'}}>Войти</Button>}

                {login && <h2 className='Name'>{login}</h2>}
                {login && <Button theme='secondary' onClick={handleSignOut}>Выйти</Button>}
            </div>
        </div>
    );
};

export default memo(TopMenu);
