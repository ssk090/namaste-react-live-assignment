## 1. What is `NPM` ?
- NPM (short for Node Package Manager) is a package manager for the JavaScript programming language.
- It is the default package manager for the JavaScript runtime environment Node.js.
- NPM makes it easy to share and reuse code, and manage dependencies in your projects.
- With NPM, developers can install and manage packages (collections of code that can be reused in different projects) and use them in their own projects. 
- They can also share their own packages with the community, making it a powerful tool for collaboration and code reuse.

## 2. What is `Parcel/Webpack`? Why do we need it ?
- Parcel and Webpack are both JavaScript bundlers. They are tools that are used to take multiple JavaScript files, along with any other assets (CSS, images, etc.), and combine them into a single, optimized file (or a few files) that can be loaded by a web browser.
- Webpack and Parcel both have the same main purpose, which is to bundle all the assets that are needed for the application to run. They do this by creating a dependency graph of all the imported files and modules, then, it creates one or more bundles to be used in the browser.
- Webpack has a steep learning curve and a lot of configuration options, and it is more suitable for complex and large projects. Parcel, on the other hand, is more simple, easy to use and has zero configuration, making it ideal for small to medium-size projects.
- We need these tools to bundle all the assets that are needed for the application to run, so it can be loaded by a web browser, and also to optimize the performance of the application by reducing the number of requests to the server and decreasing the overall size of the assets.

## 3. What is `.parcel-cache` ?
- .parcel-cache is a directory created by the Parcel bundler, which contains cached files that are used to speed up the bundling process. When you run the Parcel bundler, it will analyze your code and all its dependencies and generate the final bundle. The process of analyzing and generating the bundle can be time-consuming, especially for large projects. The .parcel-cache directory allows Parcel to save the results of this analysis so that it can be reused the next time you run the bundler. This can significantly speed up the bundling process, especially when you are working on a project that hasn't changed much since the last time you ran the bundler.
- It's worth noting that the .parcel-cache directory is not included in the final bundle, it's only used by the bundler during the build process, and it's not necessary for the application to run.

## 4. What is `npx` ?
- npx is a package runner tool that comes with npm (Node Package Manager) version 5.2 or higher. It allows you to run and execute packages, without the need to install them globally on your system.
- npx works by temporarily installing a package, running the desired command from that package, and then uninstalling it.
- For example, if you want to run a package called "create-react-app" to create a new react application, instead of installing it globally with the command npm install -g create-react-app, you can run the command npx create-react-app my-app using npx, and it will install the package locally in the folder you are running the command, create the react application and then remove the package.
- This is useful because it allows you to run packages without polluting your global namespace, and without the need to uninstall them later. It also allows you to run different versions of a package on a single system, without conflicts.

## 5. What is difference between `dependencies` vs `devDependencies` ?
- In a Node.js project, dependencies and devDependencies are both used to specify the packages that the project depends on. However, there is a key difference between the two:
- dependencies are packages that are required for the application to run properly in production. These are the packages that are needed for the application to work as expected, and they will be included in the final bundle that is deployed to production.
- devDependencies, on the other hand, are packages that are only needed during the development process. They are not required for the application to run in production, but they are useful for developers to help with tasks such as testing, building, and linting. These packages will not be included in the final bundle that is deployed to production.
- For example, a testing framework such as Jest would be a devDependency because it's needed to run the tests and ensure the quality of the code, but it's not required for the application to run in production. On the other hand, a package like React would be a dependency because it's necessary to render the application in the browser.
- In summary, dependencies are required for the application to run in production, while devDependencies are only needed during development, and not required for the application to run in production.

## 6. What is Tree Shaking?
- Tree shaking is a technique used by modern JavaScript bundlers, such as webpack and Rollup, to eliminate unused code from the final bundle. The idea behind tree shaking is to only include the code that is actually used by the application in the final bundle, and to exclude any code that is not used.
- When the bundler creates a dependency graph of all the imported modules, it can determine which parts of the code are actually being used, and which parts are not. The parts of the code that are not being used are referred to as "dead code". The bundler can then remove this dead code from the final bundle, resulting in a smaller and more efficient bundle.
- Tree shaking is particularly useful for modern JavaScript applications that use a lot of third-party libraries, as it can significantly reduce the size of the final bundle by removing any unused code from these libraries.
- It also allows for better control and management of the dependencies and packages being used in the project.
- It's worth noting that tree shaking only works with ES6 modules, which use the import and export statements to specify dependencies. It doesn't work with CommonJS modules, which use the require() function to specify dependencies.

## 7. What is Hot Module Replacement?
- Hot Module Replacement (HMR) is a feature that allows you to update specific parts of a web application, without having to refresh the entire page. It works by keeping the application running in the background, and then updating the parts of the code that have changed, without having to refresh the page.
- HMR can be used for both JavaScript and CSS files, and it can significantly speed up the development process, as you don't have to manually refresh the page every time you make a change to the code.
- HMR works by keeping track of the code that has changed, and then sending those changes to the browser. The browser then updates the affected parts of the application, without having to refresh the entire page. This allows the developer to see the changes in the application in real time.
- One of the key advantage of HMR is that it allows you to preserve the state of the application, so you don't lose the current state of the application when you make changes to the code.
- In order to use HMR, a developer needs to configure the development server and the application to work with HMR. This can be done by using tools like webpack-dev-server, which include support for HMR out of the box.

## 8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- superpowers of Parcel:
- Zero Configuration: One of the most notable features of Parcel is that it requires no configuration. This means that you don't have to spend time setting up webpack configs and can start using it right away.
- Hot Module Replacement: Parcel has built-in support for Hot Module Replacement (HMR), which allows you to update specific parts of your application without having to refresh the entire page. This speeds up the development process and improves the developer experience.
- Code splitting: Parcel can automatically split your code into smaller chunks, which allows you to load only the code that is needed for the current page, improving the performance of your application.
- Fast Performance: Parcel uses a variety of techniques to speed up the bundling process, such as caching and multithreading. This means that it can create a production-ready bundle very quickly.
- Asset handling: Parcel can handle a wide variety of asset types, such as JavaScript, CSS, images, and more. It can automatically process these assets, minify them and bundle them into the final output. This saves a lot of time and makes it easy to manage assets in your application.
- In my own words, Parcel is a modern web bundler that makes the development process easy and efficient. It requires no configuration, supports hot module replacement, and code splitting, which allows for a faster development process and better performance of the application. It also handles various assets seamlessly and can minify them for the final output.

## 9. What is `.gitignore`? What should we add and not add into it?
- .gitignore is a file that is used to specify files and directories that should be excluded from version control in a Git repository. The file typically contains a list of file patterns that match the files and directories that should be ignored. When you run the git add command, Git will check the .gitignore file and exclude any files or directories that match the patterns specified in the file.
- You should add files and directories that are specific to your development environment, such as build outputs, local configuration files, and dependency folders. For example, you can add the node_modules directory, which contains the packages installed by npm, or the .parcel-cache folder generated by Parcel.
- You should not add files and directories that are important for the application to function, such as the source code or configuration files that are required in production. Also, you should not add sensitive information, such as passwords or private keys, to the .gitignore file, as it could be accidentally committed to the repository.
- In summary, .gitignore allows you to exclude certain files and directories from being tracked by Git, It's a good practice to use it to exclude files and directories that are specific to your development environment, such as build outputs and dependency folders, but not to exclude files and directories that are important for the application to function or that contain sensitive information.

## 10. What is the difference between `package.json` and `package-lock.json` ?
- package.json is a file that is used to specify the dependencies for a Node.js project. It contains information about the project, such as the name, version, description, and the dependencies that are required for the project to run. The dependencies are specified in the dependencies and devDependencies sections, and they are specified as key-value pairs, where the key is the name of the package, and the value is the version number or version range.
- package-lock.json, on the other hand, is a file that is used to lock down the exact versions of the dependencies that are installed in a project. When you run the npm install command, npm will install the latest version of the packages that match the version ranges specified in the package.json file. However, this can lead to version conflicts and unexpected behavior, especially when working on a team or deploying to production.
- package-lock.json solves this problem by specifying the exact version of each package that is installed, along with the versions of all of its dependencies. This ensures that the same versions of the packages will be installed, regardless of when or where the npm install command is run.
- In summary, package.json is a file that contains information about the project and its dependencies, while package-lock.json is a file that locks down the exact versions of the dependencies that are installed in a project. The package.json file is used to specify the dependencies and their version ranges, while the package-lock.json file is used to ensure that the same versions of the packages are installed across different environments.

## 11. Why should I not modify `package-lock.json`?
- It is generally not recommended to manually modify package-lock.json for several reasons:
- Consistency: By not modifying the package-lock.json, you ensure that the same versions of packages are installed across different environments. This helps to avoid version conflicts and unexpected behavior, especially when working on a team or deploying to production.
- Versioning: Modifying the package-lock.json can lead to inconsistencies in the versioning of the packages, which can cause issues when trying to rollback to a previous version of the project.
- Dependency management: When you run npm install, the package manager will automatically update the package-lock.json file with the correct versions of the dependencies. If you modify the file manually, it may lead to inconsistencies in the dependencies, which can cause issues with the application.
- Conflict resolution: When you run npm install, it will automatically resolve any conflicts that may arise between the dependencies. If you manually modify the package-lock.json, you may introduce conflicts that were not present before, which can cause issues with the application.
- Integrity: The package-lock.json file is used to ensure the integrity and the reproducibility of the project, modifying it can break that integrity.
- Instead of modifying the package-lock.json file, it's recommended to use npm commands like npm install, npm update, npm uninstall to manage dependencies and versions, these commands will update the package-lock.json file accordingly.

## 12. What is `node_modules` ? Is it a good idea to push that on git ?
- node_modules is a directory that is created when you run the npm install command. It contains all of the packages that are specified as dependencies in the package.json file, as well as their dependencies. Each package is installed in its own subdirectory, and it contains the package's code, as well as any other files that are needed for the package to work.
- It is generally not a good idea to include the node_modules directory in version control and push it on git, for several reasons:
- Size: The node_modules directory can contain a large number of files, and it can quickly become very large in size. Pushing it to a Git repository can make the repository much larger and can slow down the performance of Git.
- Reproducibility: The node_modules directory is used to ensure the reproducibility of the project, including it in the version control can lead to inconsistencies in the dependencies and the versions, which can make it hard to reproduce the project.
- Dependency Management: The node_modules directory contains the dependencies of the project, when working on a team, each member should have the ability to manage their own dependencies, and it's not necessary to push it on git.
- Downloading: When someone clones the repository, they can simply run npm install to download and install the necessary dependencies, it's not necessary to include it in the version control.
- It's more common to include a .gitignore file that ignores the node_modules directory. This ensures that the node_modules directory is not included in version control, and it also ensures that the dependencies are not pushed to the repository.

## 13. What is the `dist` folder ?
- The dist folder is a common convention used in web development to contain the final, production-ready files of an application. It's short for "distribution".
- The dist folder typically contains the minified and optimized versions of the application's code, along with any other assets that are required for the application to run. For example, it may contain the bundled and minified JavaScript files, the CSS files, and any images or other assets that are used in the application.
- The files in the dist folder are the files that are deployed to the production server, and served to the end users.
- The dist folder is usually created by a build process, which takes the source code of the application and processes it to create the final, production-ready files. This process can include tasks such as transpiling, bundling, minifying, and optimizing the code.
- Tools like webpack, Parcel and Rollup can be used to create the dist folder, by configuring the build process and specifying the input and output files, and the desired transformations.
- In summary, the dist folder is a directory that contains the final, production-ready files of an application, that are ready to be deployed on a server and served to the end users. It's usually created by a build process that optimizes and minifies the code and other assets.

## 14. What is `browserlists` ?
- Browserlists is a config file that is used to specify the browsers and versions that a project should support. It is typically used in conjunction with a tool like Autoprefixer, which automatically adds vendor prefixes to CSS rules, to ensure that the project works in the specified browsers.
- The browserlists file is usually named .browserslistrc and it contains a list of browser versions and queries. The queries can be simple version numbers, ranges, or more complex queries that target specific browser versions or specific features.
- For example, a .browserslistrc file could contain the following:
```
> 0.5%
last 2 versions
not dead
```
- This would target all browsers that have more than 0.5% global usage, the last 2 versions of each browser, and exclude browsers that are considered "dead" (no longer in active development).
- The browserlists file allows you to specify the minimum level of browser support that your project requires. When you run a tool like Autoprefixer, it will use the browsers specified in the browserlists file to determine which vendor prefixes to add to the CSS rules.
- In summary, Browserlists is a config file that is used to specify the browsers and versions that a project should support. It's typically used in conjunction with a tool like Autoprefixer to ensure that the project works in the specified browsers, and the file is named .browserslistrc and contains a list of browser versions and queries.

## 15. Why type="module" in script tag ?
- The type attribute in a script tag is used to specify the type of script that is being included in the HTML document. The most common value for this attribute is "text/javascript", which indicates that the script is a JavaScript file.
- When you include a script with type="module" in an HTML document, it indicates that the script is an ES6 module. ES6 modules are a new feature in JavaScript that allow you to specify the dependencies of a script, and to export and import variables, functions, and classes between scripts.
- The main difference between a script with type="module" and one with type="text/javascript" is that the former is executed in strict mode by default and modules are loaded asynchronously.
- The use of type="module" makes it possible to use the new import and export statements and other features of ES6 modules in the browser, without the need for a transpiler such as Babel.
- It's worth noting that not all browsers support ES6 modules, so you may need to use a tool like Babel or a polyfill to ensure that your code works in all browsers.
- In summary, type="module" in a script tag, indicates that the script is an ES6 module, which allows to use the new import and export statements and other features of ES6 modules in the browser, and it's executed in strict mode by default. However, not all browsers support ES6 modules, so you may need to use a tool like Babel or a polyfill to ensure

