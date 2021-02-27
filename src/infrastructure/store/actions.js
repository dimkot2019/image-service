import {ACTION_NAME} from './consts';

export const changeLogin = (login) => ({
    type: ACTION_NAME.CHANGE_LOGIN,
    payload: login,
});

export const loadImages = (images) => ({
    type: ACTION_NAME.LOAD_IMAGES,
    payload: images,
});

export const changeSelectedImageId = (id) => ({
    type: ACTION_NAME.CHANGE_SELECTED_IMAGE_ID,
    payload: id,
});

export const addImage = (images) => ({
    type: ACTION_NAME.ADD_IMAGE,
    payload: images,
});

export const removeImage = (images) => ({
    type: ACTION_NAME.REMOVE_IMAGE,
    payload: images,
});

export const toggleLike = (payload) => ({
    type: ACTION_NAME.TOGGLE_LIKE,
    payload,
});
