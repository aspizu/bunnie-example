export default function Layout(props) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/global.css" />
                <script src="https://unpkg.com/htmx.org@1.9.10"></script>
                <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
                <title>Bunnie Example</title>
            </head>
            <body>{props.children}</body>
        </html>
    )
}
