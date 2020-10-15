export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589  
        }
    ]
    
}

export const ACTIONS = {
    ADDTODO: 'addTodo',
    TOOGLE: 'toggle',
    DELETE: 'delete'
}

export const reducerfcn = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADDTODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case ACTIONS.TOOGLE:
            return {...state, todos: state.todos.map(elem => {
                if (elem.id === action.payload) {
                    return ({...elem, completed: !elem.completed})
                } else {
                    return elem
                }
            })
            }
        case ACTIONS.DELETE:
            return {...state, todos: state.todos.filter(elem => !elem.completed)}
        default: return state;
    }
}

// const newTodo = (item) => {
//     return { id: Date.now(), name: item, completed: false };
// }