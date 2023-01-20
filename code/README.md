## Chapter 01 - Inception

## Chapter 02 - Igniting our App
- Bundler : vite, parcel, webpack
- create react app uses webpack bundler
- npm does not stands for Node package manager, check it official website, it is no where written
- npm install "-D or --saveDev" both are same thing
- ^ and ~ in package.json
- ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.
- ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.
- package-lock.json ? 
    - tells which version should use in production env,
    - it locks the version,
    - never keep it in gitignore
- node_module ?
    - data base for npm
    - Always keep it in gitignore
    - you can get node_modules when you do npm install (means we have package.json and package-lock.json)
- type="module" in script tag tells the browser that the .js file is not a normal file, it is a module.
- browsers dont understand "import" word, so we need to use type="module"
- parcel webpack :
    - Hot Module Replacement (HMR) : it will automatically refresh the page when we save the project.
    - It uses File Watcher Algorithm which is written in C++.
    - It keeps the track of all the files which are changing in real time and it tells the server to reload
    - when we do npx parcel index.html, it builds a development version of our project and servers it on our server
    - BUNDLING
    - MINIFY
    - Remove console.log statements / Cleaning the code
    - Manages dev and prod build
    - Super Fast build algorithm
    - Image optimization
    - Caching while development
    - Compression of variables
    - Compatible with older version of browsers
    - can enable HTTPS on development env
    - parcel manages port numbers
    - consistent Hashing Algorithm to do all bundling
    - Zero config bundler
- We should put .parcel-cache in gitignore.
- Transitive Dependencies : We have our package manager which handles and takes care of our transitive dependencies of our code 

### Reference
- https://parceljs.org/docs/
- https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json
- https://browserslist.dev/


## Chapter 03 - Laying the Foundation
