const Header = ({ data ,changeuser}) => {
  const handlelogout = () => {
    localStorage.removeItem("loggedInUser");
    changeuser('');
  };
  return (
    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg text-white">
      <div>
        <h1 className="text-xl font-light">Hello, <span className="font-semibold">{data.firstName}</span></h1>
        <h2 className="text-3xl font-bold mt-1">Welcome back 👋</h2>
      </div>
      <button
      onClick={handlelogout}
        className="bg-white text-red-600 hover:bg-red-600 hover:text-white transition duration-300 font-semibold px-6 py-2 rounded-full shadow-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
