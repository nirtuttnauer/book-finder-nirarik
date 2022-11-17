import React, {useEffect, useState} from 'react';
import "./Search.css"

const Search = ({username, search, SV, setSV, useFetch}) => {

    const handleInputChange = (event) => {
        if (shouldSearch){
            setSV(event.target.value)
        }

    }

    const shouldDisplayClear = SV.length > 0
    const shouldSearch = SV.length < 20

    const filteredProducts = search?.length && search.filter((product) => {
        return product;
    })


    return (

        <div >


            <div className={"banner"}>
                <h1>Welcome to BOOK.ly {username}!!</h1>
                <input type={"text"} placeholder="Looking for a book?" value={SV} onChange={handleInputChange}/>
                {shouldDisplayClear && <button onClick={useFetch}>Search</button>}

            </div>
            <div>
                <div>
                    {filteredProducts?.length && filteredProducts?.map((book) => {
                        return (
                            <div className={"item"} key={book.id}>
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors}</p>
                                <img src={book.volumeInfo?.imageLinks?.thumbnail}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>


)
}

export default Search;