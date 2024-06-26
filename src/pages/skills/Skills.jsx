import "./skills.css";
import Nav from "../../component/Nav";
const Skills = () => {
  return (
    <div>
      <Nav />
      <div className="skill-content">
        <div className="section">
          <p className="title">Languages</p>
          <div className="items">
            <p className="item">Javascript</p>
            <p className="item">Typescript</p>
            <p className="item">C/C++</p>
          </div>
        </div>
        <div className="section">
          <p className="title">Mobile</p>
          <div className="items">
            <p className="item">React Native</p>
            <p className="item">Zustand</p>
          </div>
        </div>
        <div className="section">
          <p className="title">Web</p>
          <div className="items">
            <p className="item">ReactJS</p>
            <p className="item">Redux</p>
            <p className="item">NodeJS</p>
            <p className="item">Tailwind CSS</p>
            <p className="item">Bootstrap</p>
            <p className="item">HTML & CSS</p>
          </div>
        </div>
        <div className="section">
          <p className="title">Database</p>
          <div className="items">
            <p className="item">MySQL</p>
            <p className="item">Redis</p>
            <p className="item">MongoDB</p>
          </div>
        </div>
        <div className="section">
          <p className="title">Tools & Others</p>
          <div className="items">
            <p className="item">Firebase</p>
            <p className="item">Figma</p>
            <p className="item">AWS EC2 & S3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
