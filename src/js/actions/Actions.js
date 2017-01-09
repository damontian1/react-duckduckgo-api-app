var Dispatcher = require("../dispatcher/Dispatcher.js");

var Actions = {
	saveSearch: function(search){
		Dispatcher.handleViewAction({
			actionType: "SAVE_SEARCH",
			search: search
		});
	},
	receiveResults: function(data){
		Dispatcher.handleViewAction({
			actionType: "RECEIVE_RESULTS",
			data: data
		})
	}
};

module.exports = Actions;