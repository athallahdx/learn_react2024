export default function registerPage(){
    return(
        <div className="w-full max-w-md">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
    <form action="#">
        <div className="mb-4">
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
        >
            Name
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
        />
        </div>
        <div className="mb-4">
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
        >
            Email
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
        />
        </div>
        <div className="mb-4">
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
        >
            Password
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
        />
        </div>
        <div className="mb-6">
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
        >
            Confirm Password
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
        />
        </div>
        <div className="flex items-center justify-between">
        <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="./login.html"
        >
            Sudah punya akun?
        </a>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
        >
            Register
        </button>
        </div>
    </form>
    </div>
    <p className="text-center text-gray-500 text-xs">
    &copy;2024 Your Company. All rights reserved.
    </p>
    </div>
    )
}
    