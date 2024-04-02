import SearchBar from "../../components/searchBar/SearchBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
            omnis ea blanditiis, sequi maxime! Architecto eveniet odio
            repudiandae dignissimos nesciunt officiis, facilis ullam harum
            veritatis deserunt at itaque rerum.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Exprience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
