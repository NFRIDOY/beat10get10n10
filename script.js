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

const roiInvestmentInput = document.getElementById('roiInvestment');
const roiProfitInput = document.getElementById('roiProfit');
const durationInput = document.getElementById('duration');
const roiInflationInput = document.getElementById('roiInflation');
const calculateRoiBtn = document.getElementById('calculateRoiBtn');
const roiValue = document.getElementById('roiValue');
const roiInYearValue = document.getElementById('roiInYearValue');
const totalReturnValue = document.getElementById('totalReturnValue');
const profitAmountValue = document.getElementById('profitAmountValue');
const profitAmountPerMonthValue = document.getElementById('profitAmountPerMonthValue');
const finalResultValue = document.getElementById('finalResultValue');
const netProfitValue = document.getElementById('netProfitValue');
const roiMessage = document.getElementById('roiMessage');

calculateRoiBtn.addEventListener('click', () => {
    const investment = parseFloat(roiInvestmentInput.value);
    const profit = parseFloat(roiProfitInput.value);
    const duration = parseFloat(durationInput.value);
    const inflation = parseFloat(roiInflationInput.value);

    if (isNaN(investment) || isNaN(profit) || isNaN(duration) || isNaN(inflation) || duration <= 0) {
        roiMessage.textContent = 'Please enter valid positive numbers in all fields.';
        roiValue.textContent = '';
        roiInYearValue.textContent = '';
        totalReturnValue.textContent = '';
        profitAmountValue.textContent = '';
        profitAmountPerMonthValue.textContent = '';
        finalResultValue.textContent = '';
        netProfitValue.textContent = '';
        return;
    }

    const durationInYears = duration / 12;
    const roi = profit;
    const roiInYear = roi / durationInYears;
    const profitAmount = investment * (profit / 100);
    const totalReturn = investment + profitAmount;
    const profitAmountPerMonth = profitAmount / duration;

    const finalResult = (investment * (1 + roiInYear / 100)) * (1 - inflation / 100);
    const netProfit = finalResult - investment;

    roiValue.textContent = roi.toFixed(2);
    roiInYearValue.textContent = roiInYear.toFixed(2);
    totalReturnValue.textContent = totalReturn.toFixed(2);
    profitAmountValue.textContent = profitAmount.toFixed(2);
    profitAmountPerMonthValue.textContent = profitAmountPerMonth.toFixed(2);
    finalResultValue.textContent = finalResult.toFixed(2);
    netProfitValue.textContent = netProfit.toFixed(2);

    if (finalResult > investment) {
        roiMessage.textContent = 'Profitable investment after considering inflation.';
    } else {
        roiMessage.textContent = 'Investment is not profitable after considering inflation.';
    }
});