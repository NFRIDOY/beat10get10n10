const investmentInput = document.getElementById('investment');
const profitInput = document.getElementById('profit');
const inflationInput = document.getElementById('inflation');
const calculateBtn = document.getElementById('calculateBtn');
const resultValue = document.getElementById('resultValue');
const resultMessage = document.getElementById('resultMessage');

calculateBtn.addEventListener('click', () => {
    const investment = parseFloat(investmentInput.value);
    const profit = parseFloat(profitInput.value);
    const inflation = parseFloat(inflationInput.value);

    const total = investment * (1 + profit / 100);
    const realReturn = total * (1 - inflation / 100);

    resultValue.textContent = realReturn.toFixed(2);

    if (realReturn > 110) {
        resultMessage.textContent = 'Great Profit!';
    } else if (realReturn == 110) {
        resultMessage.textContent = 'Beat 10 Get 10';
    } else if (realReturn > 100) {
        resultMessage.textContent = 'We are in profit';
    } else if (realReturn == 100) {
        resultMessage.textContent = 'No gain No Pain';
    } else {
        resultMessage.textContent = 'Loss';
    }
});