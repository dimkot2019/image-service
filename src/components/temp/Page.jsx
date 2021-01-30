import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './Page.css';

const Page = () => {
    return (
        <div>
            <div className='layout'>
                <div className='headerPage' align='center'>
                    <div className='headerPage_buffer1'></div>
                    <div className='headerPage_auth'>
                        <h2 className='auth_title'>Авторизация:</h2>
                        <input type='text' className='auth_input'/>
                        <br/>
                        <br/>
                        <button type='button' className='button_enter'>
                            <span className='button_text'>Войти</span>
                        </button>
                    </div>
                    <div className='headerPage_buffer2'></div>
                </div>
                <br/>
                <div className='prevContainer'>
                    <div className='container'>
                        <div className='userPage'>
                            <div className='userPage_name'>
                                <h2 className='user_name'>Имя пользователя</h2>
                            </div>
                            <div className='userPage_exit'>
                                <br/>
                                <button type='button' className='button_exit'>
                                    <span className='button_text'>Выйти</span>
                                </button> 
                            </div>
                        </div>
                        <div className='modalAddPhoto'>
                            <div className='modalAddPhoto_window'>
                                <form>
                                    <div className='modalAddPhoto_body' align='center'>
                                        <h2 className='addPhoto_title'>Добавление фото</h2>
                                        <div className='photo_preview'></div>
                                        <br/>
                                        <span className='url_title'>url:</span>
                                        <input type='text' className='url_input'/>
                                    </div>
                                    <div className='modalAddPhoto_footer'>
                                        <button type='submit' className='button_add'>
                                            <span className='button_text'>Добавить</span>
                                        </button>
                                        <button type='button' className='buttonAddPhoto_сancel'>
                                            <span className='button_text'>Отмена</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='modalSearchUsers'>
                            <div className='modalSearchUsers_window'>
                                <form>
                                    <div className='modalSearchUsers_body' align='center'>
                                        <h2 className='searchUsers_title'>Поиск пользователей</h2>
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
                                        <button type='button' className='buttonSearchUsers_сancel'>
                                            <span className='button_text'>Отмена</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='userImages1'>
                            <div className='userImages1_1'></div>
                            <div className='userImages1_2'>
                                <div className='like_photo'>
                                    <hr/>
                                    <i className='fa fa-heart' aria-hidden='true'></i>
                                </div>
                            </div>
                            <div className='userImages1_3'></div>
                        </div>
                        <div className='userImages2'>
                            <div className='userImages2_1'></div>
                            <div className='userImages2_2'></div>
                            <div className='userImages2_3'></div>
                        </div>
                        <div className='searchAddProfile'>
                            <div className='search_user'>
                                <button type='text' className='button_search_user'>
                                    <span className='button_text'>Поиск</span>
                                </button>
                            </div>
                            <div className='add_photo'  align='center'>
                                <button type='button' className='button_add_photo'>
                                    <span className='button_text'>Добавить фото</span>
                                </button>
                            </div>
                            <div className='profile' align='center'>
                                <button type='button' className='button_profile'>
                                    <span className='button_text'>Профиль</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default React.memo(Page);
