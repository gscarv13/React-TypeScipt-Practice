// This is a types file
// A type defined as a class would be like this:
class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}


export default Todo;
