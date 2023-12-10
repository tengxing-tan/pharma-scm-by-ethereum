import { PrismaClient } from "@prisma/client";

export async function drugSeeder(prisma: PrismaClient) {

    try {
        // Seed Drugs
        for (let index = 0; index < 8; index++) {
            await prisma.drug.create({
                data: {
                    name: String(IbuprofenProducts[index]['name']).toUpperCase(),
                    registrationNo: String(IbuprofenProducts[index]['registrationNo']),
                    activeIngredient: 'IBUPROFEN',
                    dosageForm: String(dosageForms[index % 8]),
                    ownerId: "peter",
                    manufacturerId: "ranbaxy",
                },
            });
        }
        for (let index = 0; index < 5; index++) {
            await prisma.drug.create({
                data: {
                    name: String(AcetaminophenProducts[index]['name']),
                    registrationNo: String(AcetaminophenProducts[index]['registrationNo']),
                    activeIngredient: 'ACETAMINOPHEN (PARACETAMOL)',
                    dosageForm: String(dosageForms[index % 8]),
                    ownerId: "peter",
                    manufacturerId: "ranbaxy",
                },
            });
        }
        for (let index = 0; index < 9; index++) {
            await prisma.drug.create({
                data: {
                    name: String(HydrochlorothiazideProducts[index]['name']),
                    registrationNo: String(HydrochlorothiazideProducts[index]['registrationNo']),
                    activeIngredient: 'HYDROCHLOROTHIAZIDE',
                    dosageForm: String(dosageForms[index % 8]),
                    ownerId: "peter",
                    manufacturerId: "ranbaxy",
                },
            });
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

const dosageForms = ["Tablet", "Capsule", "Liquid Suspension", "Injection", "Drops", "Inhaler", "Lotion", "Gel"];

const HydrochlorothiazideProducts = [
    { name: "STARVAL HCT TABLETS 80 + 12.5 mg", registrationNo: "MAL11115008AZ", holder: "RANBAXY (MALAYSIA) SDN. BHD." },
    { name: "STARVAL HCT TABLETS 160 + 25 mg", registrationNo: "MAL11115009AZ", holder: "RANBAXY (MALAYSIA) SDN. BHD." },
    { name: "IRBEL HCT TABLETS 150 + 12.5 mg", registrationNo: "MAL12115057AZ", holder: "RANBAXY (MALAYSIA) SDN. BHD." },
    { name: "IRBEL HCT TABLETS 300 + 12.5 mg", registrationNo: "MAL12115058AZ", holder: "RANBAXY (MALAYSIA) SDN. BHD." },
    { name: "IRBEL HCT TABLETS 300 + 25 mg", registrationNo: "MAL15085026AZ", holder: "RANBAXY (MALAYSIA) SDN. BHD." },
    { name: "Zosaar HCT Tablets", registrationNo: "MAL16045051ACZ", holder: "Abio Marketing Sdn Bhd" },
    { name: "VALZAAR H TABLETS (160 MG + 12.5 MG)", registrationNo: "MAL17107011AZ", holder: "LABORATORIES TORRENT (MALAYSIA) SDN. BHD." },
    { name: "Acetan HCT Tablet 50/12.5mg", registrationNo: "MAL12085071AZ", holder: "Duopharma Marketing Sdn. Bhd." },
    { name: "Acetan HCT Tablet 100mg/25mg", registrationNo: "MAL12085072AZ", holder: "Duopharma Marketing Sdn. Bhd." },
]

const AcetaminophenProducts = [
    { name: 'ULTRACET TABLET', registrationNo: 'MAL20051462AZ', holder: 'JOHNSON & JOHNSON SDN BHD' },
    { name: 'Lotemp Kids Suspension 120mg/5ml', registrationNo: 'MAL19116027XZ', holder: 'MEDISPEC(M) SDN.BHD' },
    { name: 'Utraphen Film Coated Tablet 37.5mg/325mg', registrationNo: 'MAL23026010AZ', holder: 'MEDISPEC(M) SDN.BHD' },
    { name: 'Poro Suppository 500mg', registrationNo: 'MAL22056057XE', holder: 'Y.S.P.INDUSTRIES(M) SDN BHD' },
    { name: 'Poro Suppository 1000mg', registrationNo: 'MAL22086037XE', holder: 'Y.S.P.INDUSTRIES(M) SDN BHD' }
];

const IbuprofenProducts = [
    {
        name: "Spedifen 400mg Tablet",
        registrationNo: "MAL15085007AZ",
        holder: "EP PLUS GROUP SDN. BHD."
    },
    {
        name: "Nurofen Express 342mg Caplet",
        registrationNo: "MAL13085058ARZ",
        holder: "RB (HEALTH) MALAYSIA SDN BHD"
    },
    {
        name: "Nurofen Express 684mg Caplet",
        registrationNo: "MAL13085061AZ",
        holder: "RB (HEALTH) MALAYSIA SDN BHD"
    },
    {
        name: "Maxigesic 500mg/150mg Film Coated Tablets",
        registrationNo: "MAL15125050ACZ",
        holder: "AFT PHARMACEUTICALS (SE ASIA) SDN BHD"
    },
    {
        name: "Nurofen for Children Orange Sugar Free Suspension 200mg/5ml",
        registrationNo: "MAL18121001AZ",
        holder: "RECKITT BENCKISER (MALAYSIA) SDN. BHD."
    },
    {
        name: "Nurofen Express 400mg Liquid Capsules",
        registrationNo: "MAL18016016ACRZ",
        holder: "RB (HEALTH) MALAYSIA SDN BHD"
    },
    {
        name: "Nurofen Express 200mg Liquid Capsules",
        registrationNo: "MAL18016015ACRZ",
        holder: "RB (HEALTH) MALAYSIA SDN BHD"
    },
    {
        name: "Brufen® Suspension 100mg/5ml",
        registrationNo: "MAL08042445AZ",
        holder: "ABBOTT LABORATORIES (M) SDN. BHD."
    },
]
