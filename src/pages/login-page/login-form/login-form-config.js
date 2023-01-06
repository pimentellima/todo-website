const LoginFormConfig = {
    fields: {
        username: {
            value:'',
            errorMessage: ''
        },
        password: {
            value:'',
            errorMessage:''
        }
    },
    validate: (fields) => {
        const username = fields.username.value;
        const password = fields.password.value;
        const storage = JSON.parse(
            localStorage.getItem("users")
            );
        const user = storage && storage.find(
            (user) => user.name === username
            );
        const errors = {};
        if(!username) errors.username = 'Requirido';
        if(!password) errors.password = 'Requirido';
        if(username && password && !user) {
            errors.username = 'Usuário não encontrado';
        }
        if(username && user && password && password != user.password) {
            errors.password = 'Senha incorreta';
        };
        return errors; 
    },
};

export default LoginFormConfig;