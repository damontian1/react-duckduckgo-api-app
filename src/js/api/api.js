var Actions = require("../actions/Actions.js");

module.exports = {
  sendSearch: function(search){
    fetch("http://api.duckduckgo.com/?q="+search.text+"&format=json").then(function(response){
      return response.json();
    }).then(function(json){
      Actions.receiveResults(json.RelatedTopics)
    })
  }
};