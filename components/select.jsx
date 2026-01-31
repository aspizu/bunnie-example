// Note: Select requires JavaScript state management and is not fully supported
// in bunnie's pure component model. This is a simplified static version for styling.

export function SelectTrigger({size = "default", children, ...props}) {
    return (
        <button
            class={[
                "border-input dark:bg-input/30 dark:hover:bg-input/50 gap-1.5 rounded-md border bg-transparent py-2 pr-2 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50",
                size === "default" ? "h-9" : "h-8",
                props.class,
            ]}
            {...props}
        >
            {children}
        </button>
    )
}

export function SelectContent({children, ...props}) {
    return (
        <div
            class={[
                "bg-popover text-popover-foreground ring-foreground/10 min-w-36 rounded-md shadow-md ring-1 relative z-50 max-h-96 overflow-x-hidden overflow-y-auto",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function SelectGroup({children, ...props}) {
    return (
        <div class={["scroll-my-1 p-1", props.class]} {...props}>
            {children}
        </div>
    )
}

export function SelectLabel({children, ...props}) {
    return (
        <div
            class={["text-muted-foreground px-2 py-1.5 text-xs", props.class]}
            {...props}
        >
            {children}
        </div>
    )
}

export function SelectItem({children, ...props}) {
    return (
        <div
            class={[
                "gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm relative flex w-full cursor-default items-center outline-hidden select-none hover:bg-accent hover:text-accent-foreground",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function SelectSeparator({...props}) {
    return (
        <hr
            class={["bg-border -mx-1 my-1 h-px pointer-events-none", props.class]}
            {...props}
        />
    )
}
