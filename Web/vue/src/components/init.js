import BaseButton from "./button_type1.vue";
import BaseInput from "./input_type1.vue";
import TitleEl from "./titleEl.vue";

let list = {
    BaseButton,
    BaseInput,
    TitleEl,
};
export default (app) => {
    for (let key of Object.keys(list)) {
        app.component(key, list[key]);
    }
};
