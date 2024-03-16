import { useState } from "react";
import "./App.css";

function App() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [registerinfo, setinfo] = useState({
    FirstName: "",
    SurName: "",
    Email: "",
    PassWord: "",
    day: 0 || new Date().getDate(),
    Month: "" || month[new Date().getMonth()],
    Year: 0 || new Date().getFullYear(),
    Gender: "",
  });

  const years = [];

  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      years.push(i);
    }
  };
  getCurrentYear();

  const handleChange = (e) => {
    setinfo({
      ...registerinfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerinfo);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="First Name"
            name="FirstName"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Last Name"
            name="SurName"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="Email"
            name="Email"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            name="PassWord"
            onChange={handleChange}
          />
        </label>
        <h1>Date of Birth</h1>
        <label>
          <select onChange={handleChange} name="day">
            {Array.from({ length: 31 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <select onChange={handleChange} name="Month">
            {month.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select onChange={handleChange} name="Year">
            {years.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <div>
          <h1>Gender</h1>
          <label>
            Female
            <input
              type="radio"
              name="Gender"
              value="Female"
              onChange={handleChange}
            />
          </label>
          <label>
            male
            <input
              type="radio"
              name="Gender"
              value="Male"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default App;
