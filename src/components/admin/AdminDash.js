import React, { useState, useEffect } from "react";
import axios from "axios";

const headings = [
    "Co No.",
    "Name",
    "Phone",
    "Current Consumption",
    "Cost",
    "Due/Paid/Unpaid",
  ];
  const AdminDash=()=>{

    const [consumerTable,setconsumerTable] = useState([]);  
    const [token, setToken] = useState();
        useEffect(() => {
          setToken(localStorage.getItem("adminToken"));
        }, []);

        useEffect(() => {
          if (token) {
              const config = {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods":
                    "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                  "Authorization": "Bearers " + token,
                },
              };
           /* axios
              //.get("http://65.0.75.156/api/user/getmybill", {
              .get("http://localhost:5000/api/munci/getAllConsumer", config)
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log("Error"+err);
              });*/
          }
          setconsumerTable( [
        {
            "id": 1,
            "currentWaterConsumption": 22,
            "currentMonthlyPrice": "22.04",
            "currentMeterReading": 45,
            "fk_consumerId": 1814562,
            "priceId": 2,
            "createdAt": "2022-06-02T23:21:20.000Z",
            "updatedAt": "2022-06-02T23:21:20.000Z"
        },
         {
            "id": 2,
            "currentWaterConsumption": 72,
            "currentMonthlyPrice": "22.04",
            "currentMeterReading": 45,
            "fk_consumerId": 9814562,
            "priceId": 2,
            "createdAt": "2022-06-02T23:21:20.000Z",
            "updatedAt": "2022-06-02T23:21:20.000Z"
        }
    ])
        }, [token]);



    useEffect(() => {
      axios.get("http://localhost:5000/api/munci/getAllConsumer",
        (req, res) => {}
      ).then((response) => {
        console.log(response.data);
        //setconsumerTable(response.data);
      });
    });


      return (
        <div className="flex-1 pb-20 flex flex-col items-center justify-center py-5 px-5 md:px-10 lg:px-20">
          <div className="w-full flex max-w-2xl rounded-full border border-black py-3 px-5">
            <input
              className="focus:outline-none placeholder:text-black block flex-grow"
              placeholder="Search by consumer number"
            />
            <img
              src="../../vectors/search.svg"
              alt="search"
              height={20}
              width={20}
            />
          </div>

          <div className="App" style={{ height: "100%" }}>
            <div className="min-h-screen bg-gray-100 text-gray-900">
              <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="">
                  <h1 className="text-xl font-semibold">Find Transmitters</h1>
                </div>
                <div className="mt-4">
                 
                  {/* <Table columns={columns} data={data} map={mapFly} /> */}
                </div>
              </main>
            </div>
          </div>
        </div>
      );

  }
  export default AdminDash;
  

