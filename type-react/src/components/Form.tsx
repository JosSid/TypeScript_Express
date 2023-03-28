import { useState } from "react";

interface Props {
    createTodo: (text: string) => void;
}

export const Form = ({createTodo}: Props) => {
    const [todoText, setTodoText] = useState<string>("")

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(todoText === "") return;
        createTodo(todoText);
        e.currentTarget.reset();
        setTodoText("");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type={'text'} 
                name="newTodoText"
                onChange={handleChange}
                value={todoText}/>
            <button type="submit"
            disabled={!todoText}>Create Todo</button>
        </form>
    )
}