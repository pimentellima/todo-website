const TodoFormConfig = {
    fields: {
        title: {
            value: '',
            errorMessage: '',
        },
        description: {
            value: '',
            errorMessage: null,
        },
        deadline: {
            value: '',
            errorMessage: null,
        },
        priority: {
            value: '',
            errorMessage: null,
        }
    },
    validate: (fields) => {
        const errors = {};
        const title = fields.title.value;
        if(title === '') errors.title = 'Requirido';
        return errors;
    },
};
export default TodoFormConfig;
