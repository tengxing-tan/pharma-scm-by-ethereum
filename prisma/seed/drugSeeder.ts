import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function drugSeeder() {
    const pharmaceuticalIngredients = [
        "Acetaminophen (Paracetamol)",
        "Ibuprofen",
        "Aspirin (Acetylsalicylic acid)",
        "Lisinopril",
        "Simvastatin",
        "Metformin",
        "Amoxicillin",
        "Ciprofloxacin",
        "Levothyroxine",
        "Omeprazole",
        "Atorvastatin",
        "Hydrochlorothiazide",
        "Metoprolol",
        "Prednisone",
        "Warfarin",
        "Cetirizine",
        "Sertraline",
        "Alprazolam",
        "Ranitidine",
        "Furosemide"
    ];

    const dosageForms = [
        "Tablet",
        "Capsule",
        "Liquid Suspension",
        "Injection",
        "Topical Cream",
        "Topical Ointment",
        "Drops",
        "Inhaler",
        "Patch",
        "Suppository",
        "Lozenge",
        "Oral Solution",
        "Chewable Tablet",
        "Effervescent Tablet",
        "Extended-Release Tablet",
        "Nasal Spray",
        "Lotion",
        "Gel",
        "Powder for Reconstitution"
    ];

    try {
        // Seed Drugs
        await prisma.drug.createMany({
            data: Array.from({ length: 30 }, (_, index) => ({
                name: `Drug ${index + 1}`,
                registrationNo: `0000${index + 1}`,
                activeIngredient: String(pharmaceuticalIngredients[index % 20]),
                dosageForm: String(dosageForms[index % 20]),
                consumerMedicineInfo: `Attachment ${index + 1}`,
            })),
        });

    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
