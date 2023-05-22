import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_CONTINENTS } from '../graphql/queries';

interface IContinent {
    code: string;
    name: string;
}

function Continents() {
    const { loading, error, data } = useQuery(GET_CONTINENTS);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    const continents = data.continents;

    return (
        <div>
            <h1 className='text-center text-3xl mt-16 font-bold'>🌍 Les continents du monde 🌍</h1>
            <div className='flex items-center justify-center mt-16'>
                {continents.map((continent: IContinent) => (
                    <div className='text-xl m-5 border-2 p-2 hover:border-red-400 cursor-pointer' key={continent.code}>
                        <Link to={`/continents/${continent.code}`}>{continent.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Continents;