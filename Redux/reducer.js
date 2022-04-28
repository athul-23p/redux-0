import { ADD_TODO, DEL_TODO, TOGGLE_TODO } from "./actions.js";

export const reducer = (store,{type,payload}) => {
    switch(type){
        case ADD_TODO:
            return {...store,todos:[...store.todos,payload]};
        case DEL_TODO:
            return {...store,todos: store.todos.filter(el => el.id !== payload.id)};
        case TOGGLE_TODO:
            return {...store,todos:store.todos.map(todo => todo.id !== payload.id ? todo : {...todo,status:!todo.status})}
        default:
            return store;
    }
}