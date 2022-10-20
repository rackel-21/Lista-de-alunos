let students = [
    {
        name: "Gabriel",
        note1: 10,
        note2:  7,
        genre: "Masculino"
    },
    {
        name: "Paula",
        note1: 7,
        note2: 4,
        genre: "Feminino"
    },
    {
        name: "Maria",
        note1: 7,
        note2: 1,
        genre: "Feminino"
    },
    {
        name: "João",
        note1: 9,
        note2: 4,
        genre: "masculino"
    },
    {
        name: "Laura",
        note1: 7,
        note2: 7,
        genre: "Feminino"
    },
    {
        name: "Luísa",
        note1: 7,
        note2: 9,
        genre: "Feminino"
    },
    {
        name: "Pedro",
        note1: 3,
        note2: 9,
        genre: "masculino"
    },
    {
        name: "Lucas",
        note1: 10,
        note2: 4,
        genre: "masculino"
    },
    {
        name: "Carol",
        note1: 10,
        note2: 9,
        genre: "Feminino"
    },
    {
        name: "Fabiana",
        note1: 9,
        note2: 7,
        genre: "Feminino"
    },
    {
        name: "Clara",
        note1: 3,
        note2: 2,
        genre: "Feminino"
    },
    {
        name: "Sofia",
        note1: 10,
        note2: 10,
        genre: "Feminino"
    },
    {
        name: "Carla",
        note1: 8,
        note2: 2,
        genre: "Feminino"
    },
    {
        name: "Rodrigo",
        note1: 5,
        note2: 3,
        genre: "Masculino"
    },
    {
        name: "Matheus",
        note1: 8,
        note2: 7,
        genre: "Masculino"
    },
    {
        name: "Ana",
        note1: 6,
        note2: 10,
        genre: "Feminino"
    }
]

window.prompt("Qual nome do aluno ?")
   
    

function calcMed(note1, note2) {
    return (note1 + note2) /2
}

function showAprovedMessage(student, media) {
    if(student.genre == "Masculino") {
        alert(`A média do aluno ${student.name} é ${media}\n
        Parabéns, ${student.name}! Você foi aprovado !`)
    }else {
        alert(`A média da aluna ${student.name} é ${media}\n
        Parabéns, ${student.name}! Você foi aprovada !`)
    }
}

function showReprovedMessage(student, media) {
    if(student.genre == "Masculino") {
        alert(`A média do aluno ${student.name} é ${media}\n
        Não foi dessa vez, ${student.name}! Você foi reprovado !`) 
    }else {
        alert(`A média da aluna ${student.name} é ${media}\n
        Não foi dessa vez, ${student.name}! Você foi reprovada !`) 
    }
}


for(let student of students) {
    const media = calcMed(student.note1, student.note2)
    if(media >= 7) {
        showAprovedMessage(student, media)
    }else {
        showReprovedMessage(student, media)
    }
}

