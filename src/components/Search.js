import React from 'react'

const Search = ( {search, changeHandler} ) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" name="search" value={search} onChange={(e) => changeHandler(e)}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
