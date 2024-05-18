import React from "react";
import { getStudentData } from "../../api/dbfuntions";
import FacultyHero from "../Components/StudentHero";
import Achievement from "../Components/Achievement";

export default async function StudentAchievements() {
  const res = await getStudentData();
  const awards = res.awards;

  const handleAwards = (awar) => {
    return awar.map((award) => <Achievement key={award.srno} award={award} />);
  };

  // const handleHIndex = (hIndexData) => {
  //   return hIndexData.map(
  //     ({
  //       name,
  //       googlehindex,
  //       googlecitations,
  //       googlepersonalif,
  //       scopushindex,
  //       scopuscitations,
  //       date,
  //     }) => (
  //       <React.Fragment key={name}>
  //         <tr>
  //           <td className="px-4 py-2 text-gray-700" rowSpan={3}>
  //             {name}
  //           </td>
  //           <td className="px-4 py-2 text-gray-700">H-Index :</td>
  //           <td className="px-4 py-2 text-gray-700">{googlehindex}</td>
  //           <td className="px-4 py-2 text-gray-700">{scopushindex}</td>
  //           <td className="px-4 py-2 text-gray-700" rowSpan={3}>
  //             {new Date(date).getFullYear()}
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className="px-4 py-2 text-gray-700">Citations : </td>
  //           <td className="px-4 py-2 text-gray-700">
  //             {googlecitations || "-"}
  //           </td>
  //           <td className="px-4 py-2 text-gray-700">
  //             {scopuscitations || "-"}
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className="px-4 py-2 text-gray-700">Personal IF : </td>
  //           <td className="px-4 py-2 text-gray-700">-</td>
  //           <td className="px-4 py-2 text-gray-700">{googlepersonalif}</td>
  //         </tr>
  //       </React.Fragment>
  //     )
  //   );
  // };

  const awardsTable = handleAwards(awards);

  return (
    <div className=" select-none w-full">
      <FacultyHero />
      <section className=" mt-16">
        <div className="mx-auto px-4 py-2 lg:flex lg:items-center lg:flex-col">
          <div className="mx-auto text-center overflow-y-clip">
            <h1 className="bebas-font tracking-widest text-5xl font-extrabold lg:text-8xl">
              Awards
            </h1>
          </div>
        </div>
      </section>
      <div className="p-6 ">
        <div>{awardsTable}</div>
      </div>
      {/* Add hIndex section if needed */}
    </div>
  );
}
