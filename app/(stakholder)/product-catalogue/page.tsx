'use server';

import { getDrugs } from 'app/api/action/getDrug';
import { SearchBar } from 'app/_ui/search-bar';
import { Heading } from 'app/_ui/heading';
import { Badge } from 'app/_ui/badge';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const items = await getDrugs();

  return (
    <div className="max-w-5xl">
      <Heading heading="Product Catalogue" />
      <SearchBar />

      <div className="mt-8 flex h-full flex-col bg-white py-2">
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
