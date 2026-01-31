export default function Layout(props) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/global.css" />
                <title>Bunnie Example</title>
            </head>
            <body>{props.children}</body>
        </html>
    )
}
