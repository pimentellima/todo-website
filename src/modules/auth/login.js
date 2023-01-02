const login = (username) => {
    localStorage.setItem("userToken", JSON.stringify(username));
};

export default login;