import ScProcess from "./sc-process"

export default function ScOverview({ batch }: { batch: any }) {
    const manufacturer = batch.drug.manufacturer

    return (
        <div className="flex flex-col items-center justify-center bg-gray-500/5 p-6">
            {/* Phase 1: Manufacturing and Packaging */}
            <h3 className="mb-6 w-full text-left text-xl text-gray-600">
                Manufacturing and Packaging</h3>
            <ScProcess stakeholder={manufacturer} date={batch.manufactureDate} />

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

            {/* Phase 2: Import (optional) */}
            <h3 className="mb-6 w-full text-left text-xl text-gray-600">
                Import</h3>
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

            {/* Phase 3: Distribution & Warehousing (stakeholder: wholesaler) */}
            <h3 className="mb-6 w-full text-left text-xl text-gray-600">
                Distribution & Warehousing</h3>
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
    )
}