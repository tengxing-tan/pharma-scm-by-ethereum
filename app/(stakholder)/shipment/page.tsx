import { Heading } from "app/_ui/heading";
import { getShipments } from "app/api/action/getShipment";
import Link from "next/link";
import { STATUS } from "lib/enum";

export default async function Page() {
    const items = await getShipments()
    // console.log(items)

    return (
        <div className="max-w-none px-4">
            <Heading heading="Shipment" >
                <Link href="/shipmnet/create">
                    <button className="whitespace-nowrap bg-indigo-500 text-white font-semibold rounded-lg px-4 py-1 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create</button>
                </Link>
            </Heading>

            <div className="mt-8 py-2 flex h-full flex-col bg-white">
                {/* item list */}
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items && items.map((item) => (
                        <li key={item.id} className="flex items-start py-6">
                            <div className="ml-4 flex flex-1 flex-col">
                                <Link href={`shipment/${item.trackingNo}`} className="">
                                    {/* item */}
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <div>
                                            <h3 className="text-gray-700">{item.trackingNo}</h3>
                                            <div className="mt-1 space-y-1 text-sm text-gray-500">
                                                <p>Status: <span className="text-gray-700">
                                                    {STATUS[item.status]}</span></p>

                                            </div>
                                        </div>

                                        {/* arrow icon */}
                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}