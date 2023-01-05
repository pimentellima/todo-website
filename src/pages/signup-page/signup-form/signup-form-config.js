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
        const name = fields.username.value;
        const password = fields.password.value;
        const confirmPassword = fields.confirmPassword.value;
        const storage = JSON.parse(localStorage.getItem("users"));
        const user = storage.find(user => user.name === name)
        const errors = {};
        if (name.length < 8) errors.username = 
            'O nome de usuário deve ter no mínimo 8 caracteres';
        if (password.length < 8) errors.password = 
            'A senha deve ter no mínimo 8 caracteres';
        else if(storage && user) errors.username = 'Usuário já existe'
        else if(password != confirmPassword) {
            errors.password = 'As senhas não conferem';
            errors.confirmPassword = 'As senhas não conferem';
        };
        return errors; 
    },
};

export default SignupFormConfig;