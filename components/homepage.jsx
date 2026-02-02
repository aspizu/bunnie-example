import {Badge} from "./badge.jsx"
import {Button} from "./button.jsx"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./card.jsx"
import {Input} from "./input.jsx"
import Layout from "./layout.jsx"

export default function TodoApp() {
    const todos = [
        {id: 1, title: "Build the homepage", completed: true, priority: "high"},
        {
            id: 2,
            title: "Create user authentication",
            completed: false,
            priority: "high",
        },
        {id: 3, title: "Design dashboard layout", completed: false, priority: "medium"},
        {id: 4, title: "Write documentation", completed: false, priority: "low"},
        {id: 5, title: "Set up CI/CD pipeline", completed: true, priority: "medium"},
    ]

    const stats = {
        total: todos.length,
        completed: todos.filter((t) => t.completed).length,
        pending: todos.filter((t) => !t.completed).length,
    }

    return (
        <Layout>
            <div class="min-h-screen bg-background p-4 md:p-8">
                <div class="mx-auto max-w-4xl space-y-6">
                    {/* Header */}
                    <div class="space-y-2">
                        <h1 class="text-4xl font-bold tracking-tight">
                            Todo Application
                        </h1>
                        <p class="text-muted-foreground">
                            Manage your tasks efficiently and stay organized
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div class="grid gap-4 md:grid-cols-3">
                        <Card size="sm">
                            <CardContent>
                                <div class="space-y-1">
                                    <p class="text-sm text-muted-foreground">
                                        Total Tasks
                                    </p>
                                    <p class="text-3xl font-bold">{stats.total}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card size="sm">
                            <CardContent>
                                <div class="space-y-1">
                                    <p class="text-sm text-muted-foreground">
                                        Completed
                                    </p>
                                    <p class="text-3xl font-bold text-green-600 dark:text-green-500">
                                        {stats.completed}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card size="sm">
                            <CardContent>
                                <div class="space-y-1">
                                    <p class="text-sm text-muted-foreground">Pending</p>
                                    <p class="text-3xl font-bold text-orange-600 dark:text-orange-500">
                                        {stats.pending}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Add New Todo */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Task</CardTitle>
                            <CardDescription>
                                Create a new todo item to track
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="flex gap-2">
                                <Input
                                    placeholder="Enter task title..."
                                    class="flex-1"
                                />
                                <Button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                    Add Task
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Todo List */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Tasks</CardTitle>
                            <CardDescription>
                                Your current tasks and their status
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="space-y-3">
                                {todos.map((todo) => (
                                    <div
                                        key={todo.id}
                                        class={[
                                            "flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50",
                                            todo.completed && "opacity-60",
                                        ]}
                                    >
                                        {/* Checkbox */}
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            class="size-5 cursor-pointer rounded border-input"
                                        />

                                        {/* Todo Content */}
                                        <div class="flex-1 space-y-1">
                                            <p
                                                class={[
                                                    "font-medium",
                                                    todo.completed && "line-through",
                                                ]}
                                            >
                                                {todo.title}
                                            </p>
                                        </div>

                                        {/* Priority Badge */}
                                        <Badge
                                            variant={
                                                todo.priority === "high" ? "destructive"
                                                : todo.priority === "medium" ?
                                                    "secondary"
                                                :   "outline"
                                            }
                                        >
                                            {todo.priority}
                                        </Badge>

                                        {/* Actions */}
                                        <div class="flex gap-1">
                                            <Button variant="ghost" size="icon-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                                    />
                                                </svg>
                                            </Button>
                                            <Button variant="ghost" size="icon-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                    />
                                                </svg>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Empty State (shown when no todos) */}
                            {todos.length === 0 && (
                                <div class="flex flex-col items-center justify-center py-12 text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-12 text-muted-foreground/50"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                                        />
                                    </svg>
                                    <p class="mt-4 text-muted-foreground">
                                        No tasks yet. Add your first task to get
                                        started!
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}
