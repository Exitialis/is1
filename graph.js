var Node = require('./Node.js');

function Graph(graph) {
    this.graph = [];

    if (typeof graph == 'object') {
        this.parseGraph(graph);
    }
}

Graph.prototype.addNode = function(name, parentName) {
    var node = new Node(name);

    this.graph.forEach(function(item, i) {
        if (item.name == parentName) {
            node.setParent(item);
        }
    });

    this.graph.push(node);
};

Graph.prototype.parseGraph = function(graph) {
    for (var key in graph) {
        this.addNode(key, graph[key].parent);
    }
};

Graph.prototype.getGraph = function() {
    return this.graph;
};

module.exports = Graph;

