md-utils
=============

[![Build Status](https://travis-ci.org/ArtskydJ/md-utils.svg?branch=master)](https://travis-ci.org/ArtskydJ/md-utils)

	- [Information](#information)
	- [Tags](#tags)
			- [{ {table-of-contents} }](#tableofcontents)
			- [{ {badge.travis} }](#badgetravis)
			- [{ {filename} }](#filename)
	- [Example](#example)
	- [Install](#install)
	- [Use](#use)
		- [License](#license)

#Information

Do you want to keep your readme updated with your newest example code without repeatedly copy & pasting your example files into your readme?  
Do you want automatic tables of contents?  
Do you want a build status badge without copy and pasting the url, and remembering the syntax for markdown images?  
NOW YOU CAN!!!

Did you want EVEN MORE features?  
Make a pull request! I would love to have community involvement!

#Tags

###{ {table-of-contents} }

Auto generates a table of contents based on the headers found. Any line starting with one or more hashes (`#`) will be added to the table of contents.

###{ {badge.travis} }

Not implemented yet, sorry.

###{ {filename} }

Enter the location of a file in a mustache. In the filename, all periods (`.`) must be replaced with asterisks (`*`).

For example, `./example/example1.js` should be entered as `*/example/example1*js`. Note that the asterisks **are not** wildcards.

#Example

Here is your readme.mdtemplate file:

```
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
{{*/examples/example-basic*js}}
```

Advanced usage:

```js
{{*/examples/example-advanced*js}}
```

#license

{{license.mit.text}}
```


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
