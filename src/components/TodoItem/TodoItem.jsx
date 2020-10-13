// import react 
// import the css file
import React from 'react';
import './TodoItem.css';

// the function TodoItem()is the component name (or parent function) and is what we will call when we want to use this component in another file or section. 
// (props) is a simple way to say that this function or component will receive properties.
function TodoItem(props) {

  // Deconstruct the props that are added to the component
  // Deconstruct: means to 'pull out' the values that are needed from an object. 
  // In this instance we are pulling in all the props that were passed to the TodoItem component. 

  const { todo, completeTodo, index, removeTodo } = props;

  // todo: this is the returned result from the map that is on the App.js i.e {todos.map(todo, index) => (....)}
  // completeToDo: this is the function that we created on the App.js that will update our State on the App.js to say that the todo is complete. 
  // index: When a map returns the new array of objects it will assign an index, which is a numeric value to identities the location of the object in the array. 
  // removeTodo: Like the completeToDo function 


  // Because this component is being used as a part of a map, we want to use the returned result from the map to track what object value we want to see/use in the component. 
  
  return (
   
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      {/* This className is using string interpolation, a javascript way to add variables into a string. 
      A string interpolation is used with the `` wrapping the content and the variable being called with a ${variableName}*/}

      {/* This is a ternary operator, a nifty tool to do a boolean condition. How this reads:
        ${todo.isCompleted ? "complete" : ""}
        IF todo.isCompleted === true then do the css class "complete" ELSE do "" class (which is nothing, so do no styling)
      */}
      {todo.text}
      {/* todo.text will return the text value from our array of object that is stored in our state */}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        {/* When this button is clicked it will read the completeTodo prop -> which happens to be an function with the param of the index
        This says that the index of the item clicked, do the completeTodo function. 
        */}
        <button onClick={() => removeTodo(index)}>X</button>
        {/* When this button is clicked it will read the removeTodo prop -> which happens to be an function with the param of the index
        This says that the index of the item clicked, do the removeTodo function. 
        */}
      </div>  
    </div>
  )
}

export default TodoItem;
// For every react component we also need to specify which function to export. In most cases this is the parent function. So this says export everything that is under the TodoItem function.  