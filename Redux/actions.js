export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const TOGGLE_TODO  = "TOGGLE_TODO";

export const addTodo = ({ title }) => {
  return {
    type: ADD_TODO,
    payload: { title, status: false, id: Math.floor(Math.random()*1000) },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DEL_TODO,
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};