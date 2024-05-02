"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/ui/3dcard";
import Link from "next/link";
import { TextRevealCard } from "@/app/ui/text-reveal-card";

export function CardHover() {
  return (
    <div className="flex flex-col">
      <CardContainer className="inter-var bg-transparent my-8">
        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-4  flex items-center md:ml-12">
          <CardItem translateZ="100" className="w-full p-10">
            <Image
              src="https://i.ibb.co/6WzBvm2/Untitled.jpg"
              height="1000"
              width="1000"
              className="h-auto lg:w-full lg:min-w-full md:max-w-80 object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mb-2 ">
            <CardItem
              translateZ={20}
              as={Link}
              href="#"
              className="px-4 md:px-12 rounded-xl items-center text-sm font-medium bebas-font text-white"
            >
              <TextRevealCard
                text="Prof. (Dr.) Sandip R. Shinde"
                revealText="Head of Department, Computer Engineering"
              ></TextRevealCard>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
