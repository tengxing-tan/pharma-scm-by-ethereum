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
    if (!drugBatch || !drug) {
        throw new Error("Drug batch not found")
    }

    let owner, manufacturer, importer, wholesaler
    if (drug.ownerId) {
        owner = await getStakeholderById(drug.ownerId)
    }
    if (drug.manufacturerId) {
        manufacturer = await getStakeholderByManufacturerId(drug.manufacturerId)
    }
    // if (drugBatch.importerId) {
    //     importer = await getStakeholderByImporterId(drugBatch.importerId)
    // }
    // if (drugBatch.wholesalerId) {
    //     wholesaler = await getStakeholderByWholesalerId(drugBatch.wholesalerId)
    // }
    importer = (drugBatch.importerId)
        ? await getStakeholderByImporterId(drugBatch.importerId)
        : null
    importer = (drugBatch.wholesalerId)
        ? await getStakeholderByImporterId(drugBatch.wholesalerId)
        : null
    const activities = await getActivitiesByBatchId(drugBatch.id)

    return (
        <div className="px-6 w-full max-w-3xl">
            <Heading heading="Product Detail" />
            {owner ? (
                <div className="p-4 bg-gray-50 border-l-2 rounded-sm border-primary-500">
                    <ProductDescription props={{
                        drug: drug,
                        owner: owner,
                        manufacturer: manufacturer,
                    }} />
                </div>
            ) : null}

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
