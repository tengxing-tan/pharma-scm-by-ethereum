'use server';

import { Heading } from "app/_ui/heading";
import ProductDescription from "app/_ui/product-description";
import { getDrugBySearchKey } from "app/api/action/getDrug";
import Link from "next/link";

export default async function Page({ searchParams }: { searchParams: { type: string, searchKey: string } }) {
  const {
    type,
    searchKey
  } = searchParams;
  const result = await getDrugBySearchKey(type, searchKey);
  console.log(result)

  return (
    <div className="max-w-5xl p-4 lg:px-6">
      <Heading heading="Supply Chain Overview" />
      <div className="pt-4 pb-8 text-gray-700">
        <p>Searching for "<span className="font-semibold">{searchKey}</span>" ({type}). There are {result !== null && result ? `${result.length} products found.` : 'Query error.'}</p>
      </div>
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {result && result.map((item) => (
          <Link href={`trace/${item.id}`}>
            <li key={item.id} className="flex items-center justify-between pt-6">
              <ProductDescription item={item} />

              {/* arrow icon */}
              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
