var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
var api = require("../api/api.js");
var SearchForm = require("./SearchForm.jsx");
var ResultsList = require("./ResultsList.jsx");

function updateAppState(){
	return{
		search: Store.getSearch(),
		results: Store.getResults()
	};
}


var App = React.createClass({

	getInitialState: function(){
		return updateAppState();
	},
	componentDidMount: function(){
		Store.addChangeListener(this._onChange)
	},
	componentUnmount: function(){
		Store.removeChangeListener(this._onChange)
	},

	render: function(){
		// console.log(this.state.search)
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<SearchForm />
						<ResultsList query={this.state.search} results={this.state.results}/>
					</div>
				</div>
			</div>
		)
	},

	_onChange: function(){
		this.setState(updateAppState())

	},


})

module.exports = App;