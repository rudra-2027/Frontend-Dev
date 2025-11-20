function logToDom(message, type, targetId) {
    const logsElement = document.getElementById(targetId);
    const p = document.createElement('p');
    p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    p.className = `log-item ${type}`;
    logsElement.appendChild(p);
    logsElement.scrollTop = logsElement.scrollHeight;
}

function stepCallback(name, callback, targetId) {
    setTimeout(() => {
        logToDom(`Stage Complete: ${name}`, 'success', targetId);
        if (callback) {
            callback();
        }
    }, 1000);
}

function callbackHell() {
    const targetId = 'logs-callback';
    document.getElementById(targetId).innerHTML = '';
    logToDom('--- Starting Callback Hell Pipeline ---', 'header', targetId);

    stepCallback('Design', () => {
        stepCallback('Build', () => {
            stepCallback('Test', () => {
                stepCallback('Deploy', () => {
                    stepCallback('Celebrate', () => {
                        logToDom('Pipeline Finished via Callbacks!', 'final', targetId);
                    }, targetId);
                }, targetId);
            }, targetId);
        }, targetId);
    }, targetId);
}

function pipelineStep(name, targetId) {
    return new Promise(resolve => {
        setTimeout(() => {
            logToDom(`Stage Complete: ${name}`, 'success', targetId);
            resolve();
        }, 1000);
    });
}

async function asyncAwaitFlow() {
    const targetId = 'logs-async';
    document.getElementById(targetId).innerHTML = '';
    logToDom('--- Starting Async/Await Pipeline ---', 'header', targetId);

    try {
        await pipelineStep('Design', targetId);
        await pipelineStep('Build', targetId);
        await pipelineStep('Test', targetId);
        await pipelineStep('Deploy', targetId);
        await pipelineStep('Celebrate', targetId);
        logToDom('Pipeline Finished via Async/Await!', 'final', targetId);

        console.log("Async/Await Explanation: Async/await dramatically improves readability by allowing asynchronous logic to be written and read sequentially, mimicking synchronous code execution and effectively flattening the deeply nested structure, known as the 'pyramid of doom', inherent in callback hell.");

    } catch (error) {
        logToDom(`Pipeline failed: ${error.message}`, 'error', targetId);
    }
}