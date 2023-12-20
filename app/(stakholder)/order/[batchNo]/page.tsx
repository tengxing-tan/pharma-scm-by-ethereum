import Link from 'next/link';
import { Heading } from 'app/_ui/heading';
import UserInput from 'app/_ui/user-input';
import ShipmentProcess from '../_component/form-shipment-process';
import { getStakeholdersByRole } from "app/api/action/getStakeholder"
import { getDrugBatchByBatchNo } from 'app/api/action/getDrugBatch';
import { deleteDrugBatch, updateBasicDetails, updateShipmentProcess, updateStakeholder } from '../action';
import FormStakeholder from '../_component/form-stakeholder';

export default async function Page({ params, searchParams }: {
    params: { batchNo: string },
    searchParams: { updated?: string }
}) {

    const drugBatch = await getDrugBatchByBatchNo(params.batchNo)
    const importers = await getStakeholdersByRole("IMPORTER")
    const wholesalers = await getStakeholdersByRole("WHOLESALER")
    const stakeholders = {
        importers: importers,
        wholesalers: wholesalers
    }

    return (
        <div className="max-w-none p-6">
            <div>
                <Heading heading={`Update Order ${params.batchNo}`}>
                    <Link href="/order">
                        <button type="button" className="bg-gray-50 focus:ring-gray-300 hover:underline rounded-md px-6 py-3 text-sm  text-gray-500 shadow-sm focus:ring-1 focus:ring-inset">
                            Cancel
                        </button></Link>
                </Heading>
                <p className="text-primary-500 font-bold text-sm">
                    <Link href={`/trace/${params.batchNo}`} >See its supply chain overview 💊</Link></p>
            </div>
            <form action={updateBasicDetails}>
                <div className="space-y-12 border-b border-gray-900/10 pb-12">
                    {/* form section */}
                    <div className="mt-8 grid w-full grid-cols-1 gap-6">
                        <input name="batchId" type="hidden" value={drugBatch?.id && drugBatch.id.toString()} />

                        <UserInput
                            label="Quantity"
                            form={{ name: "quantity", value: drugBatch && drugBatch.quantity ? drugBatch.quantity.toString() : "Querying data...", type: "number", step: 1, min: 0 }}
                            isRequired={true} />
                        <UserInput
                            label="Date of Manufactured"
                            form={{ name: "manufactureDate", value: drugBatch && drugBatch.manufactureDate ? drugBatch.manufactureDate.toString() : "Querying data...", type: "date" }}
                            isRequired={true} />
                        <UserInput
                            label="Expiry Date"
                            form={{ name: "expiryDate", value: drugBatch && drugBatch.expiryDate ? drugBatch.expiryDate.toString() : "Querying data...", type: "date" }}
                            isRequired={true} />
                        <div className="w-fit flex space-x-4 justify-center">
                            <input className="capitalize whitespace-nowrap bg-primary-500 text-white rounded-md px-4 py-1 hover:bg-primary-600 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                type="submit" name="action" value="update basic details" />
                            {searchParams.updated && searchParams.updated === 'basicOk' ? (
                                <p className="p-2 text-gray-700 text-sm">👍 Update data successfully!</p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </form>
            <form action={updateShipmentProcess}>
                <input type="hidden" name="batchId" value={drugBatch?.id} />
                <div className="space-y-12 border-b border-gray-900/10 pb-12">
                    {/* form section */}
                    <div className="mt-8 grid w-full grid-cols-1 gap-6">
                        <ShipmentProcess />
                        <div className="w-fit flex space-x-4 justify-center">
                            <input className="capitalize whitespace-nowrap bg-primary-500 text-white rounded-md px-4 py-1 hover:bg-primary-600 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                type="submit" name="action" value="update" />
                            {searchParams.updated && searchParams.updated === 'shipmentOk' ? (
                                <p className="p-2 text-gray-700 text-sm">👍 Update data successfully!</p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </form>
            <form action={updateStakeholder}>
                <input type="hidden" name="batchId" value={drugBatch?.id} />
                <div className="space-y-12 border-b border-gray-900/10 pb-12">
                    {/* form section */}
                    <div className="mt-8 grid w-full grid-cols-1 gap-6">
                        {/* form sub section: stakeholder details */}
                        <h3 className="pt-6 text-gray-800 text-2xl font-semibold">
                            Stakeholder Details</h3>

                        {/* user input */}
                        <FormStakeholder props={{
                            label: "Importer",
                            name: "importerId",
                            stakeholders: stakeholders.importers
                        }} />
                        <FormStakeholder props={{
                            label: "Wholesaler",
                            name: "wholeSalerId",
                            stakeholders: stakeholders.wholesalers
                        }} />
                        <div className="w-fit flex space-x-4 justify-center">
                            <input className="capitalize whitespace-nowrap bg-primary-500 text-white rounded-md px-4 py-1 hover:bg-primary-600 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                type="submit" name="action" value="update stakeholder" />
                            {searchParams.updated && searchParams.updated === 'stakeholderOk' ? (
                                <p className="p-2 text-gray-700 text-sm">👍 Update data successfully!</p>
                            ) : null}
                        </div>
                    </div >
                </div >
            </form >

            {/* remove button */}
            <form action={deleteDrugBatch}>
                <input type="hidden" name="batchId" value={drugBatch?.id} />
                <div className="space-y-6 pt-6">
                    <p className="text-xl font-semibold text-gray-800">Dangerous Action</p>
                    <input className="capitalize whitespace-nowrap bg-rose-500 text-white font-semibold rounded-lg px-4 py-1 hover:bg-rose-600 focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        type="submit" name="action" value="remove" />
                </div>
            </form>
        </div >
    );
}
