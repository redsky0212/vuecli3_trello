import { setAuthInHeader } from '../api';

const mutations = {
    SET_BOARDS(state, list) {
        state.boards = list;
    },
    SET_BOARD_ITEM(state, item){
        state.board_item = item;
    },
    SET_LOGIN(state, data){
        if (!data) { return; }
        state.token = data;
        localStorage.setItem('token', data);
        setAuthInHeader(data);
    },
    SET_LOGOUT(state) {
        state.token = null;
        delete localStorage.token;
        setAuthInHeader(null);
    },
    SET_ISADDBOARD(state, data){
        state.isAddBoard = data;
    },
    SET_CARD(state, data){
        state.card = data;
    },
    SET_THEME(state, color){
        state.bodyColor = color || '#ffffff';
        state.navbarColor = color ? 'rgba(0,0,0,.15)' : '#026aa7'
    },
    SET_IS_SHOW_BOARD_SETTINGS(state, toggle){
        state.isShowBoardSettings = toggle;
    }
};

export default mutations;