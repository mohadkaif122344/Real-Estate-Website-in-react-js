


import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <div className="text-center ">
    
      <h2 className="text-2xl font-bold mb-4 duration-300 hover:scale-110  ">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      <form className="flex flex-col gap-4">
       
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded-lg"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded-lg"
        />

        
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded-lg"
          />
        )}

        <button
          type="submit"
          className="bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition duration-300 hover:scale-105"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      
      <p className="mt-4 text-gray-600 dark:text-gray-300 duration-300 hover:scale-110 ">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-sky-500 hover:underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
