import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:3000/api/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'users');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }

    getUserEvents() {
        return axios.get(API_URL + 'id/users');
    }
};

export default new UserService();