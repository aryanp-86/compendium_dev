"use client";
import React, { useState, useEffect } from "react";
import { getFacultyData } from "@/api/dbfuntions";
import FacultyHero from "../Components/FacultyHero";
import Footer from "../Components/Footer";

export default function FacultyAchievement() {
  const [data, setData] = useState({
    awards: [],
    books: [],
    workshop: [],
    hIndex: [],
  });

  useEffect(() => {
    function handleAwards(awards) {
      const fwiseawards = {};
      const awardsTable = [];
      awards.forEach((award) => {
        const { name } = award;
        if (name in fwiseawards) fwiseawards[name].push(award);
        else fwiseawards[name] = [award];
      });
      for (const faculty in fwiseawards) {
        console.log(faculty);

        for (let i = 0; i < fwiseawards[faculty].length; i++) {
          const { name, awardname, awardingbody, date, type, place } =
            fwiseawards[faculty][i];
          const [year, month, day] = date
            .toISOString()
            .split("T")[0]
            .split("-");

          const formattedDate = `${day}-${month}-${year}`;
          if (i === 0) {
            awardsTable.push(
              <tr>
                <td
                  rowSpan={fwiseawards[faculty].length}
                  className="whitespace px-4 py-2 font-medium text-gray-900 "
                >
                  {name}
                </td>
                <td className=" px-4 py-2 text-gray-700 max-w-40">
                  {awardname}
                </td>
                <td className=" px-4 py-2 text-gray-700">{awardingbody}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {formattedDate}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {type}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {place}
                </td>
              </tr>
            );
          } else {
            awardsTable.push(
              <tr>
                {/* <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td> */}
                <td className=" px-4 py-2 text-gray-700 max-w-40">
                  {awardname}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 max-w-xs">
                  {awardingbody}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {formattedDate}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {type}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {place}
                </td>
              </tr>
            );
          }
        }
      }
      return awardsTable;
    }
    function handleBooks(books) {
      const booksTable = books.map(
        ({
          title,
          chapter,
          pauth,
          sauth,
          edition,
          publisher,
          place,
          date,
          isbnno,
        }) => {
          const [year, month, day] = date
            .toISOString()
            .split("T")[0]
            .split("-");

          const formattedDate = `${day}-${month}-${year}`;
          return (
            <tr>
              <td className=" px-4 py-2 text-gray-700">{title}</td>
              <td className=" px-4 py-2 text-gray-700">{chapter}</td>
              <td className=" px-4 py-2 text-gray-700">{pauth}</td>
              <td className=" px-4 py-2 text-gray-700">{sauth}</td>
              <td className=" px-4 py-2 text-gray-700">{edition}</td>
              <td className=" px-4 py-2 text-gray-700">{publisher}</td>
              <td className=" px-4 py-2 text-gray-700">{place}</td>
              <td className=" px-4 py-2 text-gray-700">{date.getFullYear()}</td>
              <td className=" px-4 py-2 text-gray-700 ">{isbnno}</td>
            </tr>
          );
        }
      );
      return booksTable;
    }
    function handleHIndex(hIndex) {
      const hIndexTable = hIndex.map(
        ({
          name,
          googlehindex,
          googlecitations,
          googlepersonalif,
          scopushindex,
          scopuscitations,
          date,
        }) => {
          return (
            <>
              <tr>
                <td className=" px-4 py-2 text-gray-700" rowSpan={3}>
                  {name}
                </td>
                <td className=" px-4 py-2 text-gray-700">H-Index :</td>
                <td className=" px-4 py-2 text-gray-700">{googlehindex}</td>
                <td className=" px-4 py-2 text-gray-700">{scopushindex}</td>
                <td className=" px-4 py-2 text-gray-700" rowSpan={3}>
                  {date?.getFullYear()}
                </td>
              </tr>
              <tr>
                <td className=" px-4 py-2 text-gray-700">Citations : </td>
                <td className=" px-4 py-2 text-gray-700">
                  {googlecitations || "-"}
                </td>
                <td className=" px-4 py-2 text-gray-700">
                  {scopuscitations || "-"}
                </td>
              </tr>
              <tr>
                <td>Personal IF : </td>
                <td>-</td>
                <td className=" px-4 py-2 text-gray-700">{googlepersonalif}</td>
              </tr>
            </>
          );
        }
      );
      console.log(hIndexTable);
      return hIndexTable;
    }
    function handleWorkshop(workshop) {
      const workshopTable = workshop.map(
        ({
          name, type, sponser, facultyname, date, place, subject, notracks, noparticipants
        }) => {
          return (
            <>
              <tr>
                <td className=" px-4 py-2 text-gray-700" rowSpan={1} colSpan={1}>
                  {name}
                </td>
                <td className=" px-4 py-2 text-gray-700">{type}</td>
                <td className=" px-4 py-2 text-gray-700">{sponser}</td>
                <td className=" px-4 py-2 text-gray-700">{facultyname}</td>
                <td className=" px-4 py-2 text-gray-700">
                  {date?.getFullYear()}
                </td>
                <td className=" px-4 py-2 text-gray-700">{place} </td>
                <td className=" px-4 py-2 text-gray-700">{subject} </td>
                <td className=" px-4 py-2 text-gray-700">{notracks} </td>
                <td className=" px-4 py-2 text-gray-700">{noparticipants} </td>
              </tr>
            </>
          );
        }
      );
      console.log(workshopTable);
      return workshopTable;
    }
    const callData = async () => {
      const res = await getFacultyData();
      console.log(res);
      const awardsTable = handleAwards(res.awards);
      const booksTable = handleBooks(res.books);
      const hIndexTable = handleHIndex(res.hIndex);
      const workshopTable = handleWorkshop(res.workshop);
      console.log(booksTable);
      setData((prev) => {
        return {
          ...prev,
          awards: awardsTable,
          books: booksTable,
          hIndex: hIndexTable,
          workshop: workshopTable,
        };
      });
    };

    return () => callData();
  }, []);
  return (
    <div className="faculty w-full">
      <FacultyHero />
      <section className="overflow-hidden mt-16">
        <div className="mx-auto  px-4 py-2 lg:flex lg:items-center lg:flex-col">
          <div className="mx-auto text-center overflow-y-clip">
            <h1 className="bebas-font tracking-widest text-5xl font-extrabold lg:text-8xl">
              Awards
            </h1>
          </div>
        </div>
      </section>
      <div className="flex flex-col p-12 ">
        <div className="rounded-lg">
          <div className="lg:overflow-x-clip rounded-md mt-8">
            <table className="min-w-full divide-x-2  text-lg border-r-2">
              <thead className="text-left border-4 border-slate-600">
                <tr className="underline underline-offset-4">
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Name
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Award
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Awarding Body
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Type
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Place
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800">{data.awards}</tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 flex items-center justify-center">
            <ol className="flex justify-end gap-5 text-lg text-center font-bold">
              <li>
                <a
                  href="#"
                  className="inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10  text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-12 rounded border-blue-600 bg-blue-600 text-center leading-10 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <section className="overflow-hidden mt-16">
        <div className="mx-auto  px-4 py-2 lg:flex lg:items-center lg:flex-col">
          <div className="mx-auto text-center overflow-y-clip">
            <h1 className="bebas-font tracking-widest text-5xl font-extrabold lg:text-8xl">
              Books Chapters Published
            </h1>
          </div>
        </div>
      </section>
      <div className="flex-col flex p-12">
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-clip rounded-md mt-8">
            <table className="min-w-full divide-x-2  text-lg border-r-2">
              <thead className="text-left border-4 border-slate-600">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Title
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Chapter
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Author
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Co-Author
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Edition
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Publisher
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Place
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    ISBN No.
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800">{data.books}</tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 flex items-center justify-center">
            <ol className="flex justify-end gap-5 text-lg text-center font-bold">
              <li>
                <a
                  href="#"
                  className="inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10  text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-12 rounded border-blue-600 bg-blue-600 text-center leading-10 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <section className="overflow-hidden mt-16">
        <div className="mx-auto  px-4 py-2 lg:flex lg:items-center lg:flex-col">
          <div className="mx-auto text-center overflow-y-clip">
            <h1 className="bebas-font tracking-widest text-5xl font-extrabold lg:text-8xl">
              H-Index
            </h1>
          </div>
        </div>
      </section>
      <div className="flex-col flex p-12">
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-clip rounded-md mt-8">
            <table className="divide-x-2 table-auto border-spacing-4 min-w-full text-lg border-r-2">
              <thead className="text-center border-4 border-slate-600">
                <tr>

                  <th className="whitespace-pre-wrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Google
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Scopus
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800 text-center">{data.hIndex}</tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 flex items-center justify-center">
            <ol className="flex justify-end gap-5 text-lg text-center font-bold">
              <li>
                <a
                  href="#"
                  className="inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10  text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-12 rounded border-blue-600 bg-blue-600 text-center leading-10 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <section className="overflow-hidden mt-16">
        <div className="mx-auto  px-4 py-2 lg:flex lg:items-center lg:flex-col">
          <div className="mx-auto text-center overflow-y-clip">
            <h1 className="bebas-font tracking-widest text-5xl font-extrabold lg:text-8xl">
              Workshops Organised
            </h1>
          </div>
        </div>
      </section>
      <div className="flex-col flex p-12">
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-clip rounded-md mt-8">
            <table className="divide-x-2 table-auto border-spacing-4 min-w-full text-lg border-r-2">
              <thead className="text-center border-4 border-slate-600">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Type
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Sponsors
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Faculty Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Dates
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Place
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Subject Area
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    No. of Tracks
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    No. of Participants
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800 text-center">{data.workshop}</tbody>
            </table>
          </div>
          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 flex items-center justify-center">
            <ol className="flex justify-end gap-5 text-lg text-center font-bold">
              <li>
                <a
                  href="#"
                  className="inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10  text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-12 rounded border-blue-600 bg-blue-600 text-center leading-10 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-12 rounded border border-gray-100 bg-white text-center leading-10 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>
      <Footer /></div>
  );
}
