const MAX_ATTEMPTS = 3;

function logResult(message, type) {
    const logsElement = document.getElementById('logs');
    const p = document.createElement('p');
    p.textContent = message;
    p.className = type;
    logsElement.appendChild(p);
    logsElement.scrollTop = logsElement.scrollHeight;
}

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject('Server Error: Order submission failed temporarily.');
            } else {
                resolve('Order successfully submitted!');
            }
        }, 500);
    });
}

async function processOrder() {
    document.getElementById('logs').innerHTML = '';
    logResult('Starting order process...', 'log-attempt');

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        logResult(`Attempt ${attempt}: Submitting order...`, 'log-attempt');
        
        try {
            const result = await submitOrder();
            logResult(`Attempt ${attempt}: Success! ${result}`, 'log-success');
            return;
        } catch (error) {
            logResult(`Attempt ${attempt}: Failed. Reason: ${error}`, 'log-failure');
            if (attempt === MAX_ATTEMPTS) {
                throw new Error("Order could not be processed after all attempts.");
            }
        }
    }
}

async function runProcessWrapper() {
    try {
        await processOrder();
    } catch (finalError) {
        logResult(`--- Final Status ---`, 'log-failure');
        logResult(finalError.message, 'log-failure');
    }
}