import {cva} from "class-variance-authority"

const badgeVariants = cva(
    "h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 overflow-hidden",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                secondary: "bg-secondary text-secondary-foreground",
                destructive:
                    "bg-destructive/10 text-destructive dark:bg-destructive/20",
                outline: "border-border text-foreground",
                ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
)

export function Badge({variant = "default", children, ...props}) {
    return (
        <span class={[badgeVariants({variant}), props.class]} {...props}>
            {children}
        </span>
    )
}
