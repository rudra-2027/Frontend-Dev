function logToDom(message, type) {
    const logsElement = document.getElementById('logs');
    const p = document.createElement('p');
    p.textContent = message;
    p.className = type;
    logsElement.appendChild(p);
    logsElement.scrollTop = logsElement.scrollHeight;
}

function runSchedulerDemo() {
    document.getElementById('logs').innerHTML = '';
    
    logToDom('Start', 'sync-log');

    setTimeout(() => {
        logToDom('Macrotask: setTimeout()', 'macro-log');
    }, 0);

    Promise.resolve().then(() => {
        logToDom('Microtask: Promise.then()', 'micro-log');
    });

    logToDom('Synchronous Log', 'sync-log');

    logToDom('End', 'sync-log');
}