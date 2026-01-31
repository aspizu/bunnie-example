use axum::{
    http::StatusCode,
    response::{
        IntoResponse,
        Response,
    },
};

// Use eyre, define error and enable '?'
// For a simplified example of using eyre in axum check /examples/eyre-error-response
#[derive(Debug)]
pub struct AppError(eyre::Report);

// Tell axum how to convert `AppError` into a response.
impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        tracing::error!("Application error: {:#}", self.0);

        (StatusCode::INTERNAL_SERVER_ERROR, "Something went wrong").into_response()
    }
}

// This enables using `?` on functions that return `Result<_, eyre::Report>` to turn them into
// `Result<_, AppError>`. That way you don't need to do that manually.
impl<E> From<E> for AppError
where E: Into<eyre::Report>
{
    fn from(err: E) -> Self {
        Self(err.into())
    }
}
