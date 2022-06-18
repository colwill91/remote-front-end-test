import React, { useState, useEffect } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { propertyApi } from '../../api/propertyApi'



const PropertyListing = () => {
    const [properties, setProperties] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ hasError, setHasError ] = useState(null);

    useEffect(() => {
        propertyApi().then(res => {
            if(res === 'error'){
                setHasError(true)
            } else {
                setProperties(res)
                setLoading(false)
            }
        })
    }, []);
    
    return (
        <div role="list" className="PropertyListing">
            {properties.length && (
                <>
                {
                    properties.map((property, index) => <PropertyCard key={index} {...property} />)
                }
                </>
            )}
             {loading && (
                <p>Loading...</p>
            )}
            {!loading && hasError && (
                <div>Error</div>
            )}
        </div>
    )
};

export default PropertyListing;
