'use client'

import Link from 'next/link';
import { useState } from 'react';

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        registerNo: 'MAL12345',
        price: 'RM90.00',
        activeIngredients: 'active ingredients',
        indications: 'indications',
        contradictions: 'contradictions',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    },
    {
        id: 2,
        name: 'Throwback Hip Bag',
        href: '#',
        registerNo: 'MAL12345',
        price: '$90.00',
        activeIngredients: 'active ingredients',
        indications: 'indications',
        contradictions: 'contradictions',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    },
    // More products...
]

export default function Page({ params, searchParams }) {

    return (
        <div className="max-w-none">
            <div className="flex justify-between">
                <h1 className="text-gray-700 text-2xl font-bold">Product Catalogue</h1>
                <div className="self-start">
                    <Link href="/product-catalogue/create">
                        <button
                            onClick={null}
                            className="whitespace-nowrap bg-indigo-500 text-white font-semibold rounded-lg px-4 py-1 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Create
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-8 py-2 flex h-full flex-col bg-white">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {products.map((product) => (
                        <li key={product.id} className="flex items-start py-6">
                            <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-auto w-full object-cover object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <Link href={product.href}
                                    className="">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3 className="text-gray-700">{product.name}</h3>
                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">Active ingredients:  <span className="text-gray-700">{product.activeIngredients}</span></p>
                                        <p className="mt-1 text-sm text-gray-500">Indications:  <span className="text-gray-700">{product.indications}</span></p>
                                        <p className="mt-1 text-sm text-gray-500">Unit price:  <span className="text-gray-700">{product.price}</span></p>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}