class List {
    constructor() {
        this.data = new Array(10)
        this.size = 0
    }

    push(value) {
        if (this.size === this.data.length) {
            this.grow()
        }
        this.data[this.size] = value;
        this.size++
    }

    grow() {
        //create a new array that' s twice as big
        let aa = new Array(this.data.length * 2);
        //copy over every value from the old data array to the larger array
        for (let i = 0; i < this.data.length; i++) {
            aa[i] = this.data[i];
        }
        //set the larger array as the data for the list
        this.data = aa
    }


    //nemove(index=1)
    //aa = [5,8,12,13,19]
    // removed = 8
    remove(index) {
        if (this.size === 0) {
            return null
        }

        // save the value that was at the index
        let removed = this.data[index];
        //scoot all values after over left by one
        for (let i = index; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

        //manually overwrite the now-state data
        this.data[this.size - 1] = null

        // decrement the size to show one item was removed
        this.size--
        //return the value of the removed
        return removed
    }

    toString() {
        if (this.size === 0) {
            return "[]"
        } else {
            let result = "";
            for (let i = 0; i < this.size; i++) {
                result += this.data[i] + " "
            }
            return "[" + result + "]"
        }
    }


    addItem(index, value) {
        if (this.size === this.data.length) {
            this.grow()
        }
        //Leemos el array de el final al inicio
        //añadimos le nuevo item en el index deseado moviendo los demas items hacia la derecha
        for (let i = this.size; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = value
        this.size++
    }

    contains(value) {
        //Easy way
        //  return this.data.includes(value)


        //other way more long
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === value) {
                return true
            }
        }
        return false
    }

    // simple method that returns the value at the specified index
    //if the index is within ghe valid range of elements in the list
    // returns null if someone tries to access an index out of range
    //of the list.
    get(index) {
        if (index < this.size) {
            return this.data[index]
        }
        return null
    }

    // overwrite the value at the specified index,
    //and the index mush be within a valid range of the current size of the list
    set(index, value) {
        if (index >= 0 && index < this.size) {
            this.data[index] = value
        }
    }

    concat(listToConcat) {
        let result = new List();
        for (let i = 0; i < this.size; i++) {
            result.push(this.get(i))
        }
        for (let i = 0; i < listToConcat.size; i++) {
            result.push(listToConcat.get(i))
        }
        return result
    }

}


const ll = new List();
console.log(ll.toString())
ll.push(42);
console.log(ll.toString())
ll.push(23);
console.log(ll.toString())
ll.push(45);
console.log(ll.toString())
ll.push(88);
console.log(ll.toString())
ll.push(42);

//REMOVE

// ll.remove(2)
// console.log(ll.toString())
// ll.remove(1)
// console.log(ll.toString())

//ADD
ll.addItem(2, 180);
console.log(ll.toString())


console.log(ll.contains(180))
// ll.remove(ll.size -2)
console.log(ll.contains(42))