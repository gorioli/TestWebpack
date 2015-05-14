## Setting up webpack on Windows
=========

##### Step 1. 
---------
Open Command Prompt app and check if path includes node by running the command:

        $ node
If you don't have it, install from - https://nodejs.org/.
Try to run node again.
If node is not recognised, then include it into your path by running:

        $ SET PATH=C:\Program Files\Nodejs;%PATH%
Then check again if you have node.
Notes:
To quit node, press ctl+c twice.
Commands that prints PATH:

        $ path
or

        $ echo %PATH%


##### Step 2.
---------
Go the the project folder:

        $ cd folder/to/project
Notes:
See the content of the folder ('ls' on mac), run:
        
        $ dir
Print working directory ('pwd' on Mac)

        $ cd
or

        $ echo %CD%
Type 'help' for help.

Also, list of common commands in cmd app is available [here](http://commandwindows.com/command3.htm).

Using environment variables with Cmd.exe [here](http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/ntcmds_shelloverview.mspx?mfr=true).

##### Step 3.
---------

        $ npm install
This will install all project dependencies (modules) declared in package.json file under _node_modules_ folder in the current project folder.

##### Step 4. Compiling and building:
----------

        $ %cd%\node_modules\.bin\webpack.cmd
This will compile the code with webpack in the current directory.
The 'dist' folder and its content will be created, the project is ready for debugging or production!
Notes:
set alias:

        $ set "bin=%cd%\node_modules\.bin"
then run webpack by:

        $ %bin%\webpack.cmd
or automatically recompile with webpack after every change with '--watch':
        
        $ %bin%\webpack.cmd --watch



=============== ## Setting up webpack on Mac:
go to - http://webpack.github.io/docs/installation.html

-------------
The command __%bin%\webpack.cm__ (__Win__) or __webpack__ (__Mac__) will compile the source code, 
then build ApnAPI.js file and create a source map file - 'dist/maps/ApnAPI_source.map'.
For production code we need to remove the reference to the source map file, so 
###### remove manually the following line at the end of the minified file (ApnAPI.js):
        
        //# sourceMappingURL=/path/to/file.js.map
For more information about source map:
https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps 


## How to attach source map to ApnApi.js while debugging on production site (Mac & Win):
##### Step 1.
------------
We don't want to ship our product together with a source map (we want to be very confidential,
by keeping ApnAPI.js minified, sort of encrypted), but we want to debug our minified ApnAPI.js code with a source map.
Chrome dev-tools allow to append a source map file to any *.js file from URL only (they don't support loading it from a local disc).
So we need to run a web server (that was already installed from dev dependencies in package.json):

###### Win:

        $ %bin%\webpack-dev-server.cmd
###### Mac:

        $ $(npm bin)/webpack-dev-server
Independent of what your working directory is, you can get the path of locally installed binaries with
npm bin.

###### _Notes:_

If webpack-dev-server is not running in the browser, try:

Instead of - http://localhost:8080/webpack-dev-server/

use - http://127.0.0.1:8080/webpack-dev-server/

For more information about webpack-dev-server: http://webpack.github.io/docs/tutorials/getting-started/#development-server

##### Step 2.
------------
Now we can access a source map file via URL:

        http://127.0.0.1:8080/webpack-dev-server/dist/maps/ApnAPI_source.map

##### Step 3.
------------
Then right click in chrome dev-tools at the minified ApnAPI.js file in the sources tab of chrome dev-tools,
choose the option 'Add Source Map...' and enter a proper URL.


=============
## Some Links:
* To learn more about webpack follow all the steps in a short tutorial:
http://webpack.github.io/docs/tutorials/getting-started
* Another tutorial:
https://web-design-weekly.com/2014/09/24/diving-webpack
* webpack.config.js example: http://tftf.ru/stati/javascript/webpack
* Stylesheets:
http://webpack.github.io/docs/stylesheets.html
* This file was written with [markdown syntax](https://guides.github.com/features/mastering-markdown/).


_This README is using [markdown syntax](https://guides.github.com/features/mastering-markdown/)._