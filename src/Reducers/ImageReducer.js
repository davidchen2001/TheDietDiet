import { IMAGE_UPLOADED, IMAGE_UPLOAD_ERROR } from '../Actions/types';

const initialState = {
    isUploaded: false 
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

        default: 
            return state; 
    }
}