import Button from "./button.jsx"
import Card from "./card.jsx"

export default function TodoItem({id, title, completed}) {
    return (
        <Card
            id={`todo-${id}`}
            class={[
                "flex items-center gap-3 p-4 transition-all mb-2",
                completed && "opacity-60",
            ]}
        >
            <input
                type="checkbox"
                checked={completed}
                hx-patch={`/todos/${id}/toggle`}
                hx-target={`#todo-${id}`}
                hx-swap="outerHTML"
                class="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
            <span
                class={[
                    "flex-1 text-base",
                    completed && "line-through text-muted-foreground",
                ]}
            >
                {title}
            </span>
            <Button
                variant="destructive"
                size="sm"
                hx-delete={`/todos/${id}`}
                hx-target={`#todo-${id}`}
                hx-swap="outerHTML swap:1s"
                hx-confirm="Are you sure you want to delete this todo?"
            >
                Delete
            </Button>
        </Card>
    )
}
