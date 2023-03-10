import * as actionTypes from './actionTypes';
import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';

export const registerUser = (data, navigate) => dispatch => {
    Axios.post('user/register', data)
        .then(response => {
            navigate('/login');
            Toast.success(response.data.message);
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
}