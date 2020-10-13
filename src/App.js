// Import react so that our file knows what framework we are using
import React from 'react';
import './App.css';
// Import the components that we are going to use.
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";

// The App.js is the super parent component that nests our whole react application. It is the first point of call and what the browser will look for in order to know what to render.
function App() {
// Because we are only using one page we are going to handle the state of our application on the App.js -> because this is the parent component and can directly influence the components TodoForm and TodoItem.
// todos: This is our state value
// setTodos: is the action function to update our state value to something else. 
// useState(): Whatever is in the brackets is what will be set as our initial state for the app . In this example, we have set 3 todos as our initial state so when we load up the app we will see 3 todos on the screen.

  const [todos, setTodos] = React.useState(
    // This is an array of objects, a very useful data structure that will be used quite a bit in FE dev. An array of objects allows us to set multiple key:value pairs for an array entry, instead of there being only one value. 
    // KEY VALUE PAIR: 
    // In the example below 'text': is the key as is it the identifier for the value we want to get. 
    // "learn about react": this is the value. So if i wanted to retrieve the value i can call the key. For example with the map that is seen below with its values listed in the TodoItem component. 
    [
      {
        text: "Learn about React",
        isCompleted: false,
      },
      {
        text: 'Meet friend for lunch',
        isCompleted: false,
      },
      {
        text: 'Build really cool todo app',
        isCompleted: false,
      },
    ]
  );

  const addTodo = (text) => {
    // This is the function that we pass to the TodoForm component
    // This function receieves that value of text that is from the text input on the TodoForm component. 
    const newTodos = [...todos, { text }];
    // We then create a new array that consists of the old todos array AND then we are adding the text input into the array as another object 
    // We know that it is in an object from the { text } curly brackets that are wrapped around it. 
    setTodos(newTodos)
    // We then update the sate with the new array of newTodos
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    // Same as above but instead of reading the text that is inputted it insteads passes the index of the object(the todo which will look like { text: "i am a todo", isCompleted: false}) that we click.
    // An index is the numbering of each value in the array or array of objects.
    // If it was the first object the index would be 0, if it was the second object it would be 1. (the count of index starts at 0)
    newTodos[index].isCompleted = true;
    // I am then saying to match my index number that i have given with the newTodos array that I have created. 
    // Once it has done the match, read the key of isCompleted from that object and set it to true (instead of false)
    setTodos(newTodos);
    // We then update the state with the new array of newTodos with the item at the index we passed in set to now set to true
  }

  const removeTodo = (index) => {
    // Just like the completeTodo function, this function will read the index that is passed to it. 
    const newTodos = [...todos];
    // Create a new array from the existing todos array that is found in the state. 
    newTodos.splice(index, 1);
    // .splice is an inbuilt javascript function that will cut out of the array what we tell it to cut out. 
    // The first param (index, 1)-> tells us what item to cut out. Since we pass in the index of the todo we know that it will cut out the item in the array with the matching index
    // The second param (index, 1) -> tells us how many to cut out. 1 in this case. So i want to cut out one entry that is at the location of the index i have passed in. 
    setTodos(newTodos);
    // Update the state with the new array with the value spliced from it
  }

  return (
    <div className="app">
      <div className="todo-list">
      <h1>My todo list</h1>
        {/* .map() is like a forEach loop. What it will do is go through every value in the data object that you provide and complete the function that you tell it to do. 
        In this example we are using the state todos as our data object. We are then going through every object in the state and assigning it to an instance of the component TodoItem.
        So if i have 3 todos in my data object then i should expect to see 3 TodoItem components on my screen */}

        {/* Map.() template is :
        {yourDataObject.map((idenitfier (*an identifier that you know which will help map the old array to the new array), index (*the number value, you don't need to do anything else besides just putting in 'index'))

        =>               *fat arrow function which means "do a function " 
        (               * brackets which is a short cut that means 'return' so return what ever is in the brackets. 
          <TodoItem/ >  *component which will receive the mapped value from the map. 
        ) 
        )} */}
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} completeTodo={completeTodo} removeTodo={removeTodo} index={index}/>
      ))}
      <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
