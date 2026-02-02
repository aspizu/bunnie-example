import TodoItem from "./todo-item.jsx"

export default function TodoList({todos = []}) {
    return (
        <div id="todo-list" class="space-y-2">
            {todos.length === 0 ?
                <div class="text-center text-muted-foreground py-8">
                    No todos yet. Add one above!
                </div>
            :   todos.map((todo) => <TodoItem {...todo} />)}
        </div>
    )
}
