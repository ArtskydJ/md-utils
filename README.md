md-utils
=============

[![Build Status](https://travis-ci.org/ArtskydJ/md-utils.svg?branch=master)](https://travis-ci.org/ArtskydJ/md-utils)

- [Information](#information)
- [Examples](#examples)
- [Install](#install)
- [Require](#require)
- [License](#license)

#Information

Ever wanted to keep your readme updated with your newest example code without repeatedly copy & pasting your example files into your readme?  
Ever wanted to have an automatically generating table of contents?  
Ever wanted an automatic build status picture?  
NOW YOU CAN!!!

Ever wanted more features than these?  
Make a pull request! I would love to have community involvement!

##Examples

Here is your readme.markdown file:

	my-project
	==========

	{{travis-ci-build-status}}

	{{table-of-contents}}

	#info

	dis u like

	#install

	use npm plz

	#example

	noobz copy, paste following:

		{{./examples/example-basic.js}}

	haxors, this eye candy 4 u:

		{{./examples/example-advanced.js}}


	#license

	{{mit-license}}

##Install
Install with npm:
	npm install md-utils
	
##Require
	var areEqual = require('md-utils')

##License

[MIT](http://opensource.org/licenses/MIT)
