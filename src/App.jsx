import { useState } from "react";
import "./App.css";

function App() {
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

  const [searchedList, setSearchedList] = useState(studentDetails);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      return setSearchedList(studentDetails);
    }
    const filteredList = studentDetails.filter((item) =>
      item.firstName.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedList(filteredList);
    console.log("Hello");
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          value={searchValue}
          className="border m-4 p-2"
          placeholder="Enter Name to search"
          onChange={handleSearch}
        ></input>
      </div>
      <div className="font-bold m-5 ">
        {searchedList.map((item) => (
          <div className="flex justify-center items-center" key={item.id}>
            {item.firstName}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
