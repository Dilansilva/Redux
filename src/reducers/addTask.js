const initialState = {
    allIds: [],
    allTask: []
};

const addTask = (state = 'ujbjb',action) => {
    switch (action.type) {
        case "ADD_TASK":{
            const {id,task} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds,id],
                allTask: [...state.allTask,task]
            }
        }
        default:
            return state;
    }
}

export default addTask;