### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
<!-- Using asynchronous callbacks manage asynchronous code in JS. Using the async/await keywords in order to stop the code from running until a response is obtained by JS.  -->
- What is a Promise?
<!-- A promise is a one-time guarantee of a future vaule.  -->
- What are the differences between an async function and a regular function?
<!-- Async functions have the ability to wait for a response from a certain line of code before proceeding. A regular funtion does not wait in order to move on to the next one. If there is something that takes time to complete, a regular function will execute the request, but move on before getting a response. Async awaits the response before moving on.  -->
- What is the difference between Node.js and Express.js?
<!-- Express.js is a framework that is built on top of Node.js -->
- What is the error-first callback pattern?
<!-- Error-first callback patter is the process of structuring your code to check for an error occuring before running the rest of the function. Trying the code, and when an error occurs, catch it and throw an error to halt code.  -->
- What is middleware?
<!-- Middleware is programming that runs in the middle of functions. EX: authentication function that is running in the middle of requesting a specific page from a website. -->
- What does the `next` function do?
<!-- - The 'next' function tells express to move onto the next function in line. If 'next' is not specified, express will return what the current function is calling for and stop running.  -->

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
<!-- For performance, this code will take longer than needed because it is awaiting an answer for each variable before it moves on and creates another. To improve speed, you can initialize each variable without the await and put the await instead on the return. That way, 3 api calls are made at the same time.  -->
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```