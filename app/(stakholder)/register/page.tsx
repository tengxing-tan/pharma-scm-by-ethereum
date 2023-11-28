import { createStakeholder } from './action';
import { Heading } from 'app/_ui/heading';
import { Role } from '@prisma/client';
import Metamask from './_component/metamask';

export default function Page() {
  return (
    <div className="max-w-none px-4">
      <Heading heading="Register" />

      <form action={createStakeholder}>
        <div className="space-y-10 border-b border-gray-900/10 pb-12">
          <Metamask />

          <div className="w-full max-w-lg">
            <label className="block pb-1 text-sm font-medium text-gray-700">
              Email
              <span className="text-rose-500">*</span>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  name="email" type="email" required autoComplete='email' />
              </div>
            </label>
          </div>

          {/* form section company information */}
          <h3 className="mt-12 border-t border-t-gray-300 pt-3 text-xl font-semibold text-gray-700">
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
