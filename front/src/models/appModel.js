import { createStore } from 'vuex';
import messageModel from './messageModel';

const MARGIN = '0.7em';
const FORM_LEN = '500px';
const RADIOUS = '15px';

const state = {
    pageInfo:{
        page: 1,//0
        list: ['login', 'lobby']
    },
    theme: {
        LoginPage:{
            ButtonStyle: {
                width:'20%',
                height: '7.5%',
                fontSize: '0.9em',
                margin: MARGIN,
            },
            InputStyle: {
                width: '60%',
                height: '5.5%',
                margin: MARGIN,
            },
            FontStyle: {
                fontSize: '0.9em',
                textAlign: 'center',
                fontWeight: 'bold',
            },
        },
        LobbyPage:{
            ButtonStyle: {
                width:'100%',
                fontSize: '1.5em',
                margin: MARGIN,
            },
            InputStyle: {
                width: '90%',
                fontSize: '1.5em',
                margin: MARGIN,
            },
            FontStyle: {
                fontSize: '1.5em',
                textAlign: 'left',
                fontWeight: 'bold',
            },
            Radious:{
                padding: '0.5em',
                border: '0',
                borderRadius: '2em',
                transition: '0.15s'
            },
            gapSize : 25,
        },
        BackImage: {
            backgroundImage: `url(${messageModel.CONFIG.assetURL}/background/8.jpg)`
        },
        FormStyle: {
            maxHeight: FORM_LEN,
            maxWidth: FORM_LEN,
            height: '100%',
            width: '100%',
        },
        BoxStyle:{
            backgroundColor: 'white',
            borderRadius: RADIOUS,
        },
        FlexCol: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        },
        FlexRow: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
        },
        Radious:{
            padding: '0.5em',
            border: '0',
            borderRadius: '3em',
            transition: '0.15s'
        }
    },
};
const store = createStore({
    state() {
        return state;
    },
    mutations: {
        changePage(state, page) {
            state.pageInfo.page = page;
        }
    }
});
export default store;