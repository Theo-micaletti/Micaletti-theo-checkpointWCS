import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_COUNTRIES } from '../graphql/queries';

interface ICountries {
    code: string;
    name: string;
}

function Countries() {
    const { data } = useQuery(GET_COUNTRIES);

    const countries = data.countries;

    return (
        <div>
            <h1>Countries</h1>
            <ul>
                {countries.map((country: ICountries) => (
                    <li key={country.code}>
                        <Link to={`/countries/${country.code}`}>{country.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Countries;