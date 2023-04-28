import React, {
  ChangeEvent,
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import cities from "../services/cities.json";
import "./Search.scss";

interface SearchProps {
  handleClose: Dispatch<SetStateAction<boolean>>;
  setLocation: Dispatch<SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ handleClose, setLocation }) => {
  const [searchState, setSearchState] = useState<string>("");
  const [searchResults, setSearchResults] = useState<typeof cities>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.currentTarget.value);
  };

  const onSearchSelect = (
    location: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setLocation(location);
    handleClose(false);
  };

  useEffect(() => {
    if (searchState) {
      const searchResult = cities
        .filter((item) =>
          item.name.toLocaleLowerCase().includes(searchState.toLowerCase())
        )
        .slice(0, 5);
      console.log(searchResult);
      setSearchResults(searchResult);
    }
  }, [searchState]);

  return (
    <div className="search">
      <div onClick={() => handleClose(false)} className="search__close">
        &#x2715;
      </div>
      <input
        className="search__box"
        type="search"
        placeholder="Search Location"
        value={searchState}
        onChange={handleChange}
      ></input>
      <ul className="search__results">
        {searchResults &&
          searchResults.map((result) => {
            return (
              <li key={result.name} className="search__item">
                <a
                  onClick={(e) => onSearchSelect(result.name, e)}
                  href="#"
                  className="search__link"
                >
                  {result.name}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Search;
