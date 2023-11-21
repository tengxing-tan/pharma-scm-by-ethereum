'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import PharmaProduct from "artifacts/contracts/PharmaProduct.sol/PharmaProduct.json";

// Global variables: for smart contract
const DEPLOYED_CONTRACT_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const abi = PharmaProduct.abi;
const pharmaContract = (provider: any) => new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient && typeof window !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const yeah = pharmaContract(provider)

        console.log(yeah)

        return (
            <div>
                {children}
            </div>
        )
    }
}
