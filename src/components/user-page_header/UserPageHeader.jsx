import React, {memo} from 'react';

import './UserPageHeader.css';

const UserPageHeader = () => {
    return (
        <div className='UserPageHeader'>
            <div className='UserPageHeader_top'><h1>Галерея</h1></div>
            
            <div className='UserPageHeader_bottom'></div>
        </div>
    );
};

export default memo(UserPageHeader);