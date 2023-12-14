import 'styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: 'FYP Blockchain App',
        template: '%s | Ethereum DApp',
    },
    description:
        'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
};

export default async function RootLayout(props: { children: React.ReactNode }) {

    return (
        <html lang="en" className="[color-scheme:light]">
            <body className="overflow-y-scroll bg-white bg-[url('/grid.svg')]">
                {props.children}
            </body>
        </html>
    );
}
