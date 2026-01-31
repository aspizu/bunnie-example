use std::env;

use axum::{
    Router,
    response::Html,
    routing::get,
};
use bunnie::{
    Props,
    bunnie,
};
use tower_http::services::ServeDir;
use tracing_subscriber::{
    layer::SubscriberExt,
    util::SubscriberInitExt,
};

use crate::errors::AppError;

mod errors;

#[tokio::main]
async fn main() -> eyre::Result<()> {
    color_eyre::install()?;
    dotenv::dotenv()?;
    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::try_from_default_env()?)
        .with(tracing_subscriber::fmt::layer().pretty())
        .init();
    let app = Router::new()
        .route("/", get(homepage))
        .fallback_service(ServeDir::new("public"));
    let listener =
        tokio::net::TcpListener::bind(format!("{}:{}", env::var("HOST")?, env::var("PORT")?))
            .await?;
    axum::serve(listener, app).await?;
    Ok(())
}

async fn homepage() -> Result<Html<String>, AppError> {
    Ok(Html(
        bunnie()
            .render("@/components/homepage.jsx", Props::new())
            .await?,
    ))
}
