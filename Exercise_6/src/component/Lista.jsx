import React from "react";
import RickAndMortyService from '../service/RickAndMorty.service';
import { useEffect } from "react";
import { useState } from "react";

export const Lista = () => {
   
    var [characters, setCharacters] = useState([]);

    useEffect(() => {
      RickAndMortyService.getAllCharacters()
        .then((data) => setCharacters(data.results))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {characters.map((character) => (
                        <h1>
                            {"hola " + character.name}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
}