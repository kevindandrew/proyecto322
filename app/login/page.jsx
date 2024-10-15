import React from "react";

const page = () => {
  return (
    <div className="bg-slate-200 h-screen">
      <div className="container mx-auto max-w-lg h-full flex items-center">
        <form
          action=""
          className="bg-white w-full rounded-lg py-10 px-8 flex flex-col gap-4"
        >
          <h3 className="text-center text-2xl font-bold">Team One</h3>
          <p className="text-center">Sign in your account</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-500 font-semibold">Username</label>
            <input
              className="bg-slate-200 p-4 rounded-lg"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-500 font-semibold">Password</label>
            <input
              className="bg-slate-200 p-4 rounded-lg"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="w-full mt-4 bg-green-500 rounded-lg text-white font-bold p-3 text-1xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
