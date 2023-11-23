import { Heading } from 'app/_ui/heading';
import Form from '../_component/form';
import { getDrugBatchByBatchNo } from 'app/api/action/getDrugBatch';

export default async function Page({ params }: { params: { batchNo: string } }) {

    // const drugBatch = await getDrugBatchByBatchNo(params.batchNo)

    const drugBatch = await getDrugBatchByBatchNo(params.batchNo)

    return (
        <div className="max-w-none p-6">
            <Heading heading={`Update Order ${params.batchNo}`} />

            <Form drugBatch={drugBatch} />
        </div>
    );
}
