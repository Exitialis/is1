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

console.log(search(6));

function search(name) {
    //Берем первую вершину из списка
    var node = open.first();
    var step = 1;
    do {
        node = open.first();

        if (node.name == name) {
            var list = findWay(node);
            console.log(list);
            return true;
        }

        open.shift();
        closed.push(node);
        node.adj.forEach(function(node) {
            if ( ! open.check(node) || ! closed.check(node)) {
                open.push(node);
            }
        });
    } while(node != null);
}

function findWay(node) {

    var path = [];
    path.unshift(node.name);

    while (node.parent != null) {
        path.unshift(node.parent.name);
        node = node.parent;
    }

    return path;

}

graph.render();







