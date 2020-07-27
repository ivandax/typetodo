//the '.d. on this file's name allows the compiler to know that the types here are globally declared
//so no exports needed.

type todo = {
    text: string;
    complete: boolean;
}

type toggleTodo = (selectedTodo : todo) => void;

type AddTodo = (newTodo: string) => void;