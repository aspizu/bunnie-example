import Layout from "./layout.jsx"
import TodoForm from "./todo-form.jsx"
import TodoList from "./todo-list.jsx"

export default function TodoPage({todos}) {
    return (
        <Layout>
            <script src="https://unpkg.com/htmx.org@1.9.10"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
            <div class="min-h-screen bg-background">
                <div class="container mx-auto max-w-3xl py-12 px-4">
                    <div class="mb-8">
                        <h1 class="text-4xl font-bold mb-2">Todo App</h1>
                        <p class="text-muted-foreground">
                            Built with HTMX, hyperscript, and bunnie components
                        </p>
                    </div>
                    <TodoForm />
                    <TodoList todos={todos} />
                </div>
            </div>
        </Layout>
    )
}
