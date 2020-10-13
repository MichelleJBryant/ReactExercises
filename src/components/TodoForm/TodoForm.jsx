// import react 
// import the css file

import React, { useState } from 'react';
// This is a way we can import useState from the react library so that it is simpler to access. 
// Otherwise if we leave the import as 'import React from 'react'; we will have to specify in our code 'React.useState()' instead of just useState


// the function TodoItem()is the component name (or parent function) and is what we will call when we want to use this component in another file or section. 
// (props) is a simple way to say that this function or component will receive properties.
function TodoForm(props) {
  const { addTodo } = props;
  // Deconstruct the props that are added to the component
  // Deconstruct: means to 'pull out' the values that are needed from an object. 
  // In this instance we are pulling in all the props that were passed to the TodoForm component. 

  // addToDo: a function that is specified in the App.js that will add a new item to our array of objects that is currently in our state. 

  const [value, setValue] = useState("");
  // value: My state variable is called value -> this is what i will use to read what my state currently is
  // setValue: this is the action function used to update my state of value. 
  // useState(""): I am using the function from the react library, and what ever is set in my () is then set as my initial state for when the component loads. In this case it will be an empty string "". 
  //  FYI: Strings are specified in JS as anything that is written in "". So "value" is a string that will print out value. While {value} will read a variable called valued and print out the result of that variable. 

  const handleSubmit = (event) => {
    // This is the function that we supply to our onSubmit prop for the form submission
    // We are passing into this function the event object
    // event: this is an object that is generated from the browser that helps to track user interaction
    event.preventDefault();
    // event.preventDefault(): this function will stop the submit from triggering automatically, which it wants to do by default. 
    // Instead we want to see that there is a value to submit instead of just submitting gun ho. 
    
    if (!value) {
      // This condition says that IF there is NO value then return nothing. Because when there is no value we don't want that to be added to our list of todos otherwise you see a lot of empty submissions (because people may try and submit empty values)
      return;
    }
    // Otherwise it will call the prop addTodo -> which is a function that is listed on the App.js with the param of our current state value. 
    addTodo(value);
    // Then after we have submitted and added the new todo to our array of objects in our state, we set the state of value to an empty string "", just to clear it. 
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" 
        placeholder="Add todo"
        value={value} 
        // The input html component requires the prop of value -> which will store in itself the actual value to be submitted in our form. 
        onChange={(event) => setValue(event.target.value)}
        // The onChange prop checks when there has been a new submission in the text input box. When there is it will update our state of value to be that new input
        >
      </input>
    </form>
  )
}

export default TodoForm;