// GitHub 의 ( jeonghwan-kim/lecture-vue-trello-server ) 를 clone해서 로컬로 띄워 api 서버로 사용.
// localhost:3000 으로 띄워 api를 테스트 해야한다.

import axios from 'axios';
import router from '../routes';

const config = {
    baseUrl: 'http://localhost:3000/'
}

const onUnauthrorized = () => {
    router.push('/login');
}

const http = axios.create({
    //withCredentials: true
})
//요청 인터셉터 필요에 따라 사용
http.interceptors.request.use(function (config) {
    // ...
    return config
}, function (error) {
    // ...
    return Promise.reject(error)
});

//응답 인터셉터 필요에 따라 사용
http.interceptors.response.use(function (response) {
    // ...
    return response
}, function (error) {
    if( error.response.status == 401 ){
        onUnauthrorized();
    }
    return Promise.reject(error)
})

const fetchHealth = () => {
    return http.get(`${config.baseUrl}health`);
}

const setAuthInHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
};

const login = ( email, password ) => {
    return http({
        method : 'post',
        url: `${config.baseUrl}login`,
        data : {email, password}
    });
}

const getBoardList = (id) => {
    if( id ){
        return http.get(`${config.baseUrl}boards/${id}`);
    }else{
        return http.get(`${config.baseUrl}boards`);
    }
}

const addBoard = (title) => {
    return http({
        method: 'post',
        url: `${config.baseUrl}boards`,
        data: { title }
    });
}

const createCard = (title, listId, pos) => {
    let obj = {};
    if(!pos){
        obj = { title, listId};
    }else{
        obj = { title, listId, pos };
    }
    return http.post(`${config.baseUrl}cards`, obj);
};

const getCard = (id) => {
    return http.get(`${config.baseUrl}cards/${id}`);
}

const updateCard = (id, payload) => {
    return http.put(`${config.baseUrl}cards/${id}`, payload);
}

export {
    fetchHealth,
    getBoardList,
    login,
    setAuthInHeader,
    addBoard,
    createCard,
    getCard,
    updateCard
}