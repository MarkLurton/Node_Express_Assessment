### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
- Promises and Async / Await
- What is a Promise?
- An object that acts as a one-time guarantee of future value. Can be pending, resolved or rejected.
- What are the differences between an async function and a regular function?
- Async functions always return promises and can pause execution with await
- What is the difference between Node.js and Express.js?
- Node is JS enviornment that runs server-side while Express is a framework that can be used for routing
- What is the error-first callback pattern?
- A function that will either return an error object if an error exists or successful data if not.
- What is middleware?
- Code that runs in the middle of the request / response cycle
- What does the `next` function do?
- Allows execution to continue to the next route and can be used to pass errors
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

- Since this is an async function it will only return a promise of the desired array. Currently this function awaits the promises one by one and performace could be improved by running the promises in parallel with something like Promise.all.
