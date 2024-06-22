import { Dados, Sort } from "./3.17_model";

 
let sort = new Sort<Dados>();
 
let pessoas: Dados[] = [
    new Dados("Maria", 25, "12345"),
    new Dados("João", 30, "54321"),
    new Dados("Ana", 20, "98765"),
    new Dados("Fabricio", 20, "98765"),
    new Dados("Fabricio", 44, "98762"),
    new Dados("João", 25, "11111"),
    new Dados("Ana", 25, "22222"),
    new Dados("Maria", 25, "55555")
];
 
console.log("Array desordenado:");
console.log(pessoas);
 
sort.bubble_opt_view(pessoas); 
 
console.log("Array ordenado:");
console.log(pessoas);