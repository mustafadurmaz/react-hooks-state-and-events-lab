import React,{useState} from "react";

function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const itemClass = isOn ? "in-cart" : ""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={isOn ? "remove" : "add"}>{isOn ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
