"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/api/dbfuntions";

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
    const callData = async () => {
      const res = await getData();
      console.log(res);
      const awardsTable = handleAwards(res.awards);
      const booksTable = handleBooks(res.books);
      const hIndexTable = handleHIndex(res.hIndex);
      console.log(booksTable);
      setData((prev) => {
        return {
          ...prev,
          awards: awardsTable,
          books: booksTable,
          hIndex: hIndexTable,
        };
      });
    };

    return () => callData();
  }, []);
  return (
    /**{
    "srno": 1,
    "name": "Dr G D Bhutkar",
    "googlehindex": 15,
    "googlecitations": 577,
    "googlepersonalif": 5,
    "scopushindex": 5,
    "scopuscitations": 9,
    "date": "2023-08-28T18:30:00.000Z"
} */
    <div>
      <div className="p-5">
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-auto rounded-t-md">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Award
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Awarding Body
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Type
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Place
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">{data.awards}</tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
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
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
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
      <div className="p-5">
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-clip rounded-t-md">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
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
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Place
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    ISBN No.
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">{data.books}</tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
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
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
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
      <div className="p-5">
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-clip rounded-t-md">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    google
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    scopus
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    date
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">{data.hIndex}</tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
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
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
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
    </div>
  );
}
