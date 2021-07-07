let alunosConstrutor = function Alunos(nome, faltas, notas){
    this.notas = notas,
    this.nome = nome,
    this.faltas = faltas,
    this.media = function(array){
       let soma = array.reduce((a,b)=> {
            return a + b;
        })
        return soma / notas.length;
    }
    this.aumentarFalta = function(){
       return this.faltas++;
    }
}

module.exports = alunosConstrutor;