const classes = ['k1md', 'k2tb', 'k3MBR', 'k4TB', 'J', 'J1M', 'J2MC', "tamd", "j2", "t6"]
const excecoes = ["ta", "k4", "j2", "t6", "TA", "K4", "J2", "T6"]
const novasClasses = []

classes.forEach(element => {
    sobeEstagio(element)
});

function sobeEstagio(estagio) {
    const  num = estagio.search(/\d/) //procura o dígito
    const outros = estagio.slice(0,2) //puxa as exceções da array de turmas
    if (num !== -1 && excecoes.includes(outros) !== true) { //caso não tenha digito o retorno é -1, casos de exceções são tratados de maneira diferente
    var numeroTurma = Number(estagio[num]) //puxa o valor numérico da string:
    novaTurma = estagio.charAt(0) + (numeroTurma+=1) + estagio.slice(2) //Junta as informações e monta nova turma:
    novasClasses.push(novaTurma.toUpperCase())
} else if (num == -1 && excecoes.includes(outros) !== true) { //trata das turmas sem número
    novaTurma = estagio.charAt(0) + 1 + estagio.slice(1)
    novasClasses.push(novaTurma.toUpperCase())
} else {
    if(outros == "ta"){
    novaTurma = "T2" + estagio.slice(2)
    novasClasses.push(novaTurma.toUpperCase())}
    else if(outros == "k4"){
        novaTurma = "J" + estagio.slice(2)
        novasClasses.push(novaTurma.toUpperCase())
    }
    else if (outros == "j2") {
        novaTurma = "T1" + estagio.slice(2)
        novasClasses.push(novaTurma.toUpperCase())
    }
    else if (outros == "t6") {
       novasClasses.push("Aluno concluiu o Curso") 
    }
    else{
        novasClasses.push("Estagio não encontrado.")
    }
}
}
console.log(novasClasses)
