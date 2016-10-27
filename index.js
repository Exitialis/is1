var list = require('./list.js');
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
        links: []
    },

    methods: {
        addNode() {
            var node = graph.addNode(this.node);
            this.nodes.push(node);
            this.node = null;
            console.log(this.nodes);
        },
        addLink() {
            var link = graph.linkNodes()
        },
        search(name) {
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
            console.log(this.link1, newLink);
            if (this.link1 == newLink) {
                this.link1 = null;
            }
        }
    },

    /*created() {

    }*/
});








