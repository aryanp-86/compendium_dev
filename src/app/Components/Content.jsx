"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TracingBeam } from "@/app/ui/tracing-beam";
import { SparklesCore } from "@/app/ui/sparkles";

export function Content(props) {
  const [data, setData] = useState([]);
  const [key, setKey] = useState(0);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const resUserExists = await fetch("/compendium/api/getArticles", {
          method: "GET",
        });

        const cards = await resUserExists.json();
        setData(cards);
        setKey((currentKey) => currentKey + 1);
      } catch (error) {
        console.log("Error fetching articles ", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <TracingBeam className="px-6 flex flex-col w-full z-10" key={key}>
      <div className="mx-auto pt-4 relative">
        {data.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 outline outline-offset-2 outline-blue-500 rounded-3xl p-4">
           

            <p className="poppins-font text-center text-2xl text-white mb-1">{item.title}</p>
            <h2 className="bg-black bebas-font tracking-wider text-gray-300 rounded-full text-xl w-fit  py-1 mb-4">
              By: {item.name}
            </h2>
            <hr className="my-6"></hr>
            <div className="text-sm text-white  prose prose-sm dark:prose-invert">
              {item?.photo && (
                <Image
                  src={item.photo}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p className="poppins-font text-justify tracking-tight leading-normal text-lg text-white mb-1">{item.content}</p>
              <hr></hr>
              <p className="poppins-font text-justify tracking-tight leading-normal text-lg  mb-1 text-gray-300 mt-4">Full Article Link: <a className="hover:text-red-500 hover:cursor-pointer text-base text-gray-600 underline underline-offset-2 lowercase tracking-wider" href={`${item.link}`} target="_blank">{item.link}</a></p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
