const TodoFormConfig = {
    fields: {
        title: {
            value: '',
            error: '',
        },
        description: {
            value: '',
            error: null,
        },
        deadline: {
            value: '',
            error: null,
        },
        priority: {
            value: '',
            error: null,
        }
    },
    validate: (fields) => {
        const errors = {};
        const title = fields.title;
        if(title.value === '') errors.title = 'Requirido';
        return errors;
    },
};
export default TodoFormConfig;
