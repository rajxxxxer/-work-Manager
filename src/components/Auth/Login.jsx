import { useState } from "react";

const Login = ({ handle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submithandle = (e) => {
    e.preventDefault();
    handle(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="w-[380px] md:w-[420px] border-2 rounded-3xl border-emerald-500 p-10 shadow-2xl bg-white/10 backdrop-blur-xl transition duration-300">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Welcome Back 👋</h2>
        <form
          onSubmit={submithandle}
          className="flex flex-col items-center justify-center space-y-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-72 md:w-80 outline-none bg-white/90 border border-emerald-400 focus:border-emerald-600 transition duration-200 font-medium text-base py-2 px-6 rounded-full placeholder:text-gray-500 shadow-md focus:shadow-lg"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-72 md:w-80 outline-none bg-white/90 border border-emerald-400 focus:border-emerald-600 transition duration-200 font-medium text-base py-2 px-6 rounded-full placeholder:text-gray-500 shadow-md focus:shadow-lg"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="mt-4 w-72 md:w-80 text-white bg-emerald-600 hover:bg-emerald-700 transition duration-200 font-semibold text-lg py-2 px-8 rounded-full shadow-lg hover:shadow-xl"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
