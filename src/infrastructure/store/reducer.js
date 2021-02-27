import {ACTION_NAME} from './consts';

const initState = {
    login: '',
    images: [],
    selectedImageId: '',
    modals: [],
    toggleStatus: false,
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_NAME.CHANGE_LOGIN: {
            return {
                ...state,
                login: action.payload,
            };
        }
        case ACTION_NAME.LOAD_IMAGES: {
            return {
                ...state,
                images: action.payload,
            }
        }
        case ACTION_NAME.CHANGE_SELECTED_IMAGE_ID: {
            return {
                ...state,
                selectedImageId: action.payload,
            }
        }
        case ACTION_NAME.ADD_IMAGE: {
            return {
                ...state,
                images: action.payload,
            }
        }
        case ACTION_NAME.REMOVE_IMAGE: {
            return {
                ...state,
                images: action.payload,
            }
        }
        case ACTION_NAME.TOGGLE_LIKE: {
            return {
                ...state,
                toggleStatus: action.payload,
            }
        }
        default: {
            return state;
        }
    }
};