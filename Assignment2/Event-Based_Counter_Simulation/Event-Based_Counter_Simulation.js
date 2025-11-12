let count = 0;
function increment() {

  function update() {
    count++;
    console.log(`Count increased to: ${count}`);
  }
  update();
}
function decrement() {

  function update() {
    count--;
    console.log(`Count decreased to: ${count}`);
  }
  update();
}
increment();
increment();
decrement();
increment();
decrement();