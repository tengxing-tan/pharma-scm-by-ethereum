'use server';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="max-w-5xl p-4 lg:px-6">
      <div className="mb-4 flex justify-between">
        <h1 className="pb-3 text-3xl font-medium text-gray-600">
          Supply Chain Overview
        </h1>
      </div>
      <div className="mb-4 flex h-auto w-full">
        <div className="h-32 w-32 rounded bg-gray-800/10">
          <img className="h-auto w-full object-cover object-center" src="" />
        </div>
        <div className="items-left flex flex-col px-4">
          <p className="text-md font-semibold text-gray-800">item.name</p>
          <p className="pb-1 text-xs text-gray-700">
            registration no from Blockchain
            {true ? (
              <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                Verified
              </span>
            ) : (
              <span className="ml-2 inline-flex items-center rounded-md bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-700/10">
                Pending for approved
              </span>
            )}
          </p>
          <div className="mt-1 text-xs text-gray-700">
            <p className="mt-1 text-xs text-gray-700">
              <span className="text-gray-500">Batch no: </span>{' '}
              <span> item.batchNo</span>
            </p>
            <p className="mt-1 text-xs text-gray-700">
              <span className="text-gray-500">Active ingredient: </span>{' '}
              <span> item.activeIngredient</span>
            </p>
            <p className="mt-1 text-xs text-gray-700">
              <span className="text-gray-500">Dosage form: </span>{' '}
              <span> item.dosageForm</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-500/5 p-6">
        <h3 className="mb-6 w-full text-left text-xl font-bold text-gray-600">
          Manufacturing and Packaging
        </h3>
        <div className="grid w-full grid-cols-1 sm:grid-cols-5">
          <p className="text-primary-500 w-full p-2 font-bold sm:col-span-2 sm:pr-12 sm:text-right">
            *Oct 21, 2020
          </p>
          <div className="border-primary-500 border-l-2 px-6 py-4 sm:col-span-3">
            <p className="pb-2 text-lg font-semibold text-gray-600">
              *Product name
              <span className="text-base font-normal"> had registered</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Manufactured by:{' '}
              <span className="text-gray-800">*ABC Sdn Bhd</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Location: <span className="text-gray-800">*Malaysia</span>{' '}
            </p>
            <p className="text-sm font-medium text-gray-600">
              Company address:{' '}
              <span className="text-gray-800">*No 11 Jalan Alor.</span>{' '}
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 sm:grid-cols-5">
          <p className="text-primary-500 w-full p-2 font-bold sm:col-span-2 sm:pr-12 sm:text-right">
            *Oct 21, 2020
          </p>
          <div className="border-primary-500 border-l-2 px-6 py-4 sm:col-span-3">
            <p className="pb-2 text-lg font-semibold text-gray-600">
              *Product name
              <span className="text-base font-normal">
                {' '}
                had underwent mixing & encapsulation
              </span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Manufactured by:{' '}
              <span className="text-gray-800">*ABC Sdn Bhd</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Location: <span className="text-gray-800">*Malaysia</span>{' '}
            </p>
            <p className="text-sm font-medium text-gray-600">
              Company address:{' '}
              <span className="text-gray-800">*No 11 Jalan Alor.</span>{' '}
            </p>
          </div>
        </div>

        <h3 className="mb-6 w-full text-left text-xl font-bold text-gray-600">
          Importer
        </h3>
        <div className="grid w-full grid-cols-1 pb-4 sm:grid-cols-5">
          <p className="w-full p-2 font-bold text-amber-500 sm:col-span-2 sm:pr-12 sm:text-right">
            *Oct 21, 2020
          </p>
          <div className="border-l-2 border-amber-500 p-2 pl-6 sm:col-span-3">
            <p className="pb-2 text-lg font-semibold text-gray-600">
              *Product name
              <span className="text-base font-normal"> had shipped</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Shiped by: <span className="text-gray-800">*ABC Sdn Bhd</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              From:{' '}
              <span className="text-gray-800">
                *New York (address), *US(country)
              </span>{' '}
            </p>
            <p className="text-sm font-medium text-gray-600">
              To: <span className="text-gray-800">*Klang, *Malaysia</span>{' '}
            </p>
          </div>
        </div>

        <h3 className="mb-6 w-full text-left text-xl font-bold text-gray-600">
          Wholesaler
        </h3>
        <div className="grid w-full grid-cols-1 pb-4 sm:grid-cols-5">
          <p className="w-full p-2 font-bold text-emerald-500 sm:col-span-2 sm:pr-12 sm:text-right">
            *Oct 21, 2020
          </p>
          <div className="border-l-2 border-emerald-500 p-2 pl-6 sm:col-span-3">
            <p className="pb-2 text-lg font-semibold text-gray-600">
              *Product name
              <span className="text-base font-normal"> had stored</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Distributed by:{' '}
              <span className="text-gray-800">*ABC Sdn Bhd</span>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Location: <span className="text-gray-800">*Malaysia</span>{' '}
            </p>
            <p className="text-sm font-medium text-gray-600">
              Warehouse address:{' '}
              <span className="text-gray-800">*No 11 Jalan Alor.</span>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
