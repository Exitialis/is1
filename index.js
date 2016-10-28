var List = require('./list.js');
var Graph = require('./graph.js');
var Vue = require('vue/dist/vue.js');

var graph = new Graph();

Vue = new Vue({
    el: '#wrapper',

    data: {
        node: null,
        link1: null,
        link2: null,
        nodes: [],
        links: [],
        drawed: false,
        open: null,
        closed: null,
        find_el: null,
        result: null,
        showOpen: null,
        showClosed: null
    },

    methods: {
        addNode() {
            var node = graph.addNode(this.node);
            this.nodes.push(node);
            this.node = null;
        },
        addLink() {
            var link = graph.linkNodes(this.link1, this.link2);
            this.links.push(link);
        },
        render() {
            if (! this.drawed) {
                graph.render();
                this.drawed = true;
            }
        },
        bfSearch() {
            var open = new List(this.nodes[0]);
            var closed = new List();

            //Берем первую вершину из списка
            var node = open.first();

            do {
                node = open.first();

                if (node.name == this.find_el) {
                    this.result = this.findWay(node);
                    this.showOpen = open;
                    this.showClosed = closed;
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
        },
        dfSearch() {
            var open = new List(this.nodes[0]);
            var closed = new List();

            var node = open.first();

            do {
                node = open.first();

                if (node.name == this.find_el) {
                    this.result = this.findWay(node);
                    this.showOpen = open;
                    this.showClosed = closed;
                    return true;
                }

                open.shift();
                closed.push(node);

                node.adj.forEach(function(node) {
                    if ( ! open.check(node) || ! closed.check(node)) {
                        open.unshift(node);
                    }
                });
            } while(node != null)
        },
        bfSearchRecursive(name) {

        },
        findWay(node) {

            var path = [];
            path.unshift(node.name);

            while (node.parent != null) {
                path.unshift(node.parent.name);
                node = node.parent;
            }

            return path;
        }
    },

    watch: {
        link1(newLink) {
            if (this.link2 == newLink) {
                this.link2 = null;
            }
        },
        link2(newLink) {
            if (this.link1 == newLink) {
                this.link1 = null;
            }
        }
    }
});








