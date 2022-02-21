import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./Books";
import SpecificBook from "./Book";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map(function (n) {
        return <SpecificBook key={n.id} {...n}></SpecificBook>;
      })}
    </section>
  );
};

// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h2", {}, "hello"));
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
