import React from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const MoreInformationCard = () => {
  const [info, setInfo] = useState([])
  const params = useParams();
  async function getMoreInfo() {
    try{
    // const response = await axios.get("http://localhost:3001/getwalkscore/"+ params.cityName);
    const response = await axios.get("http://localhost:3001/getwalkscore/"+ "San Francisco")
    setInfo(response?.data);
   
    } catch(error){
        console.log(error)
    }
  }
  useEffect  (() => {
    getMoreInfo()
  }, [])

  useEffect  (() => {
    console.log(info)
  }, [info])


  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl">

   
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="px-4 sm:px-0">
      <h1 className="text-3xl font-semibold font-serif leading-7 text-[#044389]">MORE INFORMATION FOR CITY 🏙️</h1>
      <p className="mt-1 max-w-3xl text-sm font-semibold font-serif leading-6 text-[#015239]">More details to ensure this is the city that you want!</p>
    </div>
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]">Crime Rate 🚫:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">percentage/score</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]"> Walk Score:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">{info?.walkscore}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]"> Transit Score:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">{info?.transit?.score}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]"> Bike Score: </dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">{info?.bike?.score}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]">Weather: </dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">lowest temperature: _____
          <br />
          average temperature: _____
          <br />
          highest temperature: _____
          
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 text-[#044389]">City Description:</dt>
          <dd className="mt-1 text-sm leading-6 font-semibold text-[#015239] sm:col-span-2 sm:mt-0">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </dd>
        </div>
      </dl>
    </div>
    </div>
  </div>







  );
};

export default MoreInformationCard;
