export function Separator({orientation = "horizontal", ...props}) {
    return (
        <hr
            class={[
                "bg-border shrink-0",
                orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch",
                props.class,
            ]}
            {...props}
        />
    )
}
