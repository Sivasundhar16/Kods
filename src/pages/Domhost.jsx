const Domhost = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to Domhost 🚀
        </h1>
        <p className="text-gray-600 mb-6">
          Manage your domains, deploy projects, and monitor usage — all in one
          place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-200">
            Get Started
          </button>
          <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Domhost;
