export function Label({children, ...props}) {
    return (
        <label
            class={[
                "gap-2 text-sm leading-none font-medium flex items-center select-none",
                props.class,
            ]}
            {...props}
        >
            {children}
        </label>
    )
}
