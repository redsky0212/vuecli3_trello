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
    FETCH_BOARD_ITEM({ commit }, id){
        return getBoardList(id)
        .then(response => {
            commit('SET_BOARD_ITEM', response.data.item);
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
    },
    ADD_CARD({commit}, {title, listId, pos}){
        return createCard(title, listId, pos)
            .then(res => {
                commit('SET_ADDCARD', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

};

export default actions;