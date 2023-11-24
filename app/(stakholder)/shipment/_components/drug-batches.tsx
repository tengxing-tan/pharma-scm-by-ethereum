export default function DrugBatches({ drugBatches }: { drugBatches?: any[] }) {

    return (
        <div>
            {/* item list */}
            <ul role="list" className="grid grid-cols-3 gap-6">
                {drugBatches && drugBatches.map((drugBatch) => (
                    <li key={drugBatch.id} className="flex items-start py-6">
                        <div className="text-sm border rounded p-4">
                            <p className="pb-1 text-base font-semibold text-gray-700">{drugBatch.drug.name}</p>
                            <p>Batch no: <span className="text-gray-800 font-mono bg-gray-50 px-1">
                                {drugBatch.batchNo}</span></p>
                            <p>Quantity: <span className="text-gray-700">
                                {drugBatch.quantity}</span></p>
                            <p>MFG: <span className="text-gray-700">
                                {drugBatch.manufactureDate}</span></p>
                            <p>EXP: <span className="text-gray-700">
                                {drugBatch.expiryDate}</span></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}