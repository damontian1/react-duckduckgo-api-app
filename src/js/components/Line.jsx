var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
var api = require("../api/api.js");

var Line = React.createClass({


	render: function(){
		return(
			<div className="well" dangerouslySetInnerHTML={{__html: this.props.result.Result}}>
			</div>
		)
	}

})

module.exports = Line;