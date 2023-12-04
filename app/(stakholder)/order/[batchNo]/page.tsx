import { Heading } from 'app/_ui/heading';
import Form from '../_component/form';
import { getStakeholdersByRole } from "app/api/action/getStakeholder"
import { getDrugBatchByBatchNo } from 'app/api/action/getDrugBatch';

export default async function Page({ params, searchParams }: { params: { batchNo: string }, searchParams: { updated: string } }) {

    const drugBatch = await getDrugBatchByBatchNo(params.batchNo)
    const manufacturers = await getStakeholdersByRole("MANUFACTURER")
    const importers = await getStakeholdersByRole("IMPORTER")
    const wholesalers = await getStakeholdersByRole("WHOLESALER")

    return (
        <div className="max-w-none p-6">
            {searchParams.updated && searchParams.updated === 'ok' ? (
                <div className="bg-green-100 border border-green-400 text-green-700 absolute right-24 px-4 py-3 rounded mb-4" role="alert">
                    <span className="block sm:inline">Order updated successfully</span>
                </div>
            ) : null}
            <Heading heading={`Update Order ${params.batchNo}`} />

            <Form drugBatch={drugBatch} manufacturers={manufacturers} importers={importers} wholesalers={wholesalers} />
        </div>
    );
}
