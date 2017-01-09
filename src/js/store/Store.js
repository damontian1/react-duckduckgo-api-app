var Dispatcher = require("../dispatcher/Dispatcher.js");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var api = require("../api/api.js");

var _query = "";
var _results = [];

var Store = assign({},EventEmitter.prototype, {
	
	saveSearch: function(search){
		_query = search
	},
	getSearch: function(){
		return _query;
	},
	setResults: function(results){
		_results.push(results)
	},
	getResults: function(){
		return _results
	},
	emitChange: function(callback){
		this.emit("change");
	},
	addChangeListener: function(callback){
		this.on("change", callback);
	},
	removeChangeListener: function(callback){
		this.removeListener("change", callback);
	}

});

Dispatcher.register(function(data){
	var action = data.action
	switch(action.actionType){
		case "SAVE_SEARCH":
			// save search to store
			Store.saveSearch(action.search.text)
			// set search to api
			api.sendSearch(action.search)
			// emit to client-side to update state
			Store.emitChange()
			break;
		case "RECEIVE_RESULTS":
			// set results to store
			Store.setResults(action.data)
			// emit to client-side to update state
			Store.emitChange()
			break;
	}
	return true;
});

module.exports = Store;