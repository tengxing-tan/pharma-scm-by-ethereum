'use client'
export default function FormStakeholder({ props }: {
    props: {
        label: string,
        name: string,
        stakeholders: any,
    }
}) {
    return (
        <div className="w-full max-w-sm">
            <label className="block text-sm font-medium text-gray-700 capitalize">
                {props.label}
                {/* <span className="text-rose-500">*</span> */}
                <div className="mt-1 focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                    <select className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 capitalize"
                        name={props.name}>
                        <option key="0" value="">Select</option>

                        {props.stakeholders && props.stakeholders.map((item: any) => (
                            <option key={item.id} value={item.id} className="capitalize">
                                {item.info.name.toLowerCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </label>
        </div>
    )
}