function binary() {
    
        let tpath = require("../Datastructure/treeutil");
        let readline = require("readline-sync");
        // read numbers of nodes
        let nodes = parseInt(readline.question("Enter number of nodes="));
        if (isNaN(nodes) || nodes < 1) {
            console.log("Enter valid number of nodes");
        }
        // calculate number of trees.
        tpath.binaryTree(nodes);
        return nodes;


}
module.exports = binary();