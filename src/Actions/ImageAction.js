import axios from 'axios'
import {IMAGE_UPLOADED, IMAGE_UPLOAD_ERROR } from './types';
import {returnError} from './ErrorAction'; 

export const uploadImage = () => dispatch => {

    axios
    .post('/api/images/upload')
    .then(res =>
        dispatch({
            type: IMAGE_UPLOADED,
            payload: res.data 

        }))
    .catch(err => {
        dispatch(returnError(err.response.data, err.response.status, 'IMAGE_UPLOAD_ERROR'));
        dispatch({
            type: IMAGE_UPLOAD_ERROR,

        })
    })
}

export const deleteImage = ({ imageData }) => dispatch => {

    const body= JSON.stringify( { imageData } );

    axios
    .delete('/api/images/delete', body)
    .then(res => 
        dispatch({
            type: IMAGE_DELETED
        }))
    .catch(err => {
        dispatch(returnError(err.response.data, err.response.status, 'IMAGE_DELETE_ERROR'));
        dispatch({
            type: IMAGE_DELETE_ERROR
        })
    })

}