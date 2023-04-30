import {
  ChangeEvent,
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import block from "bem-css-modules";

import cities from "../services/cities.json";

import s from "./Search.module.scss";
const b = block(s);

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
  setLocation: Dispatch<SetStateAction<string>>;
}

const Search: FC<Props> = ({ handleClose, setLocation }) => {
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
    <div className={b()}>
      <div onClick={() => handleClose(false)} className={b("close")}>
        &#x2715;
      </div>
      <input
        className={b("box")}
        type="search"
        placeholder="Search Location"
        value={searchState}
        onChange={handleChange}
      ></input>
      <ul className={b("results")}>
        {searchResults &&
          searchResults.map((result) => {
            return (
              <li key={result.name} className={b("item")}>
                <a
                  onClick={(e) => onSearchSelect(result.name, e)}
                  href="#"
                  className={b("link")}
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
