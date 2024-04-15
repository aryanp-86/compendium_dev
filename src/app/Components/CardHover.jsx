"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3dcard";
import Link from "next/link";
import SvgComponent7 from "./SvgComponent7";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function CardHover() {
  return (
    <div className="flex flex-col">
      <SvgComponent7 />
      <CardContainer className="inter-var bg-transparent my-8">
        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-4  flex items-center ">
          <CardItem translateZ="100" className="w-full p-10">
            <Image
              src="https://i.ibb.co/6WzBvm2/Untitled.jpg"
              height="1000"
              width="1000"
              className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mb-2">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 rounded-xl items-center text-sm font-medium bebas-font text-white"
            >
              <TextRevealCard
                text="Prof. (Dr.) Sandip R. Shinde"
                revealText="Professor & Head, Department of Computer Engineering"
              ></TextRevealCard>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
