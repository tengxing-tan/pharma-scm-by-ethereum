import { Heading } from 'app/_ui/heading';
import Form from '../_component/form';
import { getManufacturers } from 'app/api/action/getStakeholder';
import Link from 'next/link';

export default async function Page() {
    const manufacturers = await getManufacturers()

    return (
        <div className="max-w-none p-6">
            <Heading heading="Create Product" />
            <p className="px-4 py-2 max-w-lg text-gray-700 bg-primary-100 border-l-2 border-primary-500">
                Before adding a new product, please ensure the manufacturer is registered is the system. <Link href="/register" className="underline font-bold text-gray-700">
                    Register manufacturer</Link></p>
            <p className="px-4 py-2 max-w-lg text-gray-700 bg-gray-50 border-l-2 border-gray-500 mt-2">
                Then, provide the information of your registered pharmaceutical product.
                After submit this form, you need to wait for admin to approve.</p>

            <Form manufacturers={manufacturers} />
        </div >
    );
}