import { Drug, Stakeholder } from "@prisma/client";

export default function ProductDescription({ props }: {
    props: {
        drug: Drug | null | undefined,
        owner: Stakeholder | null | undefined,
        manufacturer: Stakeholder | null | undefined,
    }
}) {
    return (
        <div>
            <div className="mb-4 flex h-auto w-full">
                <div className="items-left flex flex-col">
                    <p className="text-md font-semibold text-gray-800 capitalize pb-2">{props.drug.name.toLowerCase()}</p>
                    <p className="pb-1 text-sm text-gray-700">
                        <span className="font-mono bg-gray-100 px-2 py-px font-medium">{props.drug.registrationNo}</span>
                        {true ? (
                            <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-0.5 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                                Verified
                            </span>
                        ) : (
                            <span className="ml-2 inline-flex items-center rounded-md bg-rose-50 px-2 py-0.5 text-sm font-medium text-rose-700 ring-1 ring-inset ring-rose-700/10">
                                Pending for approved
                            </span>
                        )}
                    </p>
                    <div className="mt-1 text-sm text-gray-700">
                        <p className="mt-1 text-xs text-gray-700">
                            <span className="text-gray-500">Active ingredient: </span>
                            <span className="text-base capitalize"> {props.drug.activeIngredient.toLowerCase()}</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-700">
                            <span className="text-gray-500">Dosage form: </span>
                            <span className="text-sm"> {props.drug.dosageForm}</span>
                        </p>
                    </div>
                    <div className="mt-1 text-sm text-gray-700">
                        <p className="mt-1 text-xs text-gray-700">
                            <span className="text-gray-500">Holder: </span>
                            <span className="text-sm capitalize"> {props.owner ? `${props.owner.name.toLowerCase()} (${props.owner.country})` : "-"}</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-700">
                            <span className="text-gray-500">Holder Address: </span>
                            <span className="text-sm capitalize"> {props.owner?.address ? `${props.owner.address}, ${props.owner.postcode}, ${props.owner.state}` : "Not provided"}</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-700">
                            <span className="text-gray-500">Registered on: </span>
                            <span className="text-sm capitalize"> {props.drug ? props.drug.createdAt.toUTCString().slice(4, 16) : "-"}</span>
                        </p>
                    </div>
                    <div className="mt-1 text-sm text-gray-700">
                        <p className="mt-1 text-xs text-gray-700">
                            <span className="text-gray-500">Manufacturer: </span>
                            <span className="text-sm capitalize"> {props.manufacturer ? `${props.manufacturer.name.toLowerCase()} (${props.manufacturer.country})` : "-"}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
