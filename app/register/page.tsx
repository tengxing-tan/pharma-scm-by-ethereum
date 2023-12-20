import { createStakeholder } from './action';
import { Role } from '@prisma/client';
import Metamask from './_component/metamask';
import UserInput from 'app/_ui/user-input';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-none px-4">
      <form action={createStakeholder}>
        <div className="min-h-screen">
          <h1 className="pb-6 text-5xl font-medium text-gray-600">
            Register</h1>
          <div className="rounded-3xl border border-200 shadow pt-28 pb-20 px-20 space-y-4">
            <Metamask />

            <UserInput label="Email" isRequired={true}
              form={{
                name: "email",
                type: "email",
                value: "",
              }}
            />
            <div className="w-full flex justify-end pt-6">
              <button type="button" className="text-lg font-medium whitespace-nowrap bg-primary-500 text-white rounded-md px-4 py-1 hover:bg-primary-600 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <Link href="#company">
                  Next</Link></button>
            </div>
          </div>
        </div>

        <div className="space-y-6 border-b border-gray-900/10 pb-12">
          {/* form section company information */}
          <h3 id="company" className="mt-12 border-t border-t-gray-300 pt-3 text-2xl font-semibold text-gray-700">
            Company Information</h3>
          <div className="w-full max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
              Company name
              <span className="text-rose-500">*</span>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                  type="text" name="name" required autoComplete='organization' />
              </div>
            </label>
          </div>

          <div className="w-full max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
              Phone no.
              <span className="text-rose-500">*</span>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  name="phoneNo" type="text" required autoComplete='tel' />
              </div>
            </label>
          </div>

          <div className="w-full max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
              Company address
              <span className="text-rose-500">*</span>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  type="text" name="address" required autoComplete='street-address' />
              </div>
            </label>
          </div>

          <div className="w-full max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
              Postcode
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  type="text" name="postcode" autoComplete='postal-code' />
              </div>
            </label>
          </div>

          <div className="w-full max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
              State
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  type="text" name="state" />
              </div>
            </label>
          </div>

          <div className="w-full max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
              Country
              <span className="text-rose-500">*</span>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  type="text" name="country" required autoComplete='country-name' />
              </div>
            </label>
          </div>

          <div className="w-72 max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
              Role
              <span className="text-rose-500">*</span>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within n:ring-2 focus-within:ring-inset lg:max-w-md">
                <select name="role" className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 capitalize">
                  {Object.values(Role).map((role) => (
                    <option key={role} value={role} className="capitalize">{role.toLowerCase()}</option>
                  ))}
                </select>
              </div>
            </label>
          </div>
        </div>

        <div className="flex justify-start space-x-4 pt-6">
          <button type="submit" className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset">
            Submit</button>
        </div>
      </form >
    </div >
  );
}
