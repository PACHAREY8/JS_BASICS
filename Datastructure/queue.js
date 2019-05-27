  function Queue() {
    this.data = [];
  }
  
  this.Queue.add = function(amount) {
    this.data.unshift(amount);
  }
  
  this.Queue.remove = function() {
    this.data.pop();
  }
  
  this.Queue.first = function() {
    return this.data[0];
  }
  
  this.Queue.last = function() {
    return this.data[this.data.length - 1];
  }
  
  this.Queue.size = function() {
    return this.data.length;
  }
  