import { useContext } from "react";
import { CurrentUserContext } from "../context/current-user-context";

export const useAuth = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    return { currentUser, setCurrentUser };
};