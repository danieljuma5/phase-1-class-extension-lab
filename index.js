// Polygon class with setter getter methods

class Polygon {
  constructor(arr) {
    this.arr = arr

  }
  get countSides() {
    return this.arr.length
  }
  get perimeter() {
    let sum = 0;
    for(let i = 0;i < this.arr.length; i++){
      sum += this.arr[i]
    }
    return sum
  }
}



class Triangle extends Polygon {
  constructor(arr) {
    super(arr);
  }
  
  get isValid() {
    if (this.countSides !== 3) {
      return false;
    }
    
    const [a, b, c] = this.arr;
    return (a + b > c) && (a + c > b) && (b + c > a);
  }
}

class Square extends Polygon {
  constructor(arr) {
    super(arr);
  }
  get isValid() {
    if(this.countSides !== 4) {
      return false;
    }
    const [a, b, c,d] = this.arr;
    return (a === b)&& (b=== c)&& (c=== d)
   }
<<<<<<< HEAD
  get area() {
    if (this.isValid === true) {
      const side = this.arr[0];
      return side * side
    }
    return false
  }
}

let square = new Square( [ 5, 5, 5, 5 ] )
let square2 = new Square( [ 5, 4, 3, 2 ] )
=======
  get Area() {
    if (!this.isValid) {
      return undefined;
    }
    
    return this.arr[0] ** 2
  }
}
>>>>>>> 44d9bb1071a7980ed1f3bfcf3bef8b759e23405a
