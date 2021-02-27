import React, {memo} from 'react';

import './UserPage.css';

const UserPage = () => {
    return (
        <div className='UserPage'>
                <div className='UserImages1'>
                    <div className='like_photo'>
                        {/* <hr/> */}
                        <i className='fa fa-heart' aria-hidden='true'></i>
                    </div>
                </div>
                <div className='UserImages2'>
                    <div className='like_photo'>
                        {/* <hr/> */}
                        <i className='fa fa-heart' aria-hidden='true'></i>
                    </div>
                </div>
                <div className='UserImages3'>
                    <div className='like_photo'>
                        {/* <hr/> */}
                        <i className='fa fa-heart' aria-hidden='true'></i>
                    </div>
                </div>
        </div>
    );
};

export default memo(UserPage);