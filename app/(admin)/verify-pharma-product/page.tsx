import { getDrugs } from "app/api/action/getDrug"
import getPharmaContract from "app/api/action/getPharmaContract";

export default async function Page() {
    const items = await getDrugs()

    return (
        <div className="max-w-none px-4">
            {/* form start here, with border-bottom */}
            <div className="space-y-10 border-b border-gray-900/10 pb-12">
                {/* page title: heading 1. with a button (optionall) at the right */}
                <div className="flex justify-between">
                    <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
                        Verify Pharmaceutial Products</h1>
                </div>

                {/* body */}
                <div className="mt-8 grid w-full grid-cols-1 gap-6">
                    <div className="mt-8 flex h-full flex-col bg-white py-2">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {items &&
                                items.map((item) => (
                                    <li key={item.id} className="flex items-start py-6">
                                        <div className="w-full grid grid-cols-6 gap-x-4">
                                            {/* product image */}
                                            {/* <div className="col-span-2 h-32 w-32 rounded bg-gray-800/10"><img className="h-auto w-full object-cover object-center" src="" /></div> */}
                                            <div className="col-span-full flex flex-col overflow-clip pr-6">
                                                <p className="text-md font-semibold text-gray-800">
                                                    {item.name}
                                                </p>
                                                <p className="py-px text-xs text-gray-700">
                                                    <span className="bg-primary-50 text-primary-700 ring-primary-700/10 inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset">
                                                        registrationNo(item.id)
                                                    </span>
                                                </p>
                                                <p className="mt-1 text-xs text-gray-700">
                                                    <span className="text-gray-500">Active ingredient: </span>
                                                    <span> {item.activeIngredient}</span>
                                                </p>
                                                <p className="mt-1 text-xs text-gray-700">
                                                    <span className="text-gray-500">Dosage form: </span>
                                                    <span> {item.dosageForm}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}