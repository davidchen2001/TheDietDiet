import axios from 'axios'
import {IMAGE_UPLOADED, IMAGE_UPLOAD_ERROR } from './types';
import {returnError} from './ErrorAction'; 

export const uploadImage = ({ imageName}) => dispatch => {

    const body = JSON.stringify({ imageName} )

    axios
    .post('http://localhost:5000/images/upload', body)
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