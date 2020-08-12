import { IMAGE_UPLOADED, IMAGE_UPLOAD_ERROR, IMAGE_DELETED, IMAGE_DELETE_ERROR } from '../actions/types';

const initialState = {
    isUploaded: false, 
    isDeleted: false 
}

export default function(state = initialState, action) {
    switch (action.type) {
        case IMAGE_UPLOADED:
            return {
                ...state,
                isUploaded: true 
            };
        
        case IMAGE_UPLOAD_ERROR:
            return {
                ...state,
                isUploaded: false 
            };
        
        case IMAGE_DELETED:
            return {
                ...state,
                isDeleted: true
            };
        case IMAGE_DELETE_ERROR:
            return {
                ...state,
                isDeleted: false
            };
        default: 
            return state; 
    }
}