import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import url from '../axios/url';

const Home=()=>{
    const [screen, setScreen] = useState(0);
    const [token,setToken] = useState("");
    const [payment, setPayment] = useState(false);
    const [price,setPrice] = useState(0);
    const [username,setUsername] = useState("");
    const [lastupdate,setLastupdate] = useState("");
    const [water,setWater] = useState(0);
    const [monthlyPrice,setMonthlyPrice] = useState(0);
    const navigate=useNavigate();


    useEffect(()=>{
     setToken(localStorage.getItem("dataToken"));
     setUsername(localStorage.getItem("dataUser"));
    },[]);


    useEffect(()=>{
      if(token)
      {

        axios
          .get(url+"/user/getmybill", {
            headers: {
              Authorization: "Bearers " + token,
            },
          })
          .then((res) => {
            if (res.data.bill.status === "unpaid") {
              setPrice(res.data.bill.consumedPrice);
              console.log(res.data.bill.consumedPrice);
            }
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get(url+"/user/mydata", {
            headers: {
              Authorization: "Bearers " + token,
            },
          })
          .then((res) => {
            console.log(res);
            setWater(res.data.currentWaterConsumption);
            setMonthlyPrice(res.data.currentMonthlyPrice);
            setLastupdate(res.data.updatedAt);
          })
          .catch((err) => {
            console.log(err);
          });

      }
     
    },[token]);

    const handlePayment = () => {
      setPayment(true);
      console.log(token);
      axios.post(url+"/user/paybill", {
        headers: {
          Authorization : `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res.data);
        alert("Payment Updated")
        setPayment(false);
        setPrice(0);
  }).catch((err) => {
    console.log(err);
    setPayment(false);
  });
}

const signOut=()=>{
  axios.get(url+"/user/logout",{ headers: {
    Authorization: "Bearers " + token,
  },}).then((res) => {
    navigate('/login');
    alert("You have successfully logged out");
}).catch((err) => {
  console.log(err)
})
};
   return (
    <div>
      <Header item1="Home" item2="Contact" item3="Previous Bill" item4="Sign Out" item4Click={signOut}/>
      <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
        <h1 className="text-4xl font-Poppins font-medium">
          Welcome {username}
        </h1>

        <div className="w-full mt-10 p-10 bg-gray-300 rounded">
          <div className="font-Poppins flex justify-center text-lg gap-x-5">
            <button type='submit'
              className={`rounded-full border-black font-semibold py-1 px-1 w-56 ${
                screen === 0 ? "bg-white" : "border"
              }`}
              onClick={() => {
                setScreen(0);
              }}
            >
              Bill Due
            </button>
            <button
              className={`rounded-full border-black font-semibold py-3 px-2 w-56 ${
                screen === 1 ? "bg-white" : "border"
              }`}
              onClick={() => {
                setScreen(1);
              }}
            >
              Present Consumption
            </button>
          </div>

          <div className="mt-10 text-center font-Poppins">
            {screen === 0 ? (
              <div className="flex flex-col items-center">
                <h2 className="text-xl max-w-md">
                  You have to pay outstanding amount for the month of May
                </h2>

                <h3 className="text-5xl mt-5 font-medium">
                  <span className="font-sans">₹</span>
                  {price}
                </h3>

                <button
                  className="rounded-full mt-10 bg-black text-white text-lg font-bold py-3 w-56"
                  onClick={handlePayment}
                  type="button"
                >
                  {payment ? "Paying..." : "Pay Now"}
                </button>
              </div>
            ) : (
              <></>
            )}

            {screen === 1 ? (
              <div className="flex flex-col items-center">
                <h2 className="text-xl">
                  Your current water consumption for the Month
                </h2>
                <h2 className="text-xl">
                  ({lastupdate})
                </h2>

                <h3 className="text-5xl mt-3 font-medium">{water}L</h3>

                <h2 className="text-xl mt-10">Which translates to</h2>

                <h3 className="text-5xl mt-3 font-medium">
                  <span className="font-sans">₹</span>
                  {monthlyPrice}
                </h3>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      </div>
    );
}
export default Home;