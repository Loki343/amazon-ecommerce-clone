"use client";
import SingleProduct from '@/components/SingleProduct'
import { useSupabase } from '@/lib/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const { id } = useParams();
    const { singleProduct, getSingleProduct } = useSupabase();

    useEffect(() => {
        getSingleProduct(+(id));
    }, []);

    return (
        <div>
            <SingleProduct singleProduct={singleProduct} />
        </div>
    )
}

export default page;
