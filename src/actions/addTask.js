let constId = 0;

export const addTask = (task) => ({//action for create task
    type: 'ADD_TASK',
    payload: {
        id: ++constId,
        task
    }
});

