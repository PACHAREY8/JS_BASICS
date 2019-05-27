module.exports={
factorial(num) {

    let fact = 1;;

    for (i = 1; i <= num; i++) {
      fact = fact * i;
    }

    return fact;
  },

  binaryTree(nodes) {
    var no_of_trees = Math.floor((this.factorial(2 * nodes)) / (this.factorial(nodes + 1) * this.factorial(nodes)));
    console.log(no_of_trees);
  }
}
