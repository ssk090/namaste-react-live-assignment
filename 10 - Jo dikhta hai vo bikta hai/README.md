# Chapter 10 - Jo dikhta hai vo bikta hai

## Notes

- style={{}}, why two curly brackets ? Because style attr is a jsx element and it takes a javascript object.
- scss is css with super powers
- native css ; scss;inline css; component libraries-MaterialUI, Chakra UI, Ant Design; styled components,
- Tailwind css framework
- install tailwind css library and dont use CDN for production apps
- PROS: easy to debug, code is less, no duplicate css, small bundle size, faster development, more customisation
- CONS: too many class, initial learning curve

## Assignments

### Tailwind css config

- https://tailwindcss.com/docs/guides/parcel

### In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

- tailwind.config.js is a configuration file used by Tailwind CSS to generate a custom version of the framework that suits your project's specific needs. This file contains a set of key-value pairs that define various aspects of the framework, such as the available colors, spacing utilities, font sizes, etc.
- The keys in the tailwind.config.js file are:
- theme: This key is used to define the core design system of your project. It allows you to customize the default colors, typography, spacing, and other design elements. You can modify this object to add, override or extend Tailwind's default design system.
- variants: This key allows you to customize which variants are generated by Tailwind. Variants are CSS classes that apply a specific style based on a certain condition, such as hover, focus, active, etc.
- plugins: This key allows you to add third-party plugins to Tailwind. These plugins can be used to extend the functionality of Tailwind by adding new utility classes.
- extend: This key allows you to add your own custom utility classes to Tailwind. This can be useful if you need to create custom styles that are not available in the default Tailwind utility classes.
- content: This key is used to specify the files that Tailwind should scan for classes to include in the generated CSS. By default, it scans all .html, .js, and .vue files in your project, but you can use this key to add additional files or exclude files from the scan.
- Each of these keys allows you to customize various aspects of Tailwind CSS to suit your project's needs. By modifying these keys in the tailwind.config.js file, you can create a custom version of Tailwind that provides only the utility classes you need, optimized for your project's specific design system.

### Why do we have .postcssrc file?

- The .postcssrc file is a configuration file used by PostCSS, a tool for transforming CSS with JavaScript plugins. The purpose of this file is to configure the behavior of PostCSS by specifying which plugins to use, how they should be configured, and in what order they should be executed.

- The .postcssrc file is used by PostCSS to load configuration options when it is run. It is typically located in the root directory of a project and is named .postcssrc (with no file extension). The file should be written in JSON, YAML or JavaScript format, and its content defines the PostCSS configuration options.

- The .postcssrc file can be used to configure various aspects of PostCSS, such as:

- Which PostCSS plugins to use: You can use this file to specify which plugins to use, including their names and options. For example, you can use the postcss-preset-env plugin to enable future CSS syntax and features, or autoprefixer to add vendor prefixes to your CSS.

- Plugin options: You can use this file to configure the options for each plugin. For example, you can set the target browsers for autoprefixer, or specify which CSS features to enable or disable with postcss-preset-env.

- Execution order: You can use this file to specify the order in which PostCSS should execute the plugins. This can be important if you want to ensure that certain plugins are executed before or after others.

- Using the .postcssrc file can help simplify the configuration of PostCSS and make it easier to manage the various plugins and options. Instead of passing command line arguments or configuring each plugin individually, you can specify everything in one file. This makes it easier to share the configuration across your team or reuse it in other projects.
