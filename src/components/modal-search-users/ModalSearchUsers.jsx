import React, {memo} from 'react';

import './ModalSearchUsers.css';
import Button from '../button';

const ModalSearchUsers = () => {
    return (
        <div className='modalSearchUsers'>
            <div className='modalSearchUsers_window'>
                <form className='modalSearchUsers_form'>
                    <div className='modalSearchUsers_body' align='center'>
                        <span className='searchUsers_title'>Поиск пользователей</span>
                        <div className='row1_input'>
                            <input type='text' className='searchUsers_input'/>
                        </div>
                        <br/>
                        <div className='row2'></div>    
                        <div className='row3'></div>    
                        <div className='row4'></div>    
                        <div className='row5'></div>    
                        <div className='row6'></div>    
                    </div>
                    <div className='modalSearchUsers_footer'>
                        <Button style={{marginTop: '35px',marginLeft: '850px'}}>Отмена</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default memo(ModalSearchUsers);