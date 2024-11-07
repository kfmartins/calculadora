// Função para adicionar valores ao display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para apagar o último caractere do display
function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Função para calcular o resultado da expressão
function calculateResult() {
    let currentValue = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(currentValue);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
