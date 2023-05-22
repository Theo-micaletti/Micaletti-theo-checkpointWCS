import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../graphql/queries";

function Country() {
    const { countryCode} = useParams();

    const { loading, error, data } = useQuery(GET_COUNTRY, {
        variables: { countryCode }
    });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    const { country } = data;

    return (
        <div>
            <div className='flex justify-center flex-col items-center mt-[20%] text-3xl'>
                <h1 className='font-bold m-4'>{country.name} {country.emoji}</h1>
                <p className='m-4'>La monnaie du paye est : {country.currency}</p>
                <p className='m-4'>Le paye a pour capitale : {country.capital}</p>
            </div>
        </div>
    );
}

export default Country;