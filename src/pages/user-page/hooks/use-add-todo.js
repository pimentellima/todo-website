import { useUserTodos } from "./use-user-todos";

export const useAddTodo = () => {
    const { userTodos, setUserTodos } = useUserTodos();

    const addTodo = (data, sectionIndex) => {
        const todo = {};
        const newTodos = [...userTodos];
        const section = newTodos[sectionIndex];
    
        Object.keys(data).map(key => {
            todo[key] = data[key].value;
        });
        todo.id = crypto.randomUUID();
        
        section.content.push(todo);
        newTodos.splice(sectionIndex, 1, section);
        setUserTodos(newTodos);
    };

    return addTodo;
};
