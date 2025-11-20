function log(message, type = 'log-step') {
    const logsElement = document.getElementById('logs');
    const p = document.createElement('p');
    p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    p.className = type;
    logsElement.appendChild(p);
    logsElement.scrollTop = logsElement.scrollHeight;
}

function deliveryStep(stepName) {
    return new Promise((resolve, reject) => {
        const delayTime = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(`${stepName} failed unexpectedly!`);
            } else {
                resolve(stepName);
            }
        }, delayTime);
    });
}

async function runPipeline() {
    document.getElementById('logs').innerHTML = '';
    log('Start Pipeline', 'log-start');

    try {
        await deliveryStep('takeOrder');
        log('Step 1: Order taken', 'log-step');

        await deliveryStep('prepare');
        log('Step 2: Food prepared', 'log-step');

        await deliveryStep('pack');
        log('Step 3: Package ready', 'log-step');

        await deliveryStep('dispatch');
        log('Step 4: Out for delivery', 'log-step');

        await deliveryStep('deliver');
        log('Delivery completed!', 'log-success');

    } catch (error) {
        log(`Pipeline failed! Reason: ${error}`, 'log-failure');
    }
}