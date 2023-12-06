'use client'
import { Role } from '@prisma/client'
import UserInput from 'app/_ui/user-input'
import FormProcessOption from './form-process'

export default function ShipmentProcess() {

    const getToday = () => new Date().toISOString().slice(0, 10)

    return (
        <>
            {/* form sub section: shipment process */}
            <h3 className="pt-6 text-gray-800 text-2xl font-semibold">
                Update Shipment Process</h3>

            {/* user input */}
            <div className="w-full max-w-sm">
                <label className="block pb-1 text-sm font-medium text-gray-700">
                    Stage
                    <span className="text-rose-500">*</span>
                    <div className="mt-1 focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                        <select required name="stage" className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 capitalize">
                            {Object.values(Role).map((item) => (
                                <option key={item} value={item}>{item.toLowerCase()}</option>
                            ))}
                        </select>
                    </div>
                </label>
            </div>

            {/* user input */}
            <FormProcessOption />

            <UserInput
                label="Short Description"
                form={{ name: "description", value: "", type: "text" }}
                isRequired={false} />
            <UserInput
                label="Date"
                form={{ name: "date", value: getToday(), type: "date" }}
                isRequired={true} />
            {/* user input */}
            <p className="text-sm text-gray-700 font-medium bg-gray-500/10 border-l-2 border-primary-500 p-2 max-w-sm">
                For shipment process, please provide buyer details.</p>
            <UserInput
                label="Company Name"
                form={{ name: "company", value: "", type: "text" }}
                isRequired={false} />
            <UserInput
                label="Country"
                form={{ name: "country", value: "", type: "text" }}
                isRequired={false} />
            <UserInput
                label="Address"
                form={{ name: "address", value: "", type: "text" }}
                isRequired={false} />
        </>
    )
}