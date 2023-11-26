import { Heading } from "app/_ui/heading";
import ProductDescription from "app/_ui/product-description";
import { getDrugBatchByBatchNo } from "app/api/action/getDrugBatch";
import ScOverview from "app/trace/_component/sc-overview";

export default async function Page({ params }: { params: { batchNo: string } }) {
    const data = await getDrugBatchByBatchNo(params.batchNo)
    const drug = data?.drug
    console.log(data)

    return (
        <div className="px-6">
            <Heading heading="Product Detail" />
            <div className="p-4 bg-gray-50 border-l-2 rounded-sm border-primary-500">
                <ProductDescription item={drug} />
            </div>

            <div className="pt-6">
                <Heading heading="Supply Chain Overview" />
                <ScOverview />
            </div>
        </div>
    )
}