import React, { useState,useEffect } from "react";
import axios from "axios";
import url from "../axios/url";
import PrevTile from "../components/Prevtile";

const PreviousBill = (props) => {
  const[token,setToken]=useState("");
  const [billData,setBillData]=useState([]);

  useEffect(()=>{
    setToken(localStorage.getItem("dataToken"));
   },[]);


   useEffect(()=>{
     if(token)
     {

       axios
         .get(url+"/user/getmyallbill", {
           headers: {
             Authorization: "Bearers " + token,
           },
         })
         .then((res) => {
          console.log(res.data.bill);
          setBillData(res.data.bill);
          console.log(billData);
         })
         .catch((err) => {
           console.log(err);
         });
     }
    
   },[token]);
  
  return(
    <div class="flex flex-col mx-10 mb-10 mt-5 py-10 px-10">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                  S.No
                </th>
                <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                  Month/Year
                </th>
                <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                  Total Cost(&#8377;)
                </th>
                <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                  Payment Status
                </th>
              </tr>
            </thead>
            
             {billData.map(each=>(<PrevTile key={each["id"]} id={each["id"]} monthYear={each["monthYear"]} totalCost={each["totalCost"]} status={each["status"]} consumedPrice={each["consumedPrice"]}/>))}
              
            
          </table>
        </div>
      </div>
    </div>
  </div>
  );
    

};

export default PreviousBill;
