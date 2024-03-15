function maiorValor (a:number[]): number{
    if(a.length == 1){
        console.log("Caso base");
        return a[0]
    } else {
        console.log((a.slice(1, a.length)));
       let valor_restante = maiorValor(a.slice(1, a.length))
        if(a[0] >= valor_restante){
            console.log(`Retornando ${a[0]} pois é maior ou igual a ${valor_restante}`);
            return a[0]
        } else {
            console.log(`Retornando ${valor_restante} pois é maior que ${a[0]}`);
            return valor_restante
        }
    }
}

export {maiorValor};
