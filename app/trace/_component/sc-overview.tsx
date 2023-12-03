import Manufacturing from "./manufacturing"
import ScProcess from "./sc-process"


export default function ScOverview({ batch }: { batch: any }) {
    const manufacturer = batch.drug.manufacturer
    const status = batch.status
    const manStage = status.filter((item: any) => (item.stage === 'MANUFACTURER'))
    const impStage = status.filter((item: any) => (item.stage === 'IMPORTER'))
    const whoStage = status.filter((item: any) => (item.stage === 'WHOLESALER'))
    console.log("manufacturing: ", manStage)
    console.log("importing: ", impStage)
    console.log("distribution & warehousing: ", whoStage)

    return (
        <div className="flex flex-col items-center justify-center bg-gray-500/5 p-6">
            {/* Phase 1: Manufacturing and Packaging */}
            <h3 className="mb-6 w-full text-left text-xl text-gray-600">
                Manufacturing and Packaging</h3>
            <Manufacturing manDate={batch.manufactureDate} manufacturer={manufacturer} stage={manStage} />

            {/* Phase 2: Import (optional) */}
            <h3 className="mb-6 w-full text-left text-xl text-gray-600">
                Import</h3>
            <ScProcess phase={impStage} name="IMPORTER" />

            {/* Phase 3: Distribution & Warehousing (stakeholder: wholesaler) */}
            <h3 className="mb-6 w-full text-left text-xl text-gray-600">
                Distribution & Warehousing</h3>
            <ScProcess phase={whoStage} name="WHOSALER" />
        </div>
    )
}