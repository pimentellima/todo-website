import { useCurrentUser } from '../../../shared-hooks/use-current-user'

export const useLogin = () => {
    const { setCurrentUser } = useCurrentUser();

    const login = (username) => {
        const storage = JSON.parse(localStorage.getItem("users"));
        const user = storage.find((user) => user.name === username);
        localStorage.setItem("userToken", JSON.stringify(username));
        setCurrentUser(user);
    };
    
    return login;
};