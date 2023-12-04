import { Processes } from "lib/enum"

export default function ScProcess({ phase, name }:
    {
        phase?: any,
        name: string
    }) {

    const color = (name === 'IMPORTER') ? 'amber' :
        (name) ? 'emerald' : 'gray'

    return (
        <div className="w-full">
            {
                phase.length !== 0 ? phase.map((item: any) => (
                    <div key={item.id} className="pb-4 grid w-full grid-cols-1 sm:grid-cols-5">
                        <p className={`text-${color}-500 w-full p-2 font-bold sm:col-span-2 sm:pr-12 sm:text-right`}>
                            On {item.date}</p>
                        <div className={`border-${color}-500 border-l-2 px-6 py-2 sm:col-span-3`}>
                            <p className="pb-2 text-gray-600">
                                It was <span className="text-base font-semibold">{Processes[String(item.process)]}</span></p>
                            {item.description ? (
                                <p className="text-sm font-medium text-gray-600">
                                    Description: <span className="text-gray-800 text-base">{item.description}</span></p>
                            ) : null}
                            <p className="text-sm font-medium text-gray-600">
                                by <span className="text-gray-800 text-base capitalize">stakeholer</span></p>
                            <p className="text-sm font-medium text-gray-600">
                                at <span className="text-gray-800 text-base ">{item.country}</span></p>
                            <p className="text-sm font-medium text-gray-600">
                                Company address: <span className="text-gray-800 text-base">{item.address}</span></p>
                            {item.toWhom ? (
                                <p className="pt-4 text-sm font-medium text-gray-600">
                                    to: <span className="text-gray-800 text-base capitalize">{item.toWhom.toLowerCase()}</span></p>
                            ) : null}
                            {item.toCountry ? (
                                <p className="text-sm font-medium text-gray-600">
                                    at: <span className="text-gray-800 text-base">{item.toCountry}</span></p>
                            ) : null}
                            {item.toAddress ? (
                                <p className="text-sm font-medium text-gray-600">
                                    Address: : <span className="text-gray-800 text-base">{item.toAddress}</span></p>
                            ) : null}
                        </div>
                    </div>
                )) : (
                    <div className="flex flex-col items-center justify-center bg-gray-500/5 p-6">
                        <p className="text-gray-600">No process yet</p>
                    </div>
                )
            }
        </div >
    )
}