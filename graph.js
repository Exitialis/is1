var Node = require('./Node.js');
var viva = require('vivagraphjs/dist/vivagraph.js');

function Graph(graph) {
    this.graph = [];
    this.viva = viva.Graph.graph();

    if (typeof graph == 'object') {
        this.parseGraph(graph);
    }
}

Graph.prototype.addNode = function(name) {
    var node = new Node(name);
    this.viva.addNode(name);

    this.graph.push(node);
    return node;
};

Graph.prototype.linkNodes = function(node1, node2) {
    this.viva.addLink(node1, node2);
    this.graph.forEach(function(node, i) {
        if (node.name == node1) {
           node1 = node;
        } else if(node.name == node2) {
            node2 = node;
        }
    });

    node1.addAdj(node2);
    node2.setParent(node1);
    return this;
};

Graph.prototype.render = function() {
    var renderer = viva.Graph.View.renderer(this.viva);
    renderer.run();
};

module.exports = Graph;

