import { Process } from '@prisma/client';
import { updateDrugBatch } from '../action';
import Link from 'next/link';
import { Processes } from 'lib/enum';
import FormRoleOptions from 'app/_ui/form-role';

export default function Form({
    drugBatch
}: {
    drugBatch: {
        id: number;
        drugId: number;
        batchNo: string;
        quantity: number | null;
        manufactureDate: string;
        expiryDate: string;
        wholesalerId: number | null;
        importerId: number | null;
        createdAt: Date;
    } | null | undefined
}) {

    return (
        <form action={updateDrugBatch}>
            <div className="space-y-12 border-b border-gray-900/10 pb-12">
                {/* form section */}
                <div className="mt-8 grid w-full grid-cols-1 gap-6">
                    <input name="batchId" type="hidden" value={drugBatch?.id && drugBatch.id.toString()} />
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Quantity
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="quantity" defaultValue={String(drugBatch?.quantity)} type="number" step={1} min={0} required />
                        </div>
                    </div>
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Date of Manufacture
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="manufactureDate" defaultValue={drugBatch?.manufactureDate} type="date" required />
                        </div>
                    </div>
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Expiry Date
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="expiryDate" defaultValue={drugBatch?.expiryDate} type="date" required />
                        </div>
                    </div>
                    {/* form sub section: shipment process */}
                    <h3 className="pt-6 border-t border-gray-900/10 text-gray-800 text-2xl font-semibold">
                        Update Shipment Process</h3>
                    {/* user input */}
                    <FormRoleOptions />
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Process
                            <span className="text-rose-500">*</span>
                            <div className="mt-1 focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <select name="role" className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 capitalize">
                                    {Object.values(Process).map((item) => (
                                        <option key={item} value={item} className="capitalize">{Processes[item]}</option>
                                    ))}
                                </select>
                            </div>
                        </label>
                    </div>

                    <div>
                        <p>importer, wholesaler</p>
                        <p>
                            stage
                            process
                            date
                            description String?
                            address     String?
                            country     String?

                            # for importer only
                            toWhom      String?
                            toCountry   String?
                            toAddress   String?</p>
                    </div>
                </div>
                {/* submit button */}
                <div className="flex justify-start space-x-4 pt-6">
                    <input className="whitespace-nowrap bg-indigo-500 text-white font-semibold rounded-lg px-4 py-1 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        type="submit" name="action" value="Submit" />
                    {/* <input className="bg-rose-500 focus:ring-rose-500 hover:bg-rose-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset"
                        type="submit" value="Remove" /> */}
                    <Link href="/order">
                        <button type="button" className="bg-gray-50 focus:ring-gray-300 hover:underline rounded-md px-6 py-3 text-sm  text-gray-500 shadow-sm focus:ring-1 focus:ring-inset">
                            Cancel
                        </button></Link>
                </div>
            </div>
        </form>
    );
}
