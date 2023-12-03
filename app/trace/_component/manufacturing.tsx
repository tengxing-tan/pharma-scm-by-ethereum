import { Process } from 'lib/enum'
export default function Manufacturing({ manDate, manufacturer, stage }:
    {
        manDate: string,
        manufacturer: any,
        stage?: any
    }) {
    return (
        <div className="w-full">
            <div className="pb-4 grid w-full grid-cols-1 sm:grid-cols-5" >
                <p className="text-primary-500 w-full p-2 font-bold sm:col-span-2 sm:pr-12 sm:text-right">
                    On {manDate}</p>
                <div className="border-primary-500 border-l-2 px-6 py-2 sm:col-span-3">
                    <p className="pb-2 text-gray-600">
                        It was <span className="text-base font-semibold">Manufactured</span></p>
                    <p className="text-sm font-medium text-gray-600">
                        by <span className="text-gray-800 text-base capitalize">{manufacturer.info.name.toLowerCase()}</span></p>
                    <p className="text-sm font-medium text-gray-600">
                        at <span className="text-gray-800 text-base ">{manufacturer.info.country}</span></p>
                    <p className="text-sm font-medium text-gray-600">
                        Company address: <span className="text-gray-800 text-base">{manufacturer.info.address}</span></p>
                </div>
            </div>

            {
                stage && stage.map((item: any) => (
                    <div key={item.id} className="pb-4 grid w-full grid-cols-1 sm:grid-cols-5">
                        <p className="text-primary-500 w-full p-2 font-bold sm:col-span-2 sm:pr-12 sm:text-right">
                            On {item.date}</p>
                        <div className="border-primary-500 border-l-2 px-6 py-2 sm:col-span-3">
                            <p className="pb-2 text-gray-600">
                                It was <span className="text-base font-semibold">{Process[String(item.process)]}</span></p>
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
                        </div>
                    </div>
                ))
            }
        </div>
    )
}