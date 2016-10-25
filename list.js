function List() {
    this.list = [];
}

List.prototype.shift = function() {
    this.list.shift();
};

List.prototype.unshift = function(item) {
    this.list.unshift(item);
};

List.prototype.push = function(item) {
    this.list.push(item);
};

List.prototype.check = function(item) {
    return this.list.indexOf(item) != -1;
};

module.exports = List;