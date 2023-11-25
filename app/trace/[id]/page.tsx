import { Heading } from "app/_ui/heading";
import ProductDescription from "app/_ui/product-description";
import { getDrugById } from "app/api/action/getDrug";
import { getDrugBatchByDrugId } from "app/api/action/getDrugBatch";
import { STATUS } from "lib/enum";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const drug = await getDrugById(Number(params.id))
    const drugBatches = await getDrugBatchByDrugId(Number(params.id))

    return (
        <div className="px-6">
            <Heading heading="Product Detail" />
            <div className="p-4 bg-gray-50 border-l-2 rounded-sm border-primary-500">
                <ProductDescription item={drug} />
            </div>

            <div className="pt-6">
                <h3 className="text-2xl text-gray-800 font-bold py-4">Batches</h3>
                <p className="text-sm text-gray-700 pb-2">Showing {drugBatches ? drugBatches.length : '0'} rows.</p>
                <div className="grid grid-cols-3 font-semibold text-gray-700 pb-1 mb-6  border-b">
                    <p>Batch no.</p>
                    <p>Status</p>
                    <p>Date</p>
                </div>
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {drugBatches ? drugBatches.map((item) => (
                        <li key={item.id} className="grid grid-cols-3 py-2 text-gray-800">
                            <Link href={`trace/${item.id}`}>
                                <p className="font-mono hover:underline">{item.batchNo}</p>
                            </Link>
                            <p className="text-sm">{STATUS[item.shipment ? item.shipment.status : 'NONE']}</p>
                            <p className="text-sm">{item.createdAt.toLocaleDateString()}</p>
                        </li>
                    )) :
                        <li className="py-12 text-center text-gray-700">No batches yet.</li>}
                </ul>
            </div>
        </div>
    )
} 