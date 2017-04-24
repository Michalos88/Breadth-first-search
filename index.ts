/**
 * Created by mlyskawi on 4/23/2017.
 */
import { Queue } from './Queue';
/*import * as fs from 'fs';
 import * as path from 'path';


 fs.readFile(path.join(__dirname,"infile"+".dat"),"utf-8", (err, file) => {
 if (err) console.error("An error occurred while opening the file!", err);
 else
 {
 TopologicalSort(graph(file));




 }
 });*/


let input="4 3\n1 2\n0 1\n3 1";
let root=[0,3];
BFN(graph(input),root);
function graph(input1){

    let digraph = [];
    let nodes,edges;
    let lines = input1.split("\n");
    let firstLine = lines[0].split(" ");
    nodes = firstLine[0];
    edges = firstLine[1];

    for(let i=0;i<nodes;i++){
        let value = [];
        for(let j=0;j<nodes;j++){
            value.push(0);
        }
        digraph.push(value);
    }

    let edge_end_node_1,edge_end_node_2;

    for(let i = 0; i < edges;i++){
        let line = lines[i+1].split(" ");
        edge_end_node_1 = line[0];
        edge_end_node_2 = line[1];
        digraph[edge_end_node_1][edge_end_node_2]=1;

    }

    return digraph;

}



function BFN (graph1,root1){
    let visted = [];
    for (let i=0;i < graph1.length;i++){
        visted.push(false)
    }
    let Q = new Queue([]);
    let vector = [];
    for (let i=0;i < root1.length;i++){
        Q.enqueue(graph1[root1[i]]);
        visted[root1[i]] = true;
        vector.push(root1[i]);
    }

    while (Q.length != 0){
        let current = Q.dequeue();
        for (let i=0;i < current.length;i++){
            if(current[i]==1){
                if(visted[i]==false){
                    vector.push(i);
                    Q.enqueue(graph1[i]);
                    visted[i] = true;
                }
            }
        }


    }

    for (let k=0;k < graph1.length;k++){
        for (let j=0;j < vector.length;j++){
            if (k == vector[j]){
                console.log(k+" "+(j+1))
            }
        }
    }

}


