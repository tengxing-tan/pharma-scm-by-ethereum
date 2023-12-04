import { Role } from "@prisma/client"

export default function FormRoleOptions() {

    return (
        <div className="w-full max-w-sm">
            <label className="block pb-1 text-sm font-medium text-gray-700">
                Stage
                <span className="text-rose-500">*</span>
                <div className="mt-1 focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                    <select name="role" className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 capitalize">
                        {Object.values(Role).map((item) => (
                            <option key={item} value={item} className="capitalize">{item.toLowerCase()}</option>
                        ))}
                    </select>
                </div>
            </label>
        </div>
    )
}