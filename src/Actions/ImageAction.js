import axios from 'axios'
import {IMAGE_UPLOADED, IMAGE_UPLOAD_ERROR, IMAGE_DELETED, IMAGE_DELETE_ERROR } from './types';
import {returnErrors} from './ErrorAction'; 

export const uploadImage = (imageObj) => dispatch => {

    axios
    .post('/api/images/upload', imageObj)
    .then(res =>
        dispatch({
            type: IMAGE_UPLOADED,
            payload: res.data 

        }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'IMAGE_UPLOAD_ERROR'));
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
        dispatch(returnErrors(err.response.data, err.response.status, 'IMAGE_DELETE_ERROR'));
        dispatch({
            type: IMAGE_DELETE_ERROR
        })
    })

}