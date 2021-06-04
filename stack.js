class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }
    // add element to top of stack
    push (){
        var element = document.getElementById("pushelement").value
        alert("新增的數字為"+data)
        this.items[this.count] = element
        this.count+=1
        console.log(`${element} add to ${this.count}`)
        return this.count-1
    }

    pop(){
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count -1]
        this.count -= 1 
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    peek(){
        console.log(`Top element is ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }

    isEmpty(){
        console.log(this.count==0 ? 'Stack is empty':'Stack is not empty')
        return this.count ==0
    }

    size(){
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    print(){
        let str = ''
        for (let i=0 ; i<this.count;i++){
            str += this.items[i] + ' ' 
        }
        return str
    }

    clear(){
        this.items = []
        this.count = 0
        console.log('Stack clear')
        return this.items
    }

}

const stack = new Stack()
stack.isEmpty()
stack.push(100)
stack.push(200)
stack.peek()
stack.push(300)
stack.isEmpty()
stack.size()
stack.pop()
console.log(stack.print())