import { createContext, useCallback, useState } from "react";
import Swal from "sweetalert2";
import { useAxios } from "../hooks/useAxios";
import UserService from "../services/user.service";

export const UsersContext = createContext({});
export const UserProvider = ({ children }) => {
    const [users, addUsers] = useState([]);
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
                Swal.fire({
                    html:"Usuário cadastrado com sucesso!"
                })
        } catch (error) {
            Swal.fire({
                html:"Não foi possivel adicionar o usuario" 
        }
            )};
    }, 
    [axiosInstance, users]
}
    );
    return (
        <UsersContext.Provider value={{ users, addUsers }}>
            {children}
        </UsersContext.Provider>
     );
