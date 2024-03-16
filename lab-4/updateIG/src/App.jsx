import { useState } from "react";
import "./App.css";

function App() {
  const [dataProfile, setdataProfile] = useState({
    Name: "p_poomm.th",
    Username: "Poom",
    Bio: "UwU",
    Gender: "Male",
    image: null,
  });
  const [file, setFile] = useState(null);
  const [editDataProfile, seteditDataProfile] = useState({
    Name: "",
    Username: "",
    Bio: "",
    Gender: "",
  });

  const handleChange = (e) => {
    seteditDataProfile({ ...editDataProfile, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setdataProfile({
      Name: editDataProfile.Name || dataProfile.Name,
      Username: editDataProfile.Username || dataProfile.Username,
      Bio: editDataProfile.Bio || dataProfile.Bio,
      Gender: editDataProfile.Gender || dataProfile.Gender,
      image: file || dataProfile.image,
    });
  };

  return (
    <>
      <div>
        <h1>Name: {dataProfile.Name}</h1>
        <h1>Username : {dataProfile.Username}</h1>
        <h1>Bio : {dataProfile.Bio}</h1>
        <h1>Gender : {dataProfile.Gender}</h1>
        <h1>
          Image : {dataProfile.image ? dataProfile.image.name : "not have"}
        </h1>
      </div>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>
            <h1>Update Profile</h1>
            <input type="file" onChange={handleFile} />
          </label>
          <label>
            Name
            <input type="text" name="Name" onChange={handleChange} />
          </label>
          <label>
            Username
            <input type="text" name="Username" onChange={handleChange} />
          </label>

          <label>
            Bio
            <textarea
              name="Bio"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
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
              Male
              <input
                type="radio"
                name="Gender"
                value="Male"
                onChange={handleChange}
              />
            </label>
          </div>
          <button>Update</button>
        </form>
      </fieldset>
    </>
  );
}

export default App;
