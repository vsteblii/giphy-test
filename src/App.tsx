import React, { useEffect, useState, useRef, useCallback } from "react";
import "./App.css";
import Page from "./elements/page";
import Title from "./elements/title";
import { fetchGifs } from "./api/gifs";
import Search from "./components/search";
import { debounce } from "lodash";
import GifImage from "./components/gif";
import { Gif } from "./data/gifs";
import styled from "styled-components";

const GifsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: center;
`;

function App() {
  // todo we can add loading spiners or text...
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState<Gif[]>([]);
  const debouncedFunctionRef: { current: any } = useRef();
  debouncedFunctionRef.current = () => {
    fetchGifs(search).then((gifs: Gif[]) => {
      setGifs(gifs);
    });
  };

  const debouncedSearch = useCallback(
    debounce((...args) => debouncedFunctionRef.current(...args), 500),
    []
  );

  useEffect(() => {
    debouncedSearch();
  }, [search]);

  return (
    <div className="App">
      <Page>
        <Title>Giphy-pify</Title>
        <Search value={search} onSearch={setSearch} />
        <GifsContainer>
          {gifs.map((g) => {
            return (
              <GifImage
                key={g.id}
                url={g.images.fixed_height.url}
                title={g.title}
              />
            );
          })}
        </GifsContainer>
      </Page>
    </div>
  );
}

export default App;
