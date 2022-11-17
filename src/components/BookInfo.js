import React from "react";

const BookInfo = (props) => {
    return (
      <div>
          <h3>{props.book.volumeInfo.title}</h3>
          <p>{props.book.volumeInfo.authors}</p>
      </div>
    )
}
export default BookInfo