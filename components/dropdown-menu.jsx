// Note: Dropdown menu requires JavaScript state management and is not fully supported
// in bunnie's pure component model. This is a simplified static version for styling.

export function DropdownMenuContent({children, ...props}) {
    return (
        <div
            class={[
                "ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-md p-1 shadow-md ring-1 z-50 overflow-x-hidden overflow-y-auto",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function DropdownMenuGroup({children, ...props}) {
    return <div {...props}>{children}</div>
}

export function DropdownMenuItem({inset, variant = "default", children, ...props}) {
    return (
        <div
            class={[
                "gap-2 rounded-sm px-2 py-1.5 text-sm relative flex cursor-default items-center outline-hidden select-none hover:bg-accent hover:text-accent-foreground",
                variant === "destructive" &&
                    "text-destructive hover:bg-destructive/10 dark:hover:bg-destructive/20",
                inset && "pl-8",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function DropdownMenuCheckboxItem({children, ...props}) {
    return (
        <div
            class={[
                "gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm relative flex cursor-default items-center outline-hidden select-none hover:bg-accent hover:text-accent-foreground",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function DropdownMenuRadioItem({children, ...props}) {
    return (
        <div
            class={[
                "gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm relative flex cursor-default items-center outline-hidden select-none hover:bg-accent hover:text-accent-foreground",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function DropdownMenuLabel({inset, children, ...props}) {
    return (
        <div
            class={[
                "text-muted-foreground px-2 py-1.5 text-xs font-medium",
                inset && "pl-8",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function DropdownMenuSeparator({...props}) {
    return <hr class={["bg-border -mx-1 my-1 h-px", props.class]} {...props} />
}

export function DropdownMenuShortcut({children, ...props}) {
    return (
        <span
            class={[
                "text-muted-foreground ml-auto text-xs tracking-widest",
                props.class,
            ]}
            {...props}
        >
            {children}
        </span>
    )
}

export function DropdownMenuSubTrigger({inset, children, ...props}) {
    return (
        <div
            class={[
                "gap-2 rounded-sm px-2 py-1.5 text-sm flex cursor-default items-center outline-hidden select-none hover:bg-accent hover:text-accent-foreground",
                inset && "pl-8",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function DropdownMenuSubContent({children, ...props}) {
    return (
        <div
            class={[
                "ring-foreground/10 bg-popover text-popover-foreground min-w-24 rounded-md p-1 shadow-lg ring-1 z-50 overflow-hidden",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}
