const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor (){
    this.tree = null;
  }
  root() {
    return this.tree;
  }
  add(data) {
    this.tree = addData(this.tree, data);
    function addData(node, data){
      if(!node) return new Node(data);
      if (node.data === data) return node;      
      if (data < node.data) node.left = addData(node.left, data);
      if (data > node.data) node.right = addData(node.right, data);
      return node;
    }
  }

  has(data) {
    return searchData(this.tree, data);
    function searchData(node, data){
      if(!node) return false;      
      if (node.data === data) return true;      
      return data < node.data ? searchData(node.left, data) : searchData(node.right, data);
    }
  }

  find(data) {
    return findData(this.tree, data);
    function findData(node, data){
      while(node !== null){
        if(node.data === data){
          return node;
          } else if(node.data > data){
            node = node.left;
          } else {
            node = node.right;
          }
        }
      return null;
    }
  }

  remove(data) {
    
    function deleteNode(node, dataDelete){
      if(!node) return null;      
      if(dataDelete < node.data){
        node.left = deleteNode(node.left, dataDelete);
        return node;
      } else if(dataDelete > node.data){
        node.right = deleteNode(node.right, dataDelete);
        return node;
      } else {
        if(node.left === null && node.right === null) return null;
        if (node.right === null) return node.left;
        if (node.left === null) return node.right;

        let leftBranch = node.left;
        while (leftBranch.right !== null) {
          leftBranch = leftBranch.right;
        }
        node.data = leftBranch.data;
        node.left = deleteNode(node.left, leftBranch.data);
        return node;
      }
    }
    this.rootTree = deleteNode(this.tree, data);
  }

  min() {
    if(!this.tree){
      return null;
    }

    let node = this.tree;
      while(node.left){
        node = node.left;
      }
    return node.data;
  }

  max() {
    if(!this.tree){
      return null;
    }
    let node = this.tree;
      while(node.right){
        node = node.right;
      }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};