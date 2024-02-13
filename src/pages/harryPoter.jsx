import React, { useEffect, useState } from "react";
import "./harry.css";

function HarryPoter() {
    const [infos, setInfos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/characters`)
            .then((res) => res.json())
            .then((data) => {
                setInfos(data);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="input-content">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                <div className="content">
                    <ul>
                        {infos
                            .filter((info) =>
                                info.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            )
                            .map((info, index) => (
                                <li key={index}>
                                    <span>{`Имя:    ${info.name}`}</span>
                                    <br />
                                    <span>{`Студент:    ${info.hogwartsStudent}`}</span>
                                    <br />
                                    <span>{`Дата рождения:    ${info.yearOfBirth}`}</span>
                                    <br />
                                    <span>{`Актер:    ${info.actor}`}</span>
                                    <br />
                                    {info.image.length === 0 ? (
                                        <img
                                            style={{
                                                maxWidth: 100,
                                                height: 130,
                                            }}
                                            src="https://miro.medium.com/v2/resize:fit:720/1*_ARzR7F_fff_KI14yMKBzw.png"
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            style={{
                                                maxWidth: "100px",
                                                height: "130px",
                                            }}
                                            src={info.image}
                                            alt=""
                                        />
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HarryPoter;
