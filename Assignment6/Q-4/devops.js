function deployServer(serverName, delayMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(`Server ${serverName} failed deployment!`);
            } else {
                resolve(`${serverName} finished deployment in ${delayMs / 1000}s`);
            }
        }, delayMs);
    });
}

function runServerDemo() {
    const statusAll = document.getElementById('status-all');
    const statusRace = document.getElementById('status-race');

    statusAll.textContent = 'All Status: Waiting...';
    statusAll.className = 'all-box';
    statusRace.textContent = 'Race Status: Waiting...';
    statusRace.className = 'race-box';

    const serverA = deployServer('Server A', 2000);
    const serverB = deployServer('Server B', 3000);
    const allServers = [serverA, serverB];

    Promise.race(allServers)
        .then(result => {
            statusRace.textContent = `Fastest response: ${result}`;
            statusRace.className = 'race-box';
        })
        .catch(error => {
            statusRace.textContent = `Race Failure: ${error}`;
            statusRace.className = 'failure';
        });
    
    Promise.all(allServers)
        .then(results => {
            console.log('--- All Deployment Results ---');
            console.table(results);
            statusAll.textContent = 'Deployment completed for all servers';
            statusAll.className = 'all-box';
        })
        .catch(error => {
            console.error('--- Deployment Failure ---');
            console.error(error);
            statusAll.textContent = `All Failure: Deployment stopped! ${error}`;
            statusAll.className = 'failure';
        });
}