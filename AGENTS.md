## guidelines for writing backend code:

use HTMX and hyperscript for interactivity.

## guidelines for writing bunnie components:

Use `.jsx` (not typescript) extension for components.
Components should be 100% pure, no state or side effects, do not read from disk or network.
Use HTML attribute names (e.g. `class` instead of `className`).
Instead of using `cn()`, directly pass an array to `class` attribute. ex: `class={['p-4', isActive && 'bg-blue-500']}`.
use class-variance-authority.
Use tailwindcss to style components.
use pure HTML elements, this is not React, this is a static-site generator.
