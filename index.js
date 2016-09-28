'use strict'
// index.js
// Author 作者 @penouc  
// Email 邮箱 penouc@gmail.com
var join = require('url').resolve
var coRequest = require('co-request')

function poxic(options) {
	options || (options = {}) 
	var request = coRequest.defaults({ jar: typeof options.jar === 'undefined' ? true : options.jar })

	return function* proxy(next){
		
	}
}

function parseOptions(){

}

function pipeRequest(readable, requestThunk){
	return function(cb){
		readable.pipe(requestThunk(cb))
	}
}

module.exports =  poxic