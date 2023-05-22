import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries';
import { Link, useParams } from "react-router-dom";

export interface ICountry {
    code: string;
    name: string;
    emoji: string;
}

function Countries() {
    const { continentCode} = useParams();

    const { loading, error, data } = useQuery(GET_COUNTRIES, {
        variables: { continentCode }
    });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    const { countries } = data.continent;

    return (
        <div>
            <div className='grid grid-cols-4 mx-auto text-center'>
                {countries.map((country: ICountry) => (
                    <div className='p-2 m-2 border cursor-pointer hover:border-red-300 text-xl' key={country.code}>
                        <Link to={`/countries/${country.code}`}>
                            {country.name} {country.emoji}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Countries;