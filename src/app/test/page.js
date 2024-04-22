"use client"
import React from 'react'

const page = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resUserExists = await fetch("/test/api/test1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <div><a onClick={handleSubmit}>Add articles</a></div>
    )
}

export default page