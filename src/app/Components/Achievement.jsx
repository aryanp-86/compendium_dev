import React from "react";

export default function Achievement({ award }) {
  const {
    event_name,
    team_members,
    event_date,
    position_won,
    level,
    prize_amount,
    event_photos,
  } = award;

  const [dyear, month, day] = event_date.toISOString().split("T")[0].split("-");

  const formattedDate = `${day}-${month}-${dyear}`;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6  rounded-lg shadow-md bg-black">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={event_photos}
          alt={event_name}
          className="w-full md:w-[26rem]  h-auto rounded-lg object-cover shadow-sm"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {event_name}
            </h3>
            <p className="mt-2 text-lg text-white">
              Event Date: {formattedDate}
            </p>
            <p className="mt-2 text-base text-white">Level: {level}</p>
            <p className="mt-2 text-base text-white">
              Position Won: {position_won}
            </p>
            {prize_amount && (
              <p className="mt-2 text-base text-white">
                `Prize Amount: ${prize_amount}`
              </p>
            )}
            <p className="mt-2 text-base text-white">
              Team Members: {team_members}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
