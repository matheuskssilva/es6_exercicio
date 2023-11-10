const alunos = [{
        nome: 'João',
        nota: 6
    },
    {
        nome: 'Maria',
        nota: 3
    },
    {
        nome: 'Marcelo',
        nota: 2
    },
    {
        nome: 'Ana',
        nota: 8
    }
]

function nota(notaAluno) {
    return notaAluno.filter(alunos => alunos.nota >= 6)
}

const alunosAprovados = nota(alunos)


console.log(alunosAprovados)