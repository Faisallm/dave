import "./App.css";
import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

// mordern react use functional component.
// no more class components.

function App() {
  // a state of the component
  // a component can have  multiple states  of different types
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);
  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const myNewItem = { id, checked: false, item };
    // adding my new items to the original list of items
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if newItem is empty
    if (!newItem) return;
    console.log(newItem);
    // logic here to do something to the input

    // clear state after submission
    setNewItem("");
  };

  const handleCheck = (id) => {
    // we don't want to change the state directly.
    // create the new state object
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // change the state
    setItems(listItems);

    // it is actually not changing the default state of the app
    // for that we need localStorage
    // localstorage are key value pairs
    // just like redis
    // so that we can retrieve our groceries list even
    // after refreshing the website
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  // defining a function inside a functional component

  const handleDelete = (id) => {
    // it's going to create a new array where...
    // it contains items not equal to the argument id
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    // key-value pairs
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  // i can declare variables
  const name = "Faisal";
  // jsx renders data as text
  // we can't render objects to the page with react
  // boolean does not get rendered on the page
  // const bol  = true;

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

// we can't render objects and booleans in jsx

export default App;
