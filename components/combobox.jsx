// Note: Combobox requires JavaScript state management and is not fully supported
// in bunnie's pure component model. This is a simplified static version for styling.

export function ComboboxContent({side = "bottom", children, ...props}) {
    return (
        <div
            class={[
                "bg-popover text-popover-foreground ring-foreground/10 max-h-72 min-w-36 overflow-hidden rounded-md shadow-md ring-1",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function ComboboxList({children, ...props}) {
    return (
        <div
            class={[
                "no-scrollbar max-h-72 scroll-py-1 overflow-y-auto p-1 overscroll-contain",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function ComboboxItem({children, ...props}) {
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

export function ComboboxGroup({children, ...props}) {
    return (
        <div class={[props.class]} {...props}>
            {children}
        </div>
    )
}

export function ComboboxLabel({children, ...props}) {
    return (
        <div
            class={["text-muted-foreground px-2 py-1.5 text-xs", props.class]}
            {...props}
        >
            {children}
        </div>
    )
}

export function ComboboxEmpty({children, ...props}) {
    return (
        <div
            class={[
                "text-muted-foreground w-full justify-center py-2 text-center text-sm flex",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

export function ComboboxSeparator({...props}) {
    return <hr class={["bg-border -mx-1 my-1 h-px", props.class]} {...props} />
}
