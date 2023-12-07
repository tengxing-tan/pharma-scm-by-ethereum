import { Heading } from "app/_ui/heading";
import ProductDescription from "app/_ui/product-description";
import { getDrugBySearchKey } from "app/api/action/getDrug";
import Link from "next/link";

export default async function Page({ searchParams }: { searchParams: { type: string, searchKey: string } }) {
    const {
        type,
        searchKey
    } = searchParams;
    const result = await getDrugBySearchKey(type, searchKey);
    const TYPE = type === 'regNo' ? 'Registration no.' : type === 'productName' ? 'Product name' : 'Ingredient';

    return (
        <div className="max-w-5xl p-4 lg:px-6">
            <Heading heading="Supply Chain Overview" />
            <div className="pt-4 pb-8 text-gray-700">
                <p>Searching for "<span className="font-semibold">{searchKey}</span>" ({TYPE}).
                    There are {result !== null && result ? `${result.length} products found.` : 'Query error.'}
                </p>
            </div>
            <ul role="list" className="-my-6 divide-y divide-gray-200">
                {result && result.map((item) => (
                    <li key={item.id} className="pt-6">
                        <Link href={`search/${item.id}`}>
                            <ProductDescription props={{
                                drug: item,
                                owner: item.owner,
                                manufacturer: item.manufacturer?.info,
                            }} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
