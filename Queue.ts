export class Queue<T>{

    private arr: T[];

    constructor(arr?: T[]) {
        this.arr = arr || [];
    }

    public enqueue(value: T) {
        this.arr.push(value);
    }

    public dequeue(): T {
        return this.arr.shift();
    }


    public get peek(): T {
        return this.arr[0];
    }

    public get end():T {
        return this.arr[this.arr.length-1];
    }


    public get length() {return this.arr.length;}

    public clean() {this.arr = [];}
}
