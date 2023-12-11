import 'styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login',
    description: '',
};

export default async function LoginLayout(props: { children: React.ReactNode }) {
    return (
        <div className='w-full min-h-screen pb-12 flex justify-center items-center bg-gray-700/10'>
            {props.children}
        </div>
    );
}
