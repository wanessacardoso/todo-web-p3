import { createContext, useCallback, useState } from "react";
import Swal from "sweetalert";
import { useAxios } from "../hooks/useAxios";
import UserService from "../services/user.service";

export const UsersContext = createContext({});
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
}
    const axiosInstance = useAxios();
    
    const addUsers = useCallback(async () => {
        async (users) => {
            const userCopy = [...users];
              try {
                const userService = new UserService(axiosInstance);
              const newUser = await userService.add(user);
                userCopy.push(newUser);
                setUsers(userCopy);
        } catch (error) {
            alert("não foi possivel adicionar o usuário"); 
        }
    }, 
    [axiosInstance, users]
}
    );
    return (
        <UsersContext.Provider value={{ users, addUsers }}>
            {children}
        </UsersContext.Provider>
     );