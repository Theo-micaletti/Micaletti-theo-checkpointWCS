import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_CONTINENTS } from '../graphql/queries';

interface IContinent {
    code: string;
    name: string;
}

function Continents() {
    const { data } = useQuery(GET_CONTINENTS);

    const continents = data.continents;

    return (
        <div>
            <h1>Continents</h1>
            <ul>
                {continents.map((continent: IContinent) => (
                    <li key={continent.code}>
                        <Link to={`/continents/${continent.code}`}>{continent.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Continents;