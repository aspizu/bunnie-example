import {cva} from "class-variance-authority"
import {Button} from "./button.jsx"
import {Input} from "./input.jsx"
import {Textarea} from "./textarea.jsx"

export function InputGroup({children, ...props}) {
    return (
        <div
            role="group"
            class={[
                "border-input dark:bg-input/30 h-9 rounded-md border shadow-xs transition-[color,box-shadow] relative flex w-full min-w-0 items-center outline-none",
                props.class,
            ]}
            {...props}
        >
            {children}
        </div>
    )
}

const inputGroupAddonVariants = cva(
    "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium flex cursor-text items-center justify-center select-none",
    {
        variants: {
            align: {
                "inline-start": "pl-2 order-first",
                "inline-end": "pr-2 order-last",
                "block-start": "px-2.5 pt-2 order-first w-full justify-start",
                "block-end": "px-2.5 pb-2 order-last w-full justify-start",
            },
        },
        defaultVariants: {
            align: "inline-start",
        },
    },
)

export function InputGroupAddon({align = "inline-start", children, ...props}) {
    return (
        <div
            role="group"
            class={[inputGroupAddonVariants({align}), props.class]}
            {...props}
        >
            {children}
        </div>
    )
}

const inputGroupButtonVariants = cva("gap-2 text-sm shadow-none flex items-center", {
    variants: {
        size: {
            xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5",
            sm: "",
            "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0",
            "icon-sm": "size-8 p-0",
        },
    },
    defaultVariants: {
        size: "xs",
    },
})

export function InputGroupButton({
    type = "button",
    variant = "ghost",
    size = "xs",
    children,
    ...props
}) {
    return (
        <Button
            type={type}
            variant={variant}
            size={size}
            class={[inputGroupButtonVariants({size}), props.class]}
            {...props}
        >
            {children}
        </Button>
    )
}

export function InputGroupText({children, ...props}) {
    return (
        <span
            class={[
                "text-muted-foreground gap-2 text-sm flex items-center",
                props.class,
            ]}
            {...props}
        >
            {children}
        </span>
    )
}

export function InputGroupInput({...props}) {
    return (
        <Input
            class={[
                "rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent flex-1",
                props.class,
            ]}
            {...props}
        />
    )
}

export function InputGroupTextarea({...props}) {
    return (
        <Textarea
            class={[
                "rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent flex-1 resize-none",
                props.class,
            ]}
            {...props}
        />
    )
}
