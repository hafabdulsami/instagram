import React  from "react";
import "./storySection.css";

const storySection = (props) => {
  var result ={
    state:true,
    address:props.keys
  }
  const handleClick = (event) => {
    props.handleCallback(result);
    event.preventDefault();
  };
  return (
    <storysection>
      <div className="whole-story">
        <div
          className="outer-circle"
          id={props.n.types}
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={() => {}}
        >
          <div className="inner-circle">
            <img className="circle-profilepic" src={props.n.img} alt="hello" />
          </div>
        </div>
        <div className="story-name">{props.n.name}</div>
      </div>
    </storysection>
  );
};

export default storySection;
