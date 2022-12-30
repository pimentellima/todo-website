const TodoFormConfig = {
    validate: (fields) => {
        const errors = {};
        const title = fields.title;
        if(title.value === '') errors.title = 'Requirido';
        return errors;
    },
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
    }
};
export default TodoFormConfig;
