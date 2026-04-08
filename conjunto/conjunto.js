function conjunto(){
    const letras = new Set();
    letras.add("a");
    letras.add("b");
    letras.add("c");

    console.log(letras.has("g"));

    //delete() é um método para remover um elemento do conjuto
    letras.delete("c");
    console.log(letras);

    //Como no conjunto a chave é igual no valor, os métodos values
    for(const x of letras.values()){
        console.long(x);
    }

    for(const x of letras.keys()){
        console.long(x);
    }

}
conjunto();