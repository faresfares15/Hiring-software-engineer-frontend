import Head from 'next/head';
import { login, signup } from './actions'
import {Button} from "@/components/ui/button";

export default function LoginPage() {
    return (
        // <main className={"flex flex-col justify-center items-center h-screen w-screen"}>
        //     <h1 className={"text-6xl font-bold"}>Login</h1>
        // <form className={"w-[22rem] mt-12 flex flex-col justify-center gap-6"}>
        //     <div className={"flex flex-col"}>
        //         {/*<label htmlFor="email">Email:</label>*/}
        //         <input id="email" name="email" type="email" placeholder="Enter you email adress..." required className={"bg-[#F2F1EE] opacity-60 px-3 py-2 rounded-lg border-2 focus:border-[#2383E2] focus:border-2"} />
        //     </div>
        //     <div className={"flex flex-col"}>
        //         {/*<label htmlFor="password">Password:</label>*/}
        //         <input id="password" name="password" type="password" placeholder="Password" required className={"bg-[#F2F1EE] opacity-60 px-3 py-2 rounded-lg border-2 focus:border-[#2383E2] focus:border-2"} />
        //     </div>
        //     <Button formAction={login} variant={"outline"}>Log in</Button>
        //     {/*<Button formAction={signup}>Sign up</Button>*/}
        // </form>
        // </main>
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <Head>
                <title>Login - Together Notes</title>
            </Head>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="email" id="email"
                               className="bg-[#F2F1EE] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2383E2] focus:border-[#2383E2] sm:text-sm"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password"
                               className="bg-[#F2F1EE] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <Button type="submit"
                            formAction={login}
                            variant={"outline"}
                            className="w-full flex justify-center py-2 px-4 border border-opacity-10 border-[#0f0f0f] rounded-md shadow-sm text-sm font-bold text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2383E2]">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}