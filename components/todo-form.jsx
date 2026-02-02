import Button from "./button.jsx"
import Input from "./input.jsx"

export default function TodoForm() {
    return (
        <form
            hx-post="/todos"
            hx-target="#todo-list"
            hx-swap="afterbegin"
            _="on htmx:afterRequest reset() me"
            class="flex gap-2 mb-6"
        >
            <Input
                type="text"
                name="title"
                placeholder="Add a new todo..."
                required
                class="flex-1"
            />
            <Button type="submit" variant="default">
                Add Todo
            </Button>
        </form>
    )
}
