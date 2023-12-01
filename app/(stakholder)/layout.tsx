import 'styles/globals.css';
import { GlobalNav } from 'app/_ui/global-nav';
// import { AddressBar } from 'app/_ui/address-bar';
// import Byline from 'app/_ui/byline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'FYP Blockchain App',
    template: '%s | Ethereum DApp',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
};

export default async function StakeholderLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className="[color-scheme:light]">
      <body className="overflow-y-scroll bg-white bg-[url('/grid.svg')]">
        {/* // if auth is true then nav */}
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="rounded-lg p-px">{props.children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
