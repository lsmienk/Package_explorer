# Reaktor Package Explorer

This is the assignment Package Explorer

On a Debian or an Ubuntu system there is a file called /var/lib/dpkg/status that holds information about software packages that the system knows about. Write a small application that displays some key information about currently installed packages via a web interface. The program should serve a web app and provide the following features:
 
- The index page lists installed packages alphabetically with package names as links.
- When following each link, you arrive at an information about a single package. The following information should be included:
   - Name
   - Description
   - The names of the packages the current package depends on (skip version numbers)
   - The names of the packages that depend on the current package
- The dependencies and reverse dependencies should be clickable and the user can navigate the package structure by clicking from package to package.

## Instructions
1. Set the enviroiment variable `filePath`, for example the default `/var/lib/dpkg/status` in `next.config.js`
2. Make sure you have node installed, run npm install in the root folder.
3. Run `npm run dev` to start development server, or `npm run build` and `npm run start` to start production server.
