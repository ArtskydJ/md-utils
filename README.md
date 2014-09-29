md-utils
=============

[![Build Status](https://travis-ci.org/ArtskydJ/md-utils.svg?branch=master)](https://travis-ci.org/ArtskydJ/md-utils)

- [Information](#information)
- [Example](#example)
- [Install](#install)
- [Require](#require)
- [License](#license)

#Information

Ever wanted to keep your readme updated with your newest example code without repeatedly copy & pasting your example files into your readme?  
Ever wanted to have an automatically generating table of contents?  
Ever wanted an automatic build status picture?  
NOW YOU CAN!!!

Did you want EVEN MORE features?  
Make a pull request! I would love to have community involvement!

#Example

Here is your readme.mdtemplate file:

	my-project
	==========

	{{travis-ci-build-status}}

	{{table-of-contents}}

	#info

	You want my thing; install it NOW!

	#install

	Use `npm` plz.

	#example

	Simple example:

	```js
	{{./examples/example-basic.js}}
	```

	Advanced usage:

	```js
	{{./examples/example-advanced.js}}
	```

	#license

	{{mit-license}}


#Install

Install with npm:

	npm install md-utils -g
	
#Use

Will search for all `*.mdtemplate` files and create/overwrite `*.md`.

E.g. These files are found: `overwrite.md`, `overwrite.mdtemplate`, `createnew.mdtemplate`, and `dontchange.md`.  
Afterward, you will have these files: `overwrite.md`, `overwrite.mdtemplate`, `createnew.md`, `createnew.mdtemplate`, and `dontchange.md`.  
`overwrite.md` might have been overwritten.

In a command line do:

	md-utils C:/where/mdtemplate/files/are/stored

or, if you're in the correct directory, do:

	md-utils

##License

[MIT](http://opensource.org/licenses/MIT)
