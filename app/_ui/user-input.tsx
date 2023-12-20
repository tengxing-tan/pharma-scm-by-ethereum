export default function UserInput({ label, form, isRequired }: {
    label: string,
    form: {
        name: string,
        value: string | number,
        type: string,
        step?: number,
        min?: number,
    },
    isRequired: boolean
}) {
    return (
        <div className="w-full max-w-sm">
            <label className="block text-sm font-medium text-gray-700">
                {label}
                {isRequired ? (<span className="text-rose-500">*</span>) : null}
                <div className="focus-within:ring-primary-500 mt-1 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                    <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                        name={form.name} defaultValue={form.value} type={form.type} required={isRequired} />
                </div>
            </label>
        </div>
    )
}