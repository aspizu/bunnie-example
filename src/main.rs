use std::{
    env,
    sync::Arc,
};

use axum::{
    Router,
    extract::{
        Form,
        Path,
        State,
    },
    http::StatusCode,
    response::Html,
    routing::{
        delete,
        get,
        patch,
        post,
    },
};
use bunnie::{
    Props,
    bunnie,
};
use serde::{
    Deserialize,
    Serialize,
};
use tokio::sync::Mutex;
use tower_http::services::ServeDir;
use tracing_subscriber::{
    layer::SubscriberExt,
    util::SubscriberInitExt,
};

use crate::errors::AppError;

mod errors;

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Todo {
    id: usize,
    title: String,
    completed: bool,
}

#[derive(Clone)]
struct AppState {
    todos: Arc<Mutex<Vec<Todo>>>,
    next_id: Arc<Mutex<usize>>,
}

#[tokio::main]
async fn main() -> eyre::Result<()> {
    color_eyre::install()?;
    dotenv::dotenv()?;
    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::try_from_default_env()?)
        .with(tracing_subscriber::fmt::layer().pretty())
        .init();

    let state = AppState {
        todos: Arc::new(Mutex::new(Vec::new())),
        next_id: Arc::new(Mutex::new(1)),
    };

    let app = Router::new()
        .route("/", get(homepage))
        .route("/todos", post(create_todo))
        .route("/todos/{id}", delete(delete_todo))
        .route("/todos/{id}/toggle", patch(toggle_todo))
        .fallback_service(ServeDir::new("public"))
        .with_state(state);
    let listener =
        tokio::net::TcpListener::bind(format!("{}:{}", env::var("HOST")?, env::var("PORT")?))
            .await?;
    axum::serve(listener, app).await?;
    Ok(())
}

async fn homepage(State(state): State<AppState>) -> Result<Html<String>, AppError> {
    let todos = state.todos.lock().await;
    let todos_vec: Vec<Todo> = todos.clone();

    let mut props = Props::new();
    props.insert("todos".to_string(), serde_json::to_value(&todos_vec)?);

    Ok(Html(
        bunnie().render("@/components/todo-page.jsx", props).await?,
    ))
}

#[derive(Deserialize)]
struct CreateTodoForm {
    title: String,
}

async fn create_todo(
    State(state): State<AppState>,
    Form(form): Form<CreateTodoForm>,
) -> Result<Html<String>, AppError> {
    let mut todos = state.todos.lock().await;
    let mut next_id = state.next_id.lock().await;

    let todo = Todo {
        id: *next_id,
        title: form.title,
        completed: false,
    };

    *next_id += 1;
    todos.insert(0, todo.clone());

    let mut props = Props::new();
    props.insert("id".to_string(), serde_json::to_value(todo.id)?);
    props.insert("title".to_string(), serde_json::to_value(todo.title)?);
    props.insert(
        "completed".to_string(),
        serde_json::to_value(todo.completed)?,
    );

    Ok(Html(
        bunnie().render("@/components/todo-item.jsx", props).await?,
    ))
}

async fn delete_todo(
    State(state): State<AppState>,
    Path(id): Path<usize>,
) -> Result<StatusCode, AppError> {
    let mut todos = state.todos.lock().await;
    todos.retain(|todo| todo.id != id);
    Ok(StatusCode::OK)
}

async fn toggle_todo(
    State(state): State<AppState>,
    Path(id): Path<usize>,
) -> Result<Html<String>, AppError> {
    let mut todos = state.todos.lock().await;

    if let Some(todo) = todos.iter_mut().find(|t| t.id == id) {
        todo.completed = !todo.completed;

        let mut props = Props::new();
        props.insert("id".to_string(), serde_json::to_value(todo.id)?);
        props.insert("title".to_string(), serde_json::to_value(&todo.title)?);
        props.insert(
            "completed".to_string(),
            serde_json::to_value(todo.completed)?,
        );

        Ok(Html(
            bunnie().render("@/components/todo-item.jsx", props).await?,
        ))
    } else {
        Err(AppError::NotFound)
    }
}
