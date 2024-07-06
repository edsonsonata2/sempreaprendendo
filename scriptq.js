const questions = [
    // ETAPA 3
    {
        question: "Quer começar?",
        options: ["Sim quero!",]
    },
    // ETAPA 2
    {
        question: "Qual seu nível de espinha ou acne?",
        options: ["Grau 1(Leve)", "Grau 2(Moderada)","Grau 3(Moderadamente Grave)","Grau 4(Grave)"]
    },
    {
        question: "Onde elas mais te incomadam?",
        options: ["No nariz" , "No lábio", "No queixo" , "Na bochecha"]
    },
    {
        question: "Há quanto tempo você está com acne?",
        options: ["Aproximadamente 1 mes", "Entre 2 a 4 meses", "Desde que era adolescente", "Já sofro com acne há alguns anos"]

    },
    {
        question: "Você tem condições financeiras para custear produtos ou consultar um especialista?",
        options: ["Não tenho", "Sim, tenho", "Estou avaliando", "Buscando opções"]

    },
    // ETAPA 3
    {
        question: "O que você gostaria de retirar na sua pele?",
        options: ["Retirar cicatrizes", "Retirar vermelhidão", "Retirar inflamação" , "Todas as frases acima"]
    },
    {
        question: "Como gostaria de acabar com a acne naturalmente?",
        options: ["Com chá verde, seria mais suave." , "Com shot de cúrcuma, seria mais calmante." , "Apenas seguindo métodos naturais."]
    },

    {
        question: "Quais benefícios você teria ao acabar com a acne?",
        options: ["Melhor autoestima, poderia sair normalmente.", "Menos preocupação, poderia estar mais calma sem saber o que fazer para remover ou esconder.", "Mais confiança, poderia falar com todo mundo sem receio.", "Pele mais saudável, poderia estar mais saudável e viver mais feliz."]
    },
    // ETAPA 4
    {
        question: "Pediatra descobre que os chás podem ajudar a remover acne de forma mais natural e menos custosa! Quer descobrir como?",
        options: ["Sim, quero acabar logo com isso!"]
    },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionData = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.textContent = questionData.question;

    const optionsElement = document.createElement('ul');
    optionsElement.className = 'options';

    questionData.options.forEach(option => {
        const optionElement = document.createElement('li');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'option';
        optionInput.value = option;
        optionInput.id = option;

        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = option;
        optionLabel.textContent = option;

        optionElement.appendChild(optionInput);
        optionElement.appendChild(optionLabel);
        optionsElement.appendChild(optionElement);
    });

    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        // Store the selected answer (optional)
        const answer = selectedOption.value;
        console.log(`Answer to question ${currentQuestionIndex + 1}: ${answer}`);

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert('Por favor, selecione uma opção.');
    }
}

function showResults() {
    window.location.href = 'index.html'; // Redireciona automaticamente para index.html
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
