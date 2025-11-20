console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

console.log("\n--- Explanation ---");
console.log("The synchronous code runs first: 'Script start' and 'Script end'.");
console.log("After the synchronous code completes, the Event Loop checks the Microtask Queue.");
console.log("The 'Promise callback' (microtask) is executed before any macrotasks.");
console.log("Finally, the Event Loop checks the Macrotask Queue and executes the 'Timeout callback' (macrotask).");
console.log("Execution Order: Script start, Script end, Promise callback, Timeout callback.");
console.log("This priority is because the Event Loop strictly processes all tasks in the Microtask Queue after the current script block finishes and before moving on to the next task in the Macrotask Queue.");