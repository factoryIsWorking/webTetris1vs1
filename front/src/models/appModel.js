import {createStore} from 'vuex';
import messageModel from './messageModel';

const MARGIN = '0.7em';
const FORM_LEN = '500px';

const state={
    pageInfo:{
        page: 0,
        list: ['login', 'lobby', 'game']
    },
    theme:{
        ButtonStyle:{
            width:'20%',
            height:'7.5%',
            fontSize:'0.7em',
            margin:MARGIN,
        },
        InputStyle:{
            width:'60%',
            height:'5.5%',
            margin:MARGIN,
        },
        BackImage : {
            'background-image': `url(${messageModel.CONFIG.assetURL}/background/8.jpg)`
        },
        FormStyle: {
          maxHeight: FORM_LEN,
          maxWidth: FORM_LEN,
          height: '100%',
          width: '100%',
        },
        FontStyle:{
            fontSize: '0.9em',
            textAlign: 'center',
            fontWeight: 'bold',
            padding:'0.5em',
            border: '0',
            borderRadius: '3em',
            transition: '0.15s'
        }
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