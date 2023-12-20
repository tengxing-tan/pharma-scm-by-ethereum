'use server';

import { getDrugsByOwner } from 'app/api/action/getDrug';
import { SearchBar } from 'app/_ui/search-bar';
import { Heading } from 'app/_ui/heading';
import { Badge } from 'app/_ui/badge';
import Link from 'next/link';
import { options } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {

  const session = await getServerSession(options)
  if (!session || !session.user?.email) {
    redirect(`/trace`)
  }
  const items = await getDrugsByOwner(session.user?.email)

  return (
    <div className="max-w-5xl">
      <Heading heading="Product Catalogue">
        <Link href="product-catalogue/create">
          <button className="whitespace-nowrap bg-indigo-500 text-white font-semibold rounded-lg px-4 py-1 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create</button>
        </Link>
      </Heading>
      <SearchBar />

      <p className="pt-4 text-sm text-gray-700">
        Showing {items.length} items.</p>

      <div className="mt-4 flex h-full flex-col bg-white py-2">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {items &&
            items.map((item) => (
              <li key={item.id} className="flex items-start py-6">
                <div className="grid grid-cols-6 gap-x-4">
                  <div className="col-span-4 flex flex-col overflow-clip pr-6">
                    <p className="text-md font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="pb-1 text-xs text-gray-700">
                      {item.registrationNo}
                      {
                        // item.isAuthentic ? (
                        true ? (
                          <span className="ml-2"><Badge text="Verified" color="green" /></span>
                        ) : (
                          <span className="ml-2"><Badge text="Not Verified" color="red" /></span>
                        )
                      }
                    </p>
                    <p className="mt-1 text-xs text-gray-700">
                      <span className="text-gray-500">Active ingredient: </span>{' '}
                      <span> ({item.activeIngredient})</span>
                    </p>
                    <p className="mt-1 text-xs text-gray-700">
                      <span className="text-gray-500">Dosage form: </span>{' '}
                      <span> ({item.dosageForm})</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div >
  );
}
