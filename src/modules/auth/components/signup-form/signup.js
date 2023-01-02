export const signup = (username, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users")) ? 
        JSON.parse(localStorage.getItem("users")) : [];

    const newUser = { 
        name: username, 
        password: password, 
        todos: [{
                title: "Tarefas", 
                content:[]
            }, {
                title: "Em Andamento", 
                content:[]
            }, {
                title: "Finalizadas", 
                content:[]
            }
        ]};

    localStorage.setItem("users", JSON.stringify([...usersStorage, newUser]));
};
