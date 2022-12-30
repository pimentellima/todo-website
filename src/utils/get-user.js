const getUser = (username) => {
    const usersStorage = JSON.parse(localStorage.getItem("users"));
    const user = usersStorage && usersStorage.find((user) => user.name === username);
    return user;
};

export default getUser;