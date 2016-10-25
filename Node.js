function Node(name) {

    this.name = name;

    this.parent = null;
    this.childs = [];
}

Node.prototype.removeChild = function(child) {
    this.childs.slice(this.childs.indexOf(child), 1);
};

Node.prototype.addChild = function(child) {
    this.childs.push(child);
};

Node.prototype.setParent = function(parent) {
    this.parent = parent;
};

module.exports = Node;
