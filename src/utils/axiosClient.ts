import axios from 'axios';
import firebase from 'firebase'
import { firebaseApp } from './firebase/config';


const wrapperAxios = axios.create({
    timeout: 1000000,
});

wrapperAxios.interceptors.request.use(
    async config => {
        config.headers = {
            FCM_USER_TOKEN: firebaseApp.auth()?.currentUser?.uid,
        }

        return config
    },
    error => {
        Promise.reject(error)
    }
)

export default wrapperAxios