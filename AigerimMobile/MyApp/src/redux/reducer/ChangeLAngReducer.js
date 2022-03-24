const INITIAL_STATE = "ru";
const changelangReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ru":
            return state = "ru";
            break;

        case "kz":
            return state = "kz";
            break;

        case "en":
            return state = "en";
            break;

        case "tr":
            return state = "tr";
            break;


    }  
}
export default changelangReducer;