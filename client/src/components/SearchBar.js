import React, { useEffect, useState, useRef } from "react";
import '../css/searchbar.css';
import { Redirect } from 'react-router-dom';

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);
    
  useEffect(() => {
    const getRooms = async () => {
        const data = await fetch('/api/cardrooms');
        const allRooms = await data.json();
        setOptions(allRooms);
    }
    getRooms()
  }, []);


  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateRooms = room => {
    setSearch(room);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <a key={i} href={`/cardrooms/${value.id}`} className="option-link">
                    <div
                        onClick={() => updateRooms(value.name)}
                        className="option"
                        key={i}
                        tabIndex="0"
                        id={value}
                        >
                    <span>{value.name}</span>
                    <span >{value.city.name}</span>
                    </div>
                </a>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SearchBar