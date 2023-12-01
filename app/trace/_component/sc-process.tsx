export default function ScProcess({ stakeholder, date }: { stakeholder: any, date: string }) {
    return (
        <div className="grid w-full grid-cols-1 sm:grid-cols-5">
            <p className="text-primary-500 w-full p-2 font-bold sm:col-span-2 sm:pr-12 sm:text-right">
                {date}</p>
            <div className="border-primary-500 border-l-2 px-6 py-2 sm:col-span-3">
                <p className="pb-2 text-gray-600">
                    It was <span className="text-base font-semibold">manufactured</span></p>
                <p className="text-sm font-medium text-gray-600">
                    by <span className="text-gray-800 text-base capitalize">{stakeholder.info.name.toLowerCase()}</span></p>
                <p className="text-sm font-medium text-gray-600">
                    at <span className="text-gray-800 text-base ">{stakeholder.info.country}</span></p>
                <p className="text-sm font-medium text-gray-600">
                    Company address: <span className="text-gray-800 text-base">{stakeholder.info.address}</span></p>
            </div>
        </div>
    )
}