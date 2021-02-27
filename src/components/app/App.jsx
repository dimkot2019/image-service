import React, {memo} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import {ROUTES} from '../../consts';
import MainPage from '../main-page';
import AuthPage from '../auth-page';
import TopMenu from '../top-menu';
import ModalAddPhoto from '../modal-add-photo';
import ModalSearchUsers from '../modal-search-users';
import './App.css';

const App = () => {
    return (
        <Router>
            <TopMenu />
            {/* <ModalAddPhoto /> */}
            {/* <ModalSearchUsers /> */}
            <Switch>
                <Route path={`/${ROUTES.MAIN}`} exact>
                    <MainPage />
                </Route>
                <Route path={`/${ROUTES.AUTH}`} exact>
                    <AuthPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default memo(App);

/**
 * Фронт работ:
 * Сверстать модальные окна внутри компонентов
 * Авторизация
 * Связать данные с бека с представлением
 * Функционал управления картинками (добавление\удаление\лайки)
 */

/**
 * Домашнее задание:
 * Для всех констант экшенов написать action_creators функции (и заполнить редьюсер для них)
 * Перенести модалки в отдельные компоненты
 * Доработать верстку до стилей из макета
 * Найти и добавить шрифт близкий к макету google fonts
 */