module.exports = function(RED) {
  var moment = require('moment')();

  function  CheckpointComplete(config) {
    RED.nodes.createNode(this,config);
    this.startListening()
  }

  CheckpointComplete.prototype.startListening = function() {
    var node = this;
  
    node.on('input', async (msg,send,done) => {
      node.status({
        fill: "green",
        shape: "dot",
        text: "Past at "+moment.format("DD-MM-YYYY hh:mm:ss")
      });

      send(msg)
      done()
    })
  }

  RED.nodes.registerType("checkpointcomplete",CheckpointComplete);
}
