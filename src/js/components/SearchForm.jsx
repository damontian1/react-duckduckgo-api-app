var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
var api = require("../api/api.js");


var SearchForm = React.createClass({


	render: function(){
		return(
			<div className="well text-center">
				<h2>DUCK DUCK GO!</h2>
				<form onSubmit={this.submitHandler}>
					<div className="form-group">
					<input type="text" className="form-control" ref="text" placeholder="Enter your search here..." />
					</div>
					<button className="btn btn-danger">Search</button>
				</form>
			</div>
		)
	},

	submitHandler: function(e){
		e.preventDefault();
		var query = {
			text: this.refs.text.value
		}
		Actions.saveSearch(query)
	}

})

module.exports = SearchForm;