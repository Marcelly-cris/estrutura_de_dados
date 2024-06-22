class Dados {
    nome: string;
    idade: number;
    telefone: string;
 
    constructor(nome: string, idade: number, telefone: string) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
    }
}
 
class Sort<T extends { nome: string; idade: number; telefone: string }> {
 
    compare(a: T, b: T): number {
        if (a.nome !== b.nome) {
            return a.nome.localeCompare(b.nome);
        } else if (a.idade !== b.idade) {
            return a.idade - b.idade;
        } else {
            return a.telefone.localeCompare(b.telefone);
        }
    }
 
    bubble(v: T[]) {
        let n = v.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.compare(v[j], v[j + 1]) > 0) {
                    let aux = v[j];
                    v[j] = v[j + 1];
                    v[j + 1] = aux;
                }
            }
        }
    }
 
    bubble_view(v: T[]) {
        let n = v.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.compare(v[j], v[j + 1]) > 0) {
                    let aux = v[j];
                    v[j] = v[j + 1];
                    v[j + 1] = aux;
                }
            }
        }
    }
 
    bubble_opt(v: T[]) {
        let last_arr_position = v.length - 1;
        let last_swap_position = last_arr_position - 1;
        let swap_pos = 0;
        while (swap_pos >= 0) {      
            swap_pos = -1;  
            let j = 0;      
            while (j <= last_swap_position) {
                if (this.compare(v[j], v[j+1]) > 0) {
                    let aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;                
                    swap_pos = j;
                }
                ++j;
            }
            last_swap_position = swap_pos;
        }
        return v;
    }
 
 
    bubble_opt_view(v: T[]) {
        let last_arr_position = v.length - 1;
        let last_swap_position = last_arr_position - 1;
        let swap_pos = 0;
        let array_pass_count = 0;
        console.log("Original array: ", ...v);
        while (swap_pos >= 0) {      
            swap_pos = -1;  
            let j = 0;  
            ++array_pass_count;      
            while (j <= last_swap_position) {
                if (this.compare(v[j], v[j+1]) > 0) {
                    let aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;                
                    swap_pos = j;
                }
                ++j;
            }
            last_swap_position = swap_pos;
            console.log("Array after pass # ", array_pass_count, ": ", ...v);
            console.log("Last swap position: ", swap_pos);
        }
        return v;
    }
}
 
export {
    Sort, Dados
}