var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
// var api = require("../api/api.js");
var Line = require("./Line.jsx");

var Result = React.createClass({


  render: function(){
    console.log(this.props.item.filter(function(item){
        return item.hasOwnProperty("Text") 
    }))
    return(
        <div>
          {this.props.item.filter(function(notEmpty){
            return notEmpty.hasOwnProperty("Text")
          }).map(function(result, i){
              return(
                <Line result={result} key={i}/>
              )
          })}
        </div>
    )
  }

})

module.exports = Result;