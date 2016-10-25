function List(item) {
    this.list = [];
    this.list.push(item);
}

List.prototype.first = function() {
    return this.list[0];
};

List.prototype.shift = function() {
    return this.list.shift();
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