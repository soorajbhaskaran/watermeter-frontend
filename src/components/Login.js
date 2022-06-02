import React from 'react';

const Login = () => {
    return (
        <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
        <h1 className="text-5xl">Consumer Login</h1>
        <div className="mt-14">
          <form className="w-96 font-Poppins flex flex-col items-center gap-y-5" onSubmit={()=>{console.log("hii");}}>
            <input
              type="number"
              className="w-full block rounded-full border border-black py-3 px-5 focus:outline-none text-center placeholder:text-black"
              placeholder="Consumer no"
              required name="consumer"
             /* onChange={(event)=>{
                setUsername(event.target.value);
              }}*/
            />
    
            <input
              type="password"
              className="w-full block rounded-full border border-black py-3 px-5 focus:outline-none text-center placeholder:text-black"
              placeholder="Password" name="password"
             /* onChange={(event)=>{
                setPassword(event.target.value);
              }}*/
              required
            />
    
            <button
              type="submit"
              className="rounded-full bg-black text-white font-semibold py-3 w-56"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
};

export default Login;