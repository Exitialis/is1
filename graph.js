var Node = require('./Node.js');

function Graph(graph) {
    this.graph = [];

    if (typeof graph == 'object') {
        this.parseGraph(graph);
    }
}

Graph.prototype.addNode = function(name) {
    var node = new Node(name);

    this.graph.push(node);
    return node;
};

Graph.prototype.linkNodes = function(node1, node2) {
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

Graph.prototype.getGraph = function() {
    return this.graph;
};

module.exports = Graph;

