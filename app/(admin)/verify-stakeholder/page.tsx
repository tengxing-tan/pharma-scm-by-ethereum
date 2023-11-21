'use server'

import { getStakeholders } from "app/api/action/getStakeholder"
import PharmaContract from "artifacts/contracts/PharmaSupplyChain.sol/PharmaSupplyChain.json";
import { ethers } from "ethers";

// Global variables: for smart contract
const contractAddress = "0x7a2088a1bfc9d81c55368ae168c2c02570cb814f";
const contractAbi = PharmaContract.abi;

export default async function Page({
	params,
	searchParams,
}: {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	// get data from prisma
	const stakeholders = await getStakeholders()

	const publicKey = async (email: String) => {
		try {
			const provider = new ethers.BrowserProvider(window.ethereum)
			const contract = new ethers.Contract(contractAddress, contractAbi, provider);
			const result = await contract.stakeholders(email);
			return result
		} catch (err) {
			return "get contract failed"
		}
	}

	return (
		<div className="max-w-none px-4">
			{/* form start here, with border-bottom */}
			<div className="space-y-10 border-b border-gray-900/10 pb-12">
				{/* page title: heading 1. with a button (optionall) at the right */}
				<div className="flex justify-between">
					<h1 className="text-xl sm:text-3xl font-bold text-gray-800">
						Verify Stakeholder</h1>
				</div>

				{/* body */}
				<div className="grid w-full grid-cols-1">
					<div className="mt-8 flex h-full flex-col bg-white py-2">
						<ul role="list" className="-my-6 divide-y divide-gray-200">
							{stakeholders &&
								stakeholders.map((item, index) => (
									<li key={index} className="flex items-start py-6">
										<div className="w-full grid grid-cols-6 gap-x-4">
											<div className="col-span-4 flex flex-col pr-6">
												<div className="flex flex-col-reverse sm:flex-row">
													<p className="text-md font-semibold text-gray-800">
														{item.name}
													</p>

													{
														item.status == "VERIFIED" ? (
															<span className="bg-green-50 text-green-700 ring-green-700/10 sm:ml-2 w-fit inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset">
																Verified</span>
														) : item.status == "PENDING" ? (
															<span className="bg-amber-50 text-amber-700 ring-amber-700/10 sm:ml-2 w-fit inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset">
																Pending</span>
														) : (
															<span className="bg-rose-50 text-rose-700 ring-rose-700/10 sm:ml-2 w-fit inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset">
																Rejected</span>
														)
													}
												</div>
												<p className="pb-1 text-xs text-gray-700">
													key: {Object(publicKey(item.email))}</p>

												<p className="mt-1 text-xs text-gray-700">
													<span className="text-gray-500">Country: </span>{' '}
													<span> {item.country}</span>
												</p>
												<p className="mt-1 text-xs text-gray-700">
													<span className="text-gray-500">Role: </span>{' '}
													<span> {item.role}</span>
												</p>
											</div>
										</div>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
