import { Heading } from 'app/_ui/heading';
import { createDrugBatch } from '../action';
import UserInput from 'app/_ui/user-input';
import { getDrugsByOwner } from 'app/api/action/getDrug';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ searchParams }: {
    searchParams: { created?: string }
}) {

    const session = await getServerSession()
    if (!session || !session.user?.email) {
        redirect(`/trace`)
    }
    const drugs = await getDrugsByOwner(session.user.email)

    return (
        <div className="max-w-none p-6">
            <form action={createDrugBatch}>
                <div className="space-y-12 border-b border-gray-900/10 pb-12">
                    <div className="m-0">
                        <Heading heading="Create Order" />
                        {searchParams.created ?
                            (
                                <div className="bg-green-300 w-fit rounded-md">
                                    <p className="px-3 py-2 font-medium text-gray-700 text-sm">
                                        👍 Create data successfully!  <Link href="/order" className="underline text-primary-500 font-semibold">
                                            View</Link>
                                    </p>
                                </div>
                            )
                            : null
                        }
                    </div>
                    {/* form section */}
                    <div className="mt-8 grid w-full grid-cols-1 gap-6">
                        {/* user input */}
                        <div className="w-full max-w-sm">
                            <label className="block pb-1 text-sm font-medium text-gray-700">
                                Registration No.
                                <span className="text-rose-500">*</span></label>
                            <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <select className="max-w-full block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                    name="registrationNo" required>

                                    <option value="">Select</option>
                                    {
                                        drugs.map((drug, i) => (
                                            <option key={i} value={drug.registrationNo}>{drug.registrationNo}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        {/* user input */}
                        <UserInput label="Bacth No." isRequired={true}
                            form={{
                                name: "batchNo",
                                value: "",
                                type: "text",
                            }} />
                        {/* user input */}
                        <UserInput label="Quantity" isRequired={true}
                            form={{
                                name: "quantity",
                                value: 0,
                                type: "number",
                                step: 1,
                                min: 0,
                            }} />
                        {/* user input */}
                        <UserInput label="Date of Manufacturing" isRequired={true}
                            form={{
                                name: "manufactureDate",
                                value: "",
                                type: "date",
                            }} />
                        {/* user input */}
                        <UserInput label="Expiry Date" isRequired={true}
                            form={{
                                name: "expiryDate",
                                value: "",
                                type: "date",
                            }} />
                    </div>
                </div>
                <div className="flex justify-start space-x-4 pt-6">
                    <button type="submit" className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset">
                        Submit
                    </button>
                </div>
            </form >
        </div >
    );
}
