var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
// var api = require("../api/api.js");
var Result = require("./Result.jsx");

var ResultsList = React.createClass({


	render: function(){
		return(
				<div>
					<h3>Results for: {this.props.query}</h3>
					{this.props.results.map(function(item, i){
							return(
								<Result item={item} key={i}/>
							)
					})}
				</div>
		)
	}

})

module.exports = ResultsList;