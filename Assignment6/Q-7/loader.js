function logResult(message, type = 'success') {
    const resultsElement = document.getElementById('results');
    const p = document.createElement('p');
    p.textContent = message;
    p.className = type;
    resultsElement.appendChild(p);
}

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject('Profile service is offline.');
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject('Post feed database connection failed.');
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject('Message queue timed out.');
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function runAllSettledDemo() {
    document.getElementById('results').innerHTML = '';
    logResult('Starting all modules concurrently...', 'time');
    
    const startTime = Date.now();

    const promises = [
        loadProfile(),
        loadPosts(),
        loadMessages()
    ];

    const results = await Promise.allSettled(promises);

    const endTime = Date.now();

    logResult('--- Loading Complete ---', 'time');
    
    results.forEach((result, index) => {
        const moduleName = ['Profile', 'Posts', 'Messages'][index];
        if (result.status === 'fulfilled') {
            logResult(`${moduleName}: ${result.value}`, 'success');
        } else {
            logResult(`${moduleName}: FAILED - ${result.reason}`, 'failure');
        }
    });

    const totalTime = endTime - startTime;
    logResult(`Total time taken: ${totalTime}ms`, 'time');
}