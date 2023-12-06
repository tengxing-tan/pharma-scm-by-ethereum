'use client'
import { Process } from "@prisma/client";
import { Processes } from "lib/enum";

export default function FormProcessOption() {
    return (
        <div className="w-full max-w-sm">
            <label className="block pb-1 text-sm font-medium text-gray-700">
                Process
                < span className="text-rose-500">* </span>
                < div className="mt-1 focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                    <select required name="process" className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 capitalize">
                        <option key="0" value="">Choose one</option>
                        {
                            Object.values(Process).map((item) => (
                                <option key={item} value={item} className="capitalize"> {Processes[item]} </option>
                            ))
                        }
                    </select>
                </div>
            </label>
        </div>
    )
} 