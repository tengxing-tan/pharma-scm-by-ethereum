import { DrugBatch, ProductStatus, Stakeholder } from "@prisma/client"
import Manufacturing from "./manufacturing"
import ScProcess from "./sc-process"

export default function ScOverview({ props }: {
    props: {
        drugBatch: DrugBatch | null | undefined,
        manufacturer: Stakeholder | null | undefined,
        importer: Stakeholder | null | undefined,
        wholesaler: Stakeholder | null | undefined,
        activities: ProductStatus[] | null | undefined,
    }
}) {

    if (!props.activities || typeof props.activities === "undefined"
        || !props.drugBatch || typeof props.drugBatch === "undefined"
        || !props.manufacturer || typeof props.manufacturer === "undefined") {
        return <div>loading...</div>
    }

    const manStage = props.activities.filter((item: any) => (item.stage === 'MANUFACTURER'))
    const impStage = props.activities.filter((item: any) => (item.stage === 'IMPORTER'))
    const whoStage = props.activities.filter((item: any) => (item.stage === 'WHOLESALER'))

    return (
        <div className="flex flex-col items-center justify-center bg-gray-500/5 p-6">
            {/* Phase 1: Manufacturing and Packaging */}
            <h3 className="mb-6 w-full text-center text-xl text-gray-600">
                Manufacturing and Packaging</h3>
            <Manufacturing
                manDate={props.drugBatch?.manufactureDate}
                manufacturer={props.manufacturer}
                stage={manStage} />

            {/* Phase 2: Import (optional) */}
            <h3 className="mt-12 mb-6 w-full text-center text-xl text-gray-600">
                Import</h3>
            <ScProcess props={{
                stakeholder: props.importer,
                phase: impStage,
                color: String("amber")
            }} />

            {/* Phase 3: Distribution & Warehousing (stakeholder: wholesaler) */}
            <h3 className="mt-12 mb-6 w-full text-center text-xl text-gray-600">
                Distribution & Warehousing</h3>
            <ScProcess props={{
                stakeholder: props.wholesaler,
                phase: whoStage,
                color: String("emerald")
            }} />
        </div>
    )
}