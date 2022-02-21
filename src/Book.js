import React from "react";

const Book = (props) => {
  const { img, title, Author } = props;
  const clickHandler = function (e) {
    console.log(e);
    alert("hello");
  };
  const complex = function (auth) {
    console.log(auth);
  };
  return (
    <article className="book" onMouseOver={() => console.log(Author)}>
      <img src={img} alt="" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4 style={{ color: "black", fontSize: "0.9rem" }}>{Author}</h4>
      <button type="button" onClick={clickHandler}>
        Click me
      </button>
      <button type="button" onClick={() => complex(Author)}>
        More
      </button>
    </article>
  );
};

export default Book;
