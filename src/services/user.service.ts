import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:3000/api/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'users');
    }

    getUserEvents() {
        return axios.get(API_URL + 'id/users');
    }

    getEventTypes() {
        return axios.get(API_URL + 'event_types');
    }
}

export default new UserService();