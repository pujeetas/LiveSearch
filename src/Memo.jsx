import { useMemo, useState } from "react";
import "./App.css";

function Memo() {
  const [searchValue, setSearchValue] = useState("");

  const studentDetails = [
    {
      id: 1,
      firstName: "Rohan",
      age: 23,
    },
    {
      id: 2,
      firstName: "Shalini",
      age: 23,
    },
    {
      id: 3,
      firstName: "Mohan",
      age: 22,
    },
    {
      id: 4,
      firstName: "Abhishek",
      age: 21,
    },
    {
      id: 5,
      firstName: "Harshit",
      age: 24,
    },
    {
      id: 6,
      firstName: "Anupam",
      age: 24,
    },
    {
      id: 7,
      firstName: "Ankur",
      age: 24,
    },
    {
      id: 8,
      firstName: "Gargi",
      age: 24,
    },
  ];

  const filteredList = useMemo(() => {
    if (searchValue.trim() === "") {
      return studentDetails;
    }

    return studentDetails.filter((item) =>
      item.firstName.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          value={searchValue}
          className="border m-4 p-2"
          placeholder="Enter Name to search"
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>
      <div className="font-bold m-5 ">
        {filteredList.map((item) => (
          <div className="flex justify-center items-center" key={item.id}>
            {item.firstName}
          </div>
        ))}
      </div>
    </>
  );
}

export default Memo;
