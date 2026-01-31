import {
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "./alert-dialog.jsx"
import {Badge} from "./badge.jsx"
import Button from "./button.jsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./card.jsx"
import {
    ComboboxContent,
    ComboboxItem,
    ComboboxLabel,
    ComboboxList,
} from "./combobox.jsx"
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "./dropdown-menu.jsx"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldMessage,
} from "./field.jsx"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "./input-group.jsx"
import {Input} from "./input.jsx"
import {Label} from "./label.jsx"
import Layout from "./layout.jsx"
import {Separator} from "./separator.jsx"
import {Textarea} from "./textarea.jsx"

export default function DocsPage() {
    return (
        <Layout>
            <div class="max-w-6xl mx-auto p-8 space-y-16">
                <header class="space-y-4">
                    <h1 class="text-4xl font-bold">Bunnie Components Documentation</h1>
                    <p class="text-lg text-muted-foreground">
                        A comprehensive showcase of all available components in the
                        Bunnie framework.
                    </p>
                </header>

                <Separator />

                {/* Button Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Button</h2>
                        <p class="text-muted-foreground">
                            Interactive buttons with multiple variants and sizes.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Variants</CardTitle>
                            <CardDescription>
                                Different button styles for various use cases
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="flex flex-wrap gap-3">
                                <Button variant="default">Default</Button>
                                <Button variant="destructive">Destructive</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="link">Link</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Sizes</CardTitle>
                            <CardDescription>
                                Various button sizes available
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="flex flex-wrap items-center gap-3">
                                <Button size="xs">Extra Small</Button>
                                <Button size="sm">Small</Button>
                                <Button size="default">Default</Button>
                                <Button size="lg">Large</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Badge Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Badge</h2>
                        <p class="text-muted-foreground">
                            Small labels for status indicators and tags.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Badge Variants</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="flex flex-wrap gap-3">
                                <Badge variant="default">Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="ghost">Ghost</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Card Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Card</h2>
                        <p class="text-muted-foreground">
                            Container component for grouping related content.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Example Card</CardTitle>
                            <CardDescription>
                                This is a card with a title and description
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Cards can contain any content and are useful for
                                organizing information into digestible sections.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button>Action</Button>
                        </CardFooter>
                    </Card>
                </section>

                <Separator />

                {/* Input Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Input</h2>
                        <p class="text-muted-foreground">
                            Text input fields for user data entry.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Input Examples</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="space-y-4">
                                <div class="space-y-2">
                                    <Label>Default Input</Label>
                                    <Input placeholder="Enter text here..." />
                                </div>
                                <div class="space-y-2">
                                    <Label>Email Input</Label>
                                    <Input
                                        type="email"
                                        placeholder="user@example.com"
                                    />
                                </div>
                                <div class="space-y-2">
                                    <Label>Password Input</Label>
                                    <Input type="password" placeholder="••••••••" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Textarea Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Textarea</h2>
                        <p class="text-muted-foreground">
                            Multi-line text input for longer content.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Textarea Example</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="space-y-2">
                                <Label>Comments</Label>
                                <Textarea placeholder="Enter your comments here..." />
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Field Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Field</h2>
                        <p class="text-muted-foreground">
                            Complete form field with label, description, and error
                            message support.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Field Examples</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <FieldGroup>
                                <Field>
                                    <FieldContent>
                                        <FieldLabel>Username</FieldLabel>
                                        <FieldDescription>
                                            Choose a unique username for your account
                                        </FieldDescription>
                                        <Input placeholder="johndoe" />
                                    </FieldContent>
                                </Field>

                                <Field>
                                    <FieldContent>
                                        <FieldLabel>Email</FieldLabel>
                                        <FieldDescription>
                                            We'll never share your email
                                        </FieldDescription>
                                        <Input
                                            type="email"
                                            placeholder="john@example.com"
                                        />
                                    </FieldContent>
                                </Field>

                                <Field>
                                    <FieldContent>
                                        <FieldLabel>Password</FieldLabel>
                                        <Input
                                            type="password"
                                            aria-invalid="true"
                                            placeholder="••••••••"
                                        />
                                        <FieldMessage>
                                            Password must be at least 8 characters
                                        </FieldMessage>
                                    </FieldContent>
                                </Field>
                            </FieldGroup>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Input Group Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Input Group</h2>
                        <p class="text-muted-foreground">
                            Combine inputs with addons, text, and buttons.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Input Group Examples</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="space-y-4">
                                <div class="space-y-2">
                                    <Label>URL</Label>
                                    <InputGroup>
                                        <InputGroupAddon align="inline-start">
                                            https://
                                        </InputGroupAddon>
                                        <InputGroupInput placeholder="example.com" />
                                    </InputGroup>
                                </div>

                                <div class="space-y-2">
                                    <Label>Price</Label>
                                    <InputGroup>
                                        <InputGroupAddon align="inline-start">
                                            $
                                        </InputGroupAddon>
                                        <InputGroupInput
                                            type="number"
                                            placeholder="0.00"
                                        />
                                        <InputGroupAddon align="inline-end">
                                            USD
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>

                                <div class="space-y-2">
                                    <Label>Search</Label>
                                    <InputGroup>
                                        <InputGroupInput placeholder="Search..." />
                                        <InputGroupText>🔍</InputGroupText>
                                    </InputGroup>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Alert Dialog Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Alert Dialog</h2>
                        <p class="text-muted-foreground">
                            Modal dialog for important alerts and confirmations.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Alert Dialog Structure</CardTitle>
                            <CardDescription>
                                Note: Requires JavaScript for full functionality
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="relative overflow-hidden bg-muted/30 rounded-lg p-8 flex items-center justify-center min-h-96">
                                <div
                                    class={[
                                        "bg-background ring-foreground/10 gap-6 rounded-xl p-6 ring-1 shadow-lg w-full max-w-lg relative",
                                    ]}
                                >
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Are you absolutely sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will
                                            permanently delete your account and remove
                                            your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <Button variant="outline">Cancel</Button>
                                        <Button variant="destructive">Continue</Button>
                                    </AlertDialogFooter>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Dropdown Menu Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Dropdown Menu</h2>
                        <p class="text-muted-foreground">
                            Contextual menu with various options.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Dropdown Menu Structure</CardTitle>
                            <CardDescription>
                                Note: Requires JavaScript for full functionality
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem variant="destructive">
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Combobox Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Combobox</h2>
                        <p class="text-muted-foreground">
                            Searchable select dropdown component.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Combobox Structure</CardTitle>
                            <CardDescription>
                                Note: Requires JavaScript for full functionality
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ComboboxContent>
                                <ComboboxList>
                                    <ComboboxLabel>Fruits</ComboboxLabel>
                                    <ComboboxItem>Apple</ComboboxItem>
                                    <ComboboxItem>Banana</ComboboxItem>
                                    <ComboboxItem>Orange</ComboboxItem>
                                    <ComboboxLabel>Vegetables</ComboboxLabel>
                                    <ComboboxItem>Carrot</ComboboxItem>
                                    <ComboboxItem>Broccoli</ComboboxItem>
                                    <ComboboxItem>Spinach</ComboboxItem>
                                </ComboboxList>
                            </ComboboxContent>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Separator Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Separator</h2>
                        <p class="text-muted-foreground">
                            Visual divider for separating content sections.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Separator Examples</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="space-y-4">
                                <div>
                                    <p class="mb-2">Horizontal Separator (default)</p>
                                    <Separator />
                                </div>
                                <div class="flex gap-4 items-center h-20">
                                    <span>Left</span>
                                    <Separator orientation="vertical" />
                                    <span>Right</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Label Section */}
                <section class="space-y-6">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">Label</h2>
                        <p class="text-muted-foreground">
                            Form labels for input fields.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Label Examples</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="space-y-4">
                                <div class="space-y-2">
                                    <Label>Basic Label</Label>
                                    <Input placeholder="Input with label" />
                                </div>
                                <div class="space-y-2">
                                    <Label for="email-input">Email Address</Label>
                                    <Input
                                        id="email-input"
                                        type="email"
                                        placeholder="user@example.com"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <footer class="pt-8 text-center text-muted-foreground">
                    <p>
                        Bunnie Framework Components • Built with Tailwind CSS and
                        class-variance-authority
                    </p>
                </footer>
            </div>
        </Layout>
    )
}
