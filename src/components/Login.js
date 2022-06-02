import React from 'react';
import axios from 'axios';
import { useState} from 'react';

const Login = () => {

const [consumer,setConsumer]=useState("")
const [password,setPassword]=useState("")
const [loading, setLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [data, setData] = useState(null);
  
const handleSubmit = () => {
  setLoading(true);
  setIsError(false);
  const data = {
    consumer: consumer,
    password:password
  }
  axios.post('https://localhost:5000/api/user/login', data).then(res => {
    setData(res.data);
    setConsumer('');
    setPassword('');
    setLoading(false);
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}

    return (
        <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
        <h1 className="text-5xl">Consumer Login</h1>
        <div className="mt-14">
          <form className="w-96 font-Poppins flex flex-col items-center gap-y-5" onSubmit={this.handleSubmit.bind(this)}>
            <input
            value={consumer}
              type="text"
              className="w-full block rounded-full border border-black py-3 px-5 focus:outline-none text-center placeholder:text-black"
              placeholder="Consumer no"
              required name="consumer"
              onChange={(event)=>{
                setConsumer(event.target.value);
              }}
            />
    
            <input
            value={password}
              type="password"
              className="w-full block rounded-full border border-black py-3 px-5 focus:outline-none text-center placeholder:text-black"
              placeholder="Password" name="password"
             onChange={(event)=>{
                setPassword(event.target.value);
              }}
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