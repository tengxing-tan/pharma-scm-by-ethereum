import { Heading } from "app/_ui/heading";
import Form from "../_components/form";
import { getShipmentByTrackingNo } from "app/api/action/getShipment";
import DrugBatches from "../_components/drug-batches";

export default async function Page({ params }: { params: { trackingNo: string } }) {

    const shipment = await getShipmentByTrackingNo(params.trackingNo)
    const drugBatches = shipment && shipment.drugBatches

    return (
        <div className="max-w-none px-4">
            <Heading heading={`Update ${params.trackingNo}`} />
            <Form shipment={shipment} />
            <div className="">
                <h3 className="mt-12 border-t border-t-gray-300 pt-3 text-xl font-semibold text-gray-700">
                    Order details
                    <span> ({drugBatches.length})</span></h3>
                <DrugBatches drugBatches={drugBatches} />
            </div>
        </div>
    )
}