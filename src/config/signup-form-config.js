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
        const username = fields.username.value;
        const password = fields.password.value;
        const confirmPassword = fields.confirmPassword.value;
        const storage = JSON.parse(localStorage.getItem("users"));

        const errors = {};
        if (!username) errors.username = 'Requirido';
        if (!password) errors.password = 'Requirido';
        if (!confirmPassword) errors.confirmPassword = 'Requirido';
        if(storage && storage.some(user => user.name === username)) {
            errors.username = 'Usuário já existe';
        } 
        else if(password != confirmPassword) {
            errors.password = 'As senhas não conferem';
            errors.confirmPassword = 'As senhas não conferem';
        }
        return errors; 
    },
};

export default SignupFormConfig;