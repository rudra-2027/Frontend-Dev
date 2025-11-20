function log(message, type = 'success') {
    const logsElement = document.getElementById('logs');
    const p = document.createElement('p');
    p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    p.className = type === 'success' ? 'log-success' : 'log-failure';
    logsElement.appendChild(p);
    logsElement.scrollTop = logsElement.scrollHeight;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function boilWater() {
    return new Promise((resolve, reject) => {
        const delayTime = Math.random() * 1000 + 1000;
        delay(delayTime).then(() => {
            if (Math.random() < 0.1) {
                reject('Error: Water boiler malfunctioned!');
            } else {
                log('Step 1: Water is boiling...');
                resolve('Boiled Water');
            }
        });
    });
}

function brewCoffee(water) {
    return new Promise((resolve, reject) => {
        const delayTime = Math.random() * 1000 + 1000;
        delay(delayTime).then(() => {
            if (Math.random() < 0.1) {
                reject('Error: Filter paper tore during brewing!');
            } else {
                log('Step 2: Coffee is brewing with ' + water);
                resolve('Freshly Brewed Coffee');
            }
        });
    });
}

function pourCoffee(brewedCoffee) {
    return new Promise((resolve, reject) => {
        const delayTime = Math.random() * 1000 + 1000;
        delay(delayTime).then(() => {
            if (Math.random() < 0.1) {
                reject('Error: Cup slipped while pouring!');
            } else {
                log('Step 3: Pouring ' + brewedCoffee + ' into the cup');
                resolve('Cup of Coffee');
            }
        });
    });
}

function startCoffeeProcess() {
    document.getElementById('logs').innerHTML = '';
    log('Starting the coffee process...', 'success');

    boilWater()
        .then(water => brewCoffee(water))
        .then(brewedCoffee => pourCoffee(brewedCoffee))
        .then(() => {
            log('Coffee ready for the team!', 'success');
        })
        .catch(error => {
            log('Process failed! ' + error, 'failure');
        });
}