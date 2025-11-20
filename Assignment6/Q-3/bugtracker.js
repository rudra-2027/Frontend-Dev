const API_FAILURE = Math.random() < 0.3;

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (API_FAILURE) {
                reject('API Error: Could not connect to the bug database.');
            } else {
                const bugs = ["UI glitch", "API timeout", "Login failure"];
                resolve(bugs);
            }
        }, 1000);
    });
}

function runBugTracker() {
    const statusElement = document.getElementById('status');
    statusElement.textContent = 'Fetching bugs...';
    statusElement.className = '';
    
    getBugs()
        .then(bugs => {
            console.log('--- Successfully Fetched Bugs ---');
            console.table(bugs.map(bug => ({ Bug: bug })));
            statusElement.textContent = `Successfully fetched ${bugs.length} bugs. Check console.table()`;
            statusElement.className = 'success';
        })
        .catch(error => {
            console.error('--- Bug Fetching Failed ---');
            console.error(error);
            statusElement.textContent = `Error: ${error}`;
            statusElement.className = 'failure';
        });
}