var list = require('./list.js');
var Graph = require('./graph.js');

var graph = new Graph();

var node1 = graph.addNode(1),
    node2 = graph.addNode(2),
    node3 = graph.addNode(3);
    node4 = graph.addNode(4);
    node5 = graph.addNode(5);
    node6 = graph.addNode(6);

graph.linkNodes(1, 2);
graph.linkNodes(2, 3);
graph.linkNodes(2, 4);
graph.linkNodes(2, 5);
graph.linkNodes(4, 6);

var open = new list(node1);
var closed = new list();

console.log(search(node1, 6));

function search(name) {
    //Берем первую вершину из списка
    do {
        this.node = open.first();

        if (this.node.name == name) {
            return true;
        }

        open.shift();
        closed.push(node);
        this.node.adj.forEach(function(node) {
            if ( open.check(node) || closed.check(node)) {
                open.push(node);
            }
        });
    } while(this.node != null);
}









