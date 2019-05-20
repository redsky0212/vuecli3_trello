const getters = {
    fetchedBoards(state) {
        return state.boards
    },
    isAuth(state){
        return state.token;
    },
    getIsAddBoard(state){
        return state.isAddBoard;
    }
};

export default getters;