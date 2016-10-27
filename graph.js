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
    this.viva.addNode(name, {'name': name});

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

    var layout = viva.Graph.Layout.forceDirected(this.viva, {
        springLength : 20,
        springCoeff : 0.0005,
        dragCoeff : 0.02,
        gravity : -1.2
    });

    var graphics = viva.Graph.View.svgGraphics();

    graphics.node(function(node) {

        // The function is called every time renderer needs a ui to display node
        var circle = viva.Graph.svg('text')
            .text(node.data.name);
        return circle;
    })
        .placeNode(function(nodeUI, pos){
            // Shift image to let links go to the center:
            nodeUI.attr('x', pos.x).attr('y', pos.y);
        });

    var renderer = viva.Graph.View.renderer(this.viva, {
        container: document.getElementById('graphDiv'),
        graphics: graphics
        //layout: layout
    });

    renderer.run();
};

module.exports = Graph;

