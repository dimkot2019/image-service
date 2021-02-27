import React, {memo} from 'react';

import UserPageHeader from '../user-page_header';
import UserPage from '../user-page';
import UserPageFooter from '../user-page_footer';

import './MainPage.css';

const MainPage = () => {
    return (
        <div className='MainPage'>
            <div className='MainPage_container'>

                <UserPageHeader />

                <UserPage />
                
                <UserPageFooter />

            </div>
        </div>
    );
};

export default memo(MainPage);