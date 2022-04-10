import BaseButton from './button_type1.vue'
import BaseInput from './input_type1.vue'
import BaseScroll from './scrollable_type1.vue'
//import BaseRadio from './radio_type1.vue'
import TitleEl from './titleEl.vue'

let list = { BaseButton, BaseInput, BaseScroll,
     //BaseRadio, 
     TitleEl };
export default (app) => {
    for (let key of Object.keys(list)) {
        app.component(key, list[key]);
    }
}