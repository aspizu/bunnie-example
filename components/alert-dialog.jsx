// Note: Alert dialogs require JavaScript state management and are not fully supported
// in bunnie's pure component model. This is a simplified static version for styling.

export function AlertDialogOverlay({children, ...props}) {
    return (
        <div
            class={["bg-black/10 backdrop-blur-xs fixed inset-0 z-50", props.class]}
            {...props}
        >
            {children}
        </div>
    )
}

export function AlertDialogContent({size = "default", children, ...props}) {
    return (
        <div
            class={[
                "bg-background ring-foreground/10 gap-6 rounded-xl p-6 ring-1 shadow-lg fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none",
                size === "sm" ? "max-w-xs" : "max-w-xs sm:max-w-lg",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function AlertDialogHeader({children, ...props}) {
    return (
        <div
            class={[
                "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function AlertDialogFooter({children, ...props}) {
    return (
        <div
            class={[
                "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function AlertDialogMedia({children, ...props}) {
    return (
        <div
            class={[
                "bg-muted mb-2 inline-flex size-16 items-center justify-center rounded-md",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function AlertDialogTitle({children, ...props}) {
    return (
        <h2 class={["text-lg font-medium", props.class]} {...props}>
            {children}
        </h2>
    )
}

export function AlertDialogDescription({children, ...props}) {
    return (
        <p
            class={[
                "text-muted-foreground text-sm text-balance md:text-pretty",
                props.class,
            ]}
            {...props}
        >
            {children}
        </p>
    )
}
