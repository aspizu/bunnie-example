export function Card({size = "default", children, ...props}) {
    return (
        <div
            class={[
                "ring-foreground/10 bg-card text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 flex flex-col",
                size === "sm" && "gap-4 py-4",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function CardHeader({children, ...props}) {
    return (
        <div
            class={[
                "gap-1 rounded-t-xl px-6 grid auto-rows-min items-start",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function CardTitle({children, ...props}) {
    return (
        <div class={["text-base leading-normal font-medium", props.class]} {...props}>
            {children}
        </div>
    )
}

export function CardDescription({children, ...props}) {
    return (
        <div class={["text-muted-foreground text-sm", props.class]} {...props}>
            {children}
        </div>
    )
}

export function CardAction({children, ...props}) {
    return (
        <div
            class={[
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function CardContent({children, ...props}) {
    return (
        <div class={["px-6", props.class]} {...props}>
            {children}
        </div>
    )
}

export function CardFooter({children, ...props}) {
    return (
        <div class={["rounded-b-xl px-6 flex items-center", props.class]} {...props}>
            {children}
        </div>
    )
}
