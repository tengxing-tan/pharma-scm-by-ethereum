export default function ProductDescription() {

    return (
        <div>
            <div className="mb-4 flex h-auto w-full">
                <div className="items-left flex flex-col">
                    <p className="text-md font-semibold text-gray-800">Drug 1</p>
                    <p className="pb-1 text-xs text-gray-700">
                        MAL892146
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
                            <span className="text-gray-500">Active ingredient: </span>
                            <span> Paracetamol 500mg</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-700">
                            <span className="text-gray-500">Dosage form: </span>
                            <span> Tablet</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}