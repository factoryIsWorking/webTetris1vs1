import {createStore} from 'vuex';

const state={
    pageInfo:{
        page: 0,
        list: ['login', 'lobby', 'game']
    },
};
const store = createStore({
    state (){
        return state;
    },
    mutations : {
        changePage(state,page){
            state.pageInfo.page = page;
        }
    }
});
export default store;