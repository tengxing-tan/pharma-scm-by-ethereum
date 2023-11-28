'use client'
import detectEthereumProvider from "@metamask/detect-provider";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Metamask() {
    const [hasProvider, setHasProvider] = useState<boolean | null>(null);
    const initialState = { accounts: [] };
    const [wallet, setWallet] = useState(initialState);

    useEffect(() => {
        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true });
            setHasProvider(Boolean(provider));
        };

        getProvider();
    }, []);

    const updateWallet = async (accounts: any) => {
        setWallet({ accounts });
    };

    const handleConnect = async () => {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            updateWallet(accounts);
        }
    };

    return (
        <div className="w-full max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
                Metamask Account (Public key)
                <span className="text-rose-500">*</span>
                <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                    <input
                        className="block flex-1 border-0 bg-transparent p-2 text-gray-700 placeholder:text-gray-400 focus:ring-0"
                        type="text" name="publicKey" required
                        defaultValue={
                            wallet.accounts.length > 0 ? String(wallet.accounts[0]) : ''
                        } />
                    {hasProvider ? (
                        wallet.accounts.length <= 0 ? (
                            <button
                                type="button"
                                className="rounded-e-md bg-sky-500 p-3 text-sm font-semibold text-white hover:bg-sky-600 focus:bg-sky-700"
                                onClick={handleConnect}
                            >
                                Connect MetaMask
                            </button>
                        ) : (
                            <span className="inline-flex items-center p-2 text-sm font-semibold text-green-500">
                                Connected
                            </span>
                        )
                    ) : (
                        <Link href="https://metamask.io/download/" target="_blank">
                            <button
                                type="button"
                                className="rounded-e-md bg-sky-500 p-3 text-sm font-semibold text-white hover:bg-sky-600 focus:bg-sky-700"
                            >
                                Download Metamask
                            </button>
                        </Link>
                    )}
                </div>
            </label>
        </div>
    )
} 