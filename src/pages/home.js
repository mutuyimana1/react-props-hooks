import react from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeLayout from "../components/homeLayout";
import { name, personalDetail } from "../constants";
import Button from "../components/button";

function Home() {
  return (
    // <HomeLayout>
    <div>
      <h2>Hello {name}</h2>
      <Button btnName="click" />
      <Button btnName="primary" />
      {/* <img src={img} /> */}
      <ul>
        <li>
          <Link to="/about">AboutUs</Link>
          <Link to="/contact">contactUs</Link>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>

          {personalDetail.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>{detail.name}</td>
              <td>{detail.age}</td>
              <td>{detail.gender}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
    // {/* </HomeLayout> */}
  );
}

export default Home;
