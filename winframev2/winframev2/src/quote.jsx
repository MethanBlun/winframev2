import React from "react";
import { useState, useEffect } from "react";



function Quote() {
  const [quote, setQuote] = useState("default citation");
  const [author, setAutor] = useState("No ondvdvvde");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./learning.json");
        const json = await response.json();
        const rnd = Math.floor(Math.random() * json.length);
        setQuote(json[rnd].quote);
        setAutor(json[rnd].author);
       
      } catch (error) {
        console.error("Erreur lors de la récupération des citations :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" p-5  h-full flex flex-col bg-slate-800">
        <div className=" flex-grow   text-gray-50 ">{quote}</div>
        <div className="h-1/6 flex justify-end items-center pr-4 text-white">{author}</div>
      </div>
    </>
  );
}

export default Quote;
