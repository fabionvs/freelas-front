/* eslint-disable import/first */
import api from "./Api";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import moment from 'moment';
import { Subject } from 'rxjs';
const subject = new Subject();


const getCsrf = () => {
    return api
        .get('/sanctum/csrf-cookie');
};

const create = async (data: any) => {
    return api
        .post("/api/signup", data)
        .then((response: any) => {
            if (response.data.success == true) {
                subject.next(response.data.user)
            }
            return response.data;
        });
}

const login = async (address: string, signature: string) => {
    return api
        .post("/login", {
            username: address,
            password: signature,
        })
        .then((response) => {
            subject.next(response.data.user)
            return response.data;
        });
}

const sign = async () => {
    return await getCsrf().then((response) => {
        return api
            .post("/sign")
            .then((response) => {
                return response.data;
            });
    });
}

const firstLogin = async (data:any) => {
    return api
        .post("/api/signup", data)
        .then((response) => {
            return response.data;
        });
}

const logout = () => {
    return api
        .post("/api/logout")
        .then((response) => {
            if (response.data.success == true) {
                cookies.remove('laravel_session')
                observable.clearUser()
                return true
            }
        });
};

const getUser = async () => {
    return await getCsrf().then((response) => {
        return api
            .post("/api/me")
            .then((response) => {
                if (response.data.success == true) {
                    subject.next(response.data.user)
                }
            });
    });
};


const observable = {
    setUser: (user: any) => subject.next(user),
    clearUser: () => subject.next(null),
    onUser: () => subject.asObservable()
};


export default {
    login,
    sign,
    logout,
    getUser,
    firstLogin,
    observable,
    create
};