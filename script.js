function appendCharacter(char) {
    document.getElementById('result').value += char;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    var result = document.getElementById('result').value;
    try {
        var answer = eval(result);
        document.getElementById('result').value = answer;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
