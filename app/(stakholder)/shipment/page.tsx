import ProductDescription from "./_components/product-description";

export default function Page() {

    return (
        <div className="max-w-none px-4">
            {/* form start here, with border-bottom */}
            <div className="space-y-10 border-b border-gray-900/10 pb-12">
                {/* page title: heading 1. with a button (optionall) at the right */}
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Update Shipment Status</h1>
                </div>

                {/* body */}
                <div className="mt-8 grid w-full grid-cols-1 gap-6">
                    <ProductDescription />

                    <div className="w-full max-w-lg">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Batch no.
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input
                                className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="batchNo" type="text" required
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-lg">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Tracking no.
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input
                                className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="trackingNo" type="text" required
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-lg">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Status
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input
                                className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="status" type="text" required
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start space-x-4 pt-6">
                <button
                    type="submit"
                    className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset">
                    Submit</button>
            </div>
        </div>
    )
}