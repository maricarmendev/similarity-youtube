# Notes about the projects


## Installed dependencies:
### `@mui/material`, `@emotion/react` and `@emotion/styled`: 
Is an open source react components library that implements Google's Material Design.
Material ui has two dependencies: `@emotion/react` and `@emotion/style`.
Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. 
The `@emotion/react` package requires React and is recommended for users of that framework if possible.
The `@emotion/styled` package is for those who prefer to use the styled.div style API for creating components.

- [material site](https://mui.com/)
- [emotion site](https://emotion.sh/)

### `@mui/x-data-grid`
MUI X is a collection of advanced UI components, including a data grid and date and time pickers.
These components are significantly more complex than the ones found in the MUI Core libraries. They feature advanced functionality for data-rich applications and a wide range of other use cases.

- [mui x site](https://mui.com/x/)
- [site data grid](https://mui.com/x/react-data-grid/getting-started/#installation)

### `next-auth`, `@prisma/client` and `@next-auth/prisma-adapter`
NextAuth.js is a complete open-source authentication solution for Next.js applications.
It is designed from the ground up to support Next.js and Serverless.

- [auth js site](https://authjs.dev/)
- [next auth site](https://next-auth.js.org/)
- [prisma adapter site](https://authjs.dev/reference/adapter/prisma)

### `prisma`
Next-generation Node.js and TypeScript ORM
Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.

- [prisma db site](https://www.prisma.io/)

### `@radix-ui/react-dropdown-menu`, `@radix-ui/react-scroll-area` and `@radix-ui/react-tabs`
An open-source UI component library for building high-quality, accessible design systems and web apps.
Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.

- [radix-ui site](https://www.radix-ui.com/)
- [radix-ui react-dropdown-menu](https://www.radix-ui.com/docs/primitives/components/dropdown-menu)
- [radix-ui react-scroll-area](https://www.radix-ui.com/docs/primitives/components/scroll-area)
- [radix-ui react-tabs](https://www.radix-ui.com/docs/primitives/components/tabs)

### `@total-typescript/ts-reset`
TypeScript's built-in typings are not perfect. ts-reset makes them better.

- [ts reset repo](https://github.com/total-typescript/ts-reset)

### `@upstash/ratelimit` and `@upstash/redis`
`@upstash/redis` is an HTTP/REST based Redis client for typescript, built on top of Upstash REST API.
`@upstash/ratelimit` is the only connectionless (HTTP based) rate limiting library and designed for:
Serverless functions (AWS Lambda, Vercel ...)
Cloudflare Workers
Vercel Edge
Fastly Compute@Edge
Next.js, Jamstack ...
Client side web/mobile applications
WebAssembly
and other environments where HTTP is preferred over TCP.

- [upstash site](https://upstash.com/)
- [upstash redis site](https://docs.upstash.com/redis/sdks/javascriptsdk/overview)
- [rate limit repo](https://github.com/upstash/ratelimit)

### `class-variance-authority`
CSS-in-TS libraries such as Stitches(opens in a new tab) and Vanilla Extract(opens in a new tab) are fantastic options for building type-safe UI components; taking away all the worries of class names and StyleSheet composition.
…but CSS-in-TS (or CSS-in-JS) isn't for everyone.
You may need full control over your StyleSheet output. Your job might require you to use a framework such as Tailwind CSS. You might just prefer writing your own CSS.
Creating variants with the "traditional" CSS approach can become an arduous task; manually matching classes to props and manually adding types.
cva aims to take those pain points away, allowing you to focus on the more fun aspects of UI development.

- [class variance authority site](https://cva.style/docs)

### `clsx`
A tiny (228B) utility for constructing className strings conditionally.
Also serves as a faster & smaller drop-in replacement for the classnames module.

[clsx npm site](https://www.npmjs.com/package/clsx)

### `date-fns`
date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.

[date fns site](https://date-fns.org/)

### `lodash`
A modern JavaScript utility library delivering modularity, performance & extras.

[lodash site](https://lodash.com/)

### `lucide-react`
Implementation of the lucide icon library for react applications.
Beautiful & consistent icon toolkit made by the community.
Open-source project and a fork of Feather Icons.

[lucide icons site](https://lucide.dev/docs/lucide-react)

### `nanoid`
A tiny, secure, URL-friendly, unique string ID generator for JavaScript

[nano id npm url](https://www.npmjs.com/package/nanoid)

### `next-themes`
An abstraction for themes in your Next.js app.
- Perfect dark mode in 2 lines of code
- System setting with prefers-color-scheme
- Themed browser UI with color-scheme
- Support for Next.js 13 appDir
- No flash on load (both SSR and SSG)
- Sync theme across tabs and windows
- Disable flashing when changing themes
- Force pages to specific themes
- Class or data attribute selector
- useTheme hook

- [next-themes site](https://github.com/pacocoursey/next-themes#readme)

### `openai`
The OpenAI Node.js library provides convenient access to the OpenAI API from Node.js applications. Most of the code in this library is generated from our OpenAPI specification.
Important note: this library is meant for server-side usage only, as using it in client-side browser code will expose your secret API key. See here for more details.

[openai npm site] (https://www.npmjs.com/package/openai)

### `prism-react-renderer`
Maybe you need to render some extra UI with your Prismjs-highlighted code, or maybe you'd like to manipulate what Prism renders completely, or maybe you're just using Prism with React and are searching for an easier, global-pollution-free way?
Then you're right where you want to be!

[prism react renderer site](https://github.com/FormidableLabs/prism-react-renderer#readme)

### `react-hot-toast`
The Best Toast in Town. Smoking hot React notifications.
[react hot toast site](https://react-hot-toast.com/)

### `sharp`
The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions.
Resizing an image is typically 4x-5x faster than using the quickest ImageMagick and GraphicsMagick settings due to its use of libvips .
Colour spaces, embedded ICC profiles and alpha transparency channels are all handled correctly. Lanczos resampling ensures quality is not sacrificed for speed.
[sharp site](https://sharp.pixelplumbing.com/)

### `simplebar-react`
SimpleBar does only one thing: replace the browser's default scrollbar with a custom CSS-styled one without losing performances. Unlike some popular plugins, SimpleBar doesn't mimic scroll with Javascript, causing janks and strange scrolling behaviours... You keep the awesomeness of native scrolling...with a custom scrollbar! SimpleBar does NOT implement a custom scroll behaviour. It keeps the native overflow: auto scroll and only replace the scrollbar visual appearance.
[simplebar react site](https://grsmto.github.io/simplebar/)

### `tailwind-merge`
Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.

[tm site](https://github.com/dcastil/tailwind-merge)


## Installed dev dependencies

### `tailwindcss`, `postcss` and `autoprefixer`
Rapidly build modern websites without ever leaving your HTML.
A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.

[tailwind site](https://tailwindcss.com/)
[tailwind css with next](https://tailwindcss.com/docs/guides/nextjs)