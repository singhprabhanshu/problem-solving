/**
 * 
 * Given a reference of a node in a connected undirected graph.

    Return a deep copy (clone) of the graph.

    Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

    class Node {
        public int val;
        public List<Node> neighbors;
    }
    

    Test case format:

    For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

    Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

    The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

    Understanding: 
        1. Every Node has value and it adjacent nodes as neighbors.
        2. New cloned graph structure is to be construced from the given one.
    Algorithm and solution: 
        1. For graph traversal, we will take breadh first search approad (BFS).
        2. BFS is implemented here using Queue.
        3. New node is created using the adjacent nodes array of given input graph node called as neighbor.
        4. Two nodes in graph has same node as neighbor. We need to make sure if any node is already visited then it should not be visited again.
        5. To keep track of visited node, we are using hash map data structure here.
        

 */




/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node === null) {
        return node;
    }
    const nodeVisitedHashMap = new Map();
    const nodeQueue = [];
    const copyNode = new Node(node.val);
    nodeQueue.push(node);
    nodeVisitedHashMap.set(node, copyNode);
    while (nodeQueue.length !== 0) {
        const oldnode = nodeQueue.shift();

        for (let oldi of oldnode.neighbors) {
            if (!nodeVisitedHashMap.has(oldi)) {
                nodeQueue.push(oldi);
                
                nodeVisitedHashMap.set(oldi, new Node(oldi.val));
                
            } 
            nodeVisitedHashMap.get(oldnode).neighbors.push(nodeVisitedHashMap.get(oldi));

        }

    }
    return copyNode;

};