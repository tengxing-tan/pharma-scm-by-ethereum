'use server';

import { getAllDrugs } from '@/api/drug/getDrug';
import { SearchBar } from '#/ui/search-bar';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const items = await getAllDrugs();

  return (
    <div className="max-w-5xl">
      <div className="flex justify-between">
        <h1 className="pb-3 text-3xl font-bold  text-gray-700">
          Product Catalogue
        </h1>
      </div>

      <SearchBar />

      <div className="mt-8 flex h-full flex-col bg-white py-2">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {items &&
            items.map((item) => (
              <li key={item.id} className="flex items-start py-6">
                <div className="grid grid-cols-6 gap-x-4">
                  <div className="col-span-2 h-32 w-32 rounded bg-gray-800/10">
                    <img
                      className="h-auto w-full object-cover object-center"
                      src=""
                    />
                  </div>
                  <div className="col-span-4 flex flex-col overflow-clip pr-6">
                    <p className="text-md font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="pb-1 text-xs text-gray-700">
                      registration no from Blockchain
                      {
                        // item.isAuthentic ? (
                        true ? (
                          <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                            Verified
                          </span>
                        ) : (
                          <span className="ml-2 inline-flex items-center rounded-md bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-700/10">
                            Pending for approved
                          </span>
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
    </div>
  );
}
