import { Heading } from "app/_ui/heading";
import ProductDescription from "app/_ui/product-description";
import ScOverview from "app/trace/_component/sc-overview";
import { getDrugById } from "app/api/action/getDrug";
import { getDrugBatchByBatchNo } from "app/api/action/getDrugBatch";
import { getStakeholderById, getStakeholderByImporterId, getStakeholderByManufacturerId, getStakeholderByWholesalerId } from "app/api/action/getStakeholder";
import { getActivitiesByBatchId } from "app/api/action/getActivities";

export default async function Page({ params }: {
    params: { batchNo: string }
}) {

    const drugBatch = await getDrugBatchByBatchNo(params.batchNo)
    const drug = await getDrugById(Number(drugBatch?.drugId))
    const owner = await getStakeholderById(Number(drug?.ownerId))
    const manufacturer = await getStakeholderByManufacturerId(Number(drug?.manufacturerId))
    const importer = await getStakeholderByImporterId(Number(drugBatch?.importerId))
    const wholesaler = await getStakeholderByWholesalerId(Number(drugBatch?.wholesalerId))
    const activities = await getActivitiesByBatchId(Number(drugBatch?.id))

    return (
        <div className="px-6 w-full max-w-3xl">
            <Heading heading="Product Detail" />
            <div className="p-4 bg-gray-50 border-l-2 rounded-sm border-primary-500">
                <ProductDescription props={{
                    drug: drug,
                    owner: owner,
                    manufacturer: manufacturer,
                }} />
            </div>

            <div className="pt-6">
                <h2 className="py-4 text-3xl text-gray-800">Supply Chain Overview</h2>
                <ScOverview props={{
                    drugBatch: drugBatch,
                    manufacturer: manufacturer,
                    importer: importer,
                    wholesaler: wholesaler,
                    activities: activities
                }} />
            </div>
        </div>
    )
}
