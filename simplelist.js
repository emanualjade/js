function List(){
  // list
  this.dataStore = [];
  this.listSize = 0;
  this.pos = 0;

  // searching
  this.find = find;
  this.contains = contains;
  this.length = length;
  this.getElement = getElement;

  // modify list
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.clear = clear;

  // traverse list
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;

  // display
  this.toString = toString;
}

function find(element){
  for(var i =0; i < this.dataStore.length; ++i){
    if(this.dataStore[i] == element){
      return i;
    }
  }
  return -1;
}

function contains(element){
  for(var i = 0; i < this.dataStore.length; ++i){
    if(this.dataStore[i] == element){
      return true;
    }
  }
  return false;
}

function length(){
  return this.listSize;
}

function getElement(){
  return this.dataStore[this.pos];
}

function insert(element, after){
  var insertPos = this.find(after);
  if(insertPos > -1){
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

function append(element){
  this.dataStore[this.listSize++] = element;
}

function remove(element){
  var foundAt = this.find(element);
  if(foundAt > -1){
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
  }
  return false;
}

function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function front(){
  this.pos = 0;
}

function end(){
  this.pos = this.listSize - 1
}

function prev(){
  if(this.pos > 0){
    --this.pos;
  }
}

function next(){
  if(this.pos < this.listSize-1){
    ++this.pos;
  }
}

function currPos(){
  return this.pos;
}

function moveTo(position){
  this.pos = position;
}

function toString(){
  return this.dataStore;
}

// var names = new List();
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");


// var movieList = new List();
// movieList.append("starwars");
// movieList.append("city of god");
// movieList.append("forest gump");






