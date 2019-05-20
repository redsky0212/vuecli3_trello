import { getBoardList, addBoard, login } from '../api';

const actions = {
    FETCH_BOARD({ commit }) {
        return getBoardList()
            .then(response => {
                commit('SET_BOARDS', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    ADD_BOARD({ commit }, title) {
        return addBoard(title);
    },
    LOGIN({ commit }, {email, password}) {
        
        return login(email, password)
            .then(response => {
                commit('SET_LOGIN', response.data.accessToken);
            })
            .catch(error => {
                console.log(error);
            });
    }

};

export default actions;