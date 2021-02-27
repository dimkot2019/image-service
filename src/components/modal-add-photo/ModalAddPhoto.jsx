import React, {memo} from 'react';
import Button from '../button';

import './ModalAddPhoto.css';

const ModalAddPhoto = () => {
    return (
        <div className='modalAddPhoto'>
            <div className='modalAddPhoto_window'>
                <form className='modalAddPhoto_form'>
                    <div className='modalAddPhoto_body' align='center'>
                        <br/>
                        <span className='addPhoto_title'>Добавление фото</span>
                        <div className='photo_preview'></div>
                        <br/>
                        <span className='url_title'>url:</span>
                        <input type='text' className='url_input'/>
                    </div>
                    <div className='modalAddPhoto_footer'>
                        <Button type='submit' theme='third'>Добавить</Button>
                        <Button theme='fourth'>Отмена</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default memo(ModalAddPhoto);