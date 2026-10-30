import { useState } from "react";

function ShowHideText() {
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
        <h1>REACT COMPONENTS</h1>
      <button onClick={toggle}>
        {isVisible ? "HideText" : "ShowText"}
      </button>

      {isVisible && <p>A Component is considered as the core building blocks of a React application. It makes the task of building UIs much easier. 
         Each component exists in the same space, but they work independently from one another and merge all in a parent component, which will be the final UI of your application.</p>}
    </div>
  );
}

export default ShowHideText;