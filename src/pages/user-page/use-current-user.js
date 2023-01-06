import { useContext } from "react";
import { CurrentUserContext } from "../../context/current-user-context";

export const useCurrentUser = () => {
    const { 
        currentUser, 
        setCurrentUser 
    } = useContext(CurrentUserContext);

    return { currentUser, setCurrentUser };
};