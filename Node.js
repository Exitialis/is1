function Node(name) {
    this.name = name;

    this.parent = null;
    this.adj = [];
}

Node.prototype.removeAdj = function(adj) {
    this.adj.slice(this.adj.indexOf(adj), 1);
};

Node.prototype.addAdj = function(adj) {
    this.adj.push(adj);
};

Node.prototype.setParent = function(parent) {
    this.parent = parent;
};

module.exports = Node;
