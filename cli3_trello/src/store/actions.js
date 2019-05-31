import { 
    getBoardList,
    addBoard,
    login,
    createCard,
    getCard,
    updateCard
} from '../api';

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
    ADD_CARD({dispatch, state}, {title, listId, pos}){
        
        return createCard(title, listId, pos)
            .then(res => {
                dispatch('FETCH_BOARD_ITEM', state.board_item.id);
            })
            .catch(error => {
                console.log(error);
            });
    },
    GET_CARD({ commit }, id) {

        return getCard(id)
            .then(res => {
                commit('SET_CARD', res.data.item);
            })
            .catch(error => {
                console.log(error);
            });
    },
    UPDATE_CARD({ commit, dispatch, state }, {id, title, description, pos, listId}) {

        return updateCard(id, {title, description, pos, listId})
            .then((res) => {
                
                dispatch('GET_CARD', res.data.item.id);
            })
    }

};

export default actions;