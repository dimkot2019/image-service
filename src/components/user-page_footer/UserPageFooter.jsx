import React, {memo} from 'react';
import Button from '../button';

import './UserPageFooter.css';

const UserPageFooter = () => {
    return (
            <div className='UserPageFooter'>
                <div className='Search_user'>
                    <Button style={{height:'31px'}}><i class="fa fa-search fa-2x" aria-hidden="true"></i></Button>
                    {/* <input type='text' className='Search__input' placeholder='Поиск' /> */}
                </div>
                <div className='Add_photo'  align='center'>
                    <Button><i class="fa fa-plus fa-2x" aria-hidden="true"></i></Button>
                </div>
                <div className='Profile' align='end'>
                    <Button><i class="fa fa-user fa-2x" aria-hidden="true"></i></Button>
                </div>
            </div>
    );
};

export default memo(UserPageFooter);