const getUserToken = () => {
    const user = JSON.parse(localStorage.getItem("userLoggedIn"));
    return user ? user : null;
};

export default getUserToken;