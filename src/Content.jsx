import React from "react";
import { useState } from "react";
// trash icons
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
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
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems)
    // key-value pairs
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  };

  return (
    <main>
      {items.length ? (

        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />

              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>

              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
          </ul>
          ) :  (
            <p style={{ marginTop: '2rem' }}>Your list is empty faisal.</p>
          ) }
        
    </main>
  );
};

export default Content;
