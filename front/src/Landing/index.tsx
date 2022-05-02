import { Widget } from "components/Widget";
import "./styles.css";

export const Landing = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="header">
          <div className="header--brand" />

          <ul className="header--nav">
            <li className="nav--box" />
            <li className="nav--box" />
            <li className="nav--box" />
            <li className="nav--box" />
          </ul>

          <div className="header--profile">
            <div className="profile--box" />
            <div className="profile--box" />

            <div className="profile--avatar" />
          </div>
        </div>
      </header>

      <main>
        <div className="main">
          <div className="main--horizontal">
            <p>Experimente enviar um feedback de um bug na aplicação 🐛</p>
          </div>

          <div className="main--box" />
          <div className="main--box" />
          <div className="main--box" />
          <div className="main--box" />
          <div className="main--box" />
        </div>
      </main>

      <Widget />
    </div>
  );
};
