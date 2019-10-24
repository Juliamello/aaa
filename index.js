class Pessoa{
    constructor(nome, idade, sexo){
        this._nome = "";
        this._idade = 0;
        this._sexo = "";
    }
    fazerAniv(){
        alert("Parabéns ;)")
    }
    setNome(){
        this._nome = nome;
    }

    getNome(){
        return this._nome;
    }

    setIdade(){
        this._idade = idade;
    }
    getIdade(){
        return this._idade;
    }
    setSexo(){
        this._sexo = sexo;
    }
    getSexo(){
        return this._sexo;
    }
}

class Aluno extends Pessoa {
    constructor(nome,idade,sexo,matr,curso){
        super (nome,idade,sexo);
        this._matr = 0;
        this._curso = ""; 
    }

    setMatr(){
        this._matr = matr;
    }
    getMatr(){
        return this._matr;
    }
    setCurso(){
        this._curso = curso;
    }
    getCurso(){
        return this._curso;
    }
}



class Professor extends Pessoa {
constructor(nome,idade,sexo,especialidade,salario){
    super(especialidade,salario)
    this._especialidade = "";
    this._salario = 0;
}
setEspecialidade(){
    this._especialidade = especialidade;
}
getEspecialidade(){
    return this._especialidade;
}
setSalario(){
    this._salario = salario;
}
getSalario(){
    return this._salario;
}
}
class Funcionario{
    constructor(nome,idade,sexo,setor,trabalho){
        super(nome,idade,sexo)
        this._setor = setor;
        this._trabalho;
    }

    setSetor(){
        this._setor = setor;
    }
    getSetor(){
        return this._setor;
    }
    setTrabalho(){
        this._trabalho = trabalho;
    }
    getTrabalho(){
        return this._trabalho;
    }
}