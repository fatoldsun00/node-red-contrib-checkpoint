module.exports = function(RED) {
  var moment = require('moment')();

  function  Checkpoint(config) {
    RED.nodes.createNode(this,config);
    this.startListening()
  }

  Checkpoint.prototype.startListening = function() {
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

  RED.nodes.registerType("checkpoint",Checkpoint);
}
