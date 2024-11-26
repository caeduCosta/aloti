// Seleção dos elementos
const idosoCard = document.getElementById('idosoCard');
const profissionalCard = document.getElementById('profissionalCard');
const nextButton = document.getElementById('nextButton');

let selectedCard = null;

// Função para selecionar o card
idosoCard.addEventListener('click', () => {
    selectedCard = 'idoso';
    idosoCard.classList.add('selected');
    profissionalCard.classList.remove('selected');
});

profissionalCard.addEventListener('click', () => {
    selectedCard = 'profissional';
    profissionalCard.classList.add('selected');
    idosoCard.classList.remove('selected');
});

// Função para o botão "Próximo"
nextButton.addEventListener('click', () => {
    if (selectedCard === 'idoso') {
        window.location.href = "../user-idoso/formsCadastro/CadastroForm1.html";
    } else if (selectedCard === 'profissional') {
        // Redirecionar para a página de cadastro do profissional
        window.location.href = "../user-profissional/formsCadastro/CadastroForm1.html"; // Exemplo de endereçamento, altere conforme necessário
    } else {
        alert("Por favor, selecione um tipo de usuário.");
    }
});
