const getters = {
    fetchedBoards(state) {
        return state.boards
    },
    fetchedBoardItem(state){
        return state.board_item;
    },
    fetchedCard(state) {
        return state.card;
    },
    isAuth(state){
        return state.token;
    },
    getIsAddBoard(state){
        return state.isAddBoard;
    }
};

export default getters;