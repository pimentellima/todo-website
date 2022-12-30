const SignupFormConfig = {
    fields: {
        username: {
            value:'',
            errorMessage: ''
        },
        password: {
            value:'',
            errorMessage:''
        },
        confirmPassword: {
            value:'',
            errorMessage:''
        }
    },
    validate: (fields) => {
        const username = fields.username;
        const password = fields.password;
        const confirmPassword = fields.confirmPassword;
        const usersStorage = JSON.parse(localStorage.getItem("users"));
        const errors = {};
        if (!username.value) errors.username = 'Não pode ser vazio';
        if (!password.value) errors.password = 'Não pode ser vazio';
        if (!confirmPassword.value) errors.confirmPassword = 'Não pode ser vazio';
        if(usersStorage && usersStorage.some(user => user.name === username.value)) errors.username = 'Usuário já existe';
        else if(password.value != confirmPassword.value) {
            errors.password = 'As senhas não conferem';
            errors.confirmPassword = 'As senhas não conferem';
        }
        return errors; 
    },
};

export default SignupFormConfig;