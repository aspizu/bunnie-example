import {cva} from "class-variance-authority"
import {Label} from "./label.jsx"

export function FieldSet({children, ...props}) {
    return (
        <fieldset class={["gap-6 flex flex-col", props.class]} {...props}>
            {children}
        </fieldset>
    )
}

export function FieldLegend({variant = "legend", children, ...props}) {
    return (
        <legend
            class={[
                "mb-3 font-medium",
                variant === "label" ? "text-sm" : "text-base",
                props.class,
            ]}
            {...props}
        >
            {children}
        </legend>
    )
}

export function FieldGroup({children, ...props}) {
    return (
        <div class={["gap-7 flex w-full flex-col", props.class]} {...props}>
            {children}
        </div>
    )
}

const fieldVariants = cva("gap-3 flex w-full", {
    variants: {
        orientation: {
            vertical: "flex-col",
            horizontal: "flex-row items-center",
            responsive: "flex-col md:flex-row md:items-center",
        },
    },
    defaultVariants: {
        orientation: "vertical",
    },
})

export function Field({orientation = "vertical", children, ...props}) {
    return (
        <div
            role="group"
            class={[fieldVariants({orientation}), props.class]}
            {...props}
        >
            {children}
        </div>
    )
}

export function FieldContent({children, ...props}) {
    return (
        <div
            class={["gap-1 flex flex-1 flex-col leading-snug", props.class]}
            {...props}
        >
            {children}
        </div>
    )
}

export function FieldLabel({children, ...props}) {
    return (
        <Label class={[props.class]} {...props}>
            {children}
        </Label>
    )
}

export function FieldDescription({children, ...props}) {
    return (
        <div class={["text-muted-foreground text-xs", props.class]} {...props}>
            {children}
        </div>
    )
}

export function FieldMessage({children, ...props}) {
    return (
        <div class={["text-destructive text-xs font-medium", props.class]} {...props}>
            {children}
        </div>
    )
}
