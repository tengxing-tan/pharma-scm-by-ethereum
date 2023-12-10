import { PrismaClient } from "@prisma/client"

export async function stakeholderSeeder(prisma: PrismaClient) {

    try {
        enum Role {
            SUPPLIER = "SUPPLIER",
            MANUFACTURER = "MANUFACTURER",
            IMPORTER = "IMPORTER",
            WHOLESALER = "WHOLESALER"
        }
        enum VerifyStatus {
            VERIFIED = "VERIFIED",
            PENDING = "PENDING",
            REJECTED = "REJECTED"
        }

        await prisma.manufacturer.create({
            data: {
                id: "ranbaxy",
                info: {
                    create: {
                        id: "ranbaxy",
                        name: "RANBAXY (MALAYSIA) SDN. BHD.",
                        phoneNo: `016-7891 0234`,
                        email: `ranbaxy@example.com`,
                        address: `1, bakong road`,
                        postcode: `50000`,
                        state: `Kuala Lumpur`,
                        country: `Malaysia`,
                        role: Role.MANUFACTURER,
                        status: VerifyStatus.PENDING,
                    }
                }
            }
        })
        await prisma.importer.create({
            data: {
                info: {
                    create: {
                        name: "MEDISPEC(M) SDN.BHD",
                        phoneNo: `016-7891 0267`,
                        email: `medispec@example.com`,
                        address: `1, dahlia road`,
                        postcode: `22600`,
                        state: `Pahang`,
                        country: `Malaysia`,
                        role: Role.IMPORTER,
                        status: VerifyStatus.VERIFIED,
                    }
                }
            }
        })
        await prisma.wholesaler.create({
            data: {
                info: {
                    create: {
                        name: "JOHNSON & JOHNSON SDN BHD",
                        phoneNo: `016-7891 0296`,
                        email: `jj@example.com`,
                        address: `1, setia indah road`,
                        postcode: `62600`,
                        state: `Johor`,
                        country: `Malaysia`,
                        role: Role.WHOLESALER,
                        status: VerifyStatus.VERIFIED,
                    }
                }
            }
        })
        await prisma.stakeholder.createMany({
            data: [{
                id: "peter",
                name: "PETER SDN BHD",
                email: "peter@example.com",
                country: "Malaysia",
                role: Role.SUPPLIER,
                status: VerifyStatus.VERIFIED,
            }, {
                name: "ABANG ADIK SDN BHD",
                email: "abangadik@example.com",
                country: "Malaysia",
                role: Role.SUPPLIER,
                status: VerifyStatus.VERIFIED,
            }, {
                name: "LABORATORIES TORRENT (MALAYSIA) SDN. BHD.",
                email: "laboratoriestorrent@example.com",
                country: "Malaysia",
                role: Role.SUPPLIER,
                status: VerifyStatus.VERIFIED,
            }]
        })
        await prisma.admin.createMany({
            data: [
                { email: "tantengxing@gmail.com" },
                { email: "admin@admin.com" },
            ]
        })

    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
