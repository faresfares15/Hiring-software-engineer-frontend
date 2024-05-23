import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <main className={"flex flex-col justify-center items-center h-screen w-screen"}>
            <h1 className={"text-6xl font-bold"}>Sign Up</h1>
        <form>
            <div className={"flex flex-col"}>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required className={"bg-[#F2F1EE] opacity-60 px-3 py-2 rounded-lg shadow-2xl focus:shadow-[#2383E2] focus:drop-shadow-sm"}/>
            </div>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
        </form>
        </main>
    )
}