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
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.name}
            </h2>

            <p className="poppins-font text-xl text-white mb-4">{item.title}</p>

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
              <p className="truncate">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
