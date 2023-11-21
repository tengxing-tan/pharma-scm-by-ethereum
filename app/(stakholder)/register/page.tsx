'use client';

import Link from 'next/link';
import { Fragment, useState, useEffect, ChangeEvent } from 'react';
import { useFormStatus } from 'react-dom';
import { Listbox, Transition } from '@headlessui/react';
import detectEthereumProvider from '@metamask/detect-provider';
import { createStakeholder } from './action';
import { Heading } from 'app/_ui/heading';

type FormState = {
  name: string;
  phoneNo: string;
  email: string;
  address: string;
  postcode: string;
  state: string;
  country: string;
  role: string;
  publicKey: string;
};

export default function Page() {
  const Role = ['Manufacturer', 'Importer', 'Wholesaler'];
  const { pending } = useFormStatus();
  const [selected, setSelected] = useState('Select role');
  const [form, setForm] = useState<FormState>({
    name: '',
    phoneNo: '',
    email: '',
    address: '',
    postcode: '',
    state: '',
    country: '',
    role: '',
    publicKey: '',
  });

  const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm: FormState) => ({ ...prevForm, [name]: value }));
  };

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
    <div className="max-w-none px-4">
      <form action={createStakeholder}>
        <div className="space-y-10 border-b border-gray-900/10 pb-12">
          <Heading heading="Register" />

          {/* form layout */}
          <div className="mt-8 grid w-full grid-cols-1 gap-6">
            {/* form section: account & email */}
            <div className="w-full max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                Metamask Account
                <span className="text-rose-500">*</span>
              </label>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-700 placeholder:text-gray-400 focus:ring-0"
                  type="text" name="publicKey" required
                  value={
                    wallet.accounts.length > 0 ? String(wallet.accounts[0]) : ''
                  }
                  onChange={handleForm} />
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
            </div>

            <div className="w-full max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                Email
                <span className="text-rose-500">*</span></label>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  name="email" type="email" value={form.email} required
                  onChange={handleForm} />
              </div>
            </div>

            {/* form section company information */}
            <h3 className="mt-12 border-t border-t-gray-300 pt-3 text-xl font-semibold text-gray-700">
              Company Information</h3>
            <div className="w-full max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                Company name
                <span className="text-rose-500">*</span></label>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                  type="text" name="name" value={form.name} required
                  onChange={handleForm} />
              </div>
            </div>

            <div className="w-full max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                Phone no.
                <span className="text-rose-500">*</span>
              </label>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  name="phoneNo"
                  type="text"
                  autoComplete="tel-national"
                  value={form.phoneNo}
                  onChange={handleForm}
                  required
                />
              </div>
            </div>

            <div className="w-full max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                Company address
                <span className="text-rose-500">*</span>
              </label>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleForm}
                  required
                />
              </div>
            </div>

            <div className="w-full max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                Postcode
              </label>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  type="text"
                  autoComplete="postal-code"
                  name="postcode"
                  value={form.postcode}
                  onChange={handleForm}
                />
              </div>
            </div>

            <div className="w-full max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                State
              </label>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleForm}
                />
              </div>
            </div>

            <div className="w-full max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                Country
                <span className="text-rose-500">*</span>
              </label>
              <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  type="text"
                  autoComplete="country-name"
                  name="country"
                  value={form.country}
                  onChange={handleForm}
                  required
                />
              </div>
            </div>

            <div className="w-72 max-w-lg">
              <label className="block pb-1 text-sm font-medium text-gray-700">
                Role
                <span className="text-rose-500">*</span>
              </label>
              <Listbox name="role" value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="focus-visible:border-primary-500 focus-visible:ring-offset-primary-300 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 lg:text-sm">
                    <span className="block truncate">{selected}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:text-sm">
                      {Object.values(Role).map((role, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? 'bg-primary-100 text-primary-900'
                              : 'text-gray-900'
                            }`
                          }
                          value={role.toUpperCase()}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                  }`}
                              >
                                {role}
                              </span>
                              {selected ? (
                                <span className="text-primary-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                  {/* tick */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="aria-hidden h-5 w-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.5 12.75l6 6 9-13.5"
                                    />
                                  </svg>
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </div>

        <div className="flex justify-start space-x-4 pt-6">
          <button
            type="submit"
            aria-disabled={pending}
            className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
