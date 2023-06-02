import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <a href="https://vitejs.dev" target="_blank">
          About us
        </a>
        <a href="https://react.dev" target="_blank">
          Services
        </a>
      </nav>
      <h1>Pesticide Product Chemistry Regulatory Consulting</h1>

      <p>
        I am an analytical chemist by training, having significant knowledge of
        the pesticide regulatory process in Canada, and of the Global joint
        review process, with emphasis on product chemistry.{" "}
      </p>
      <p>
        I worked as a pesticide residue chemist before joining Health Canada's
        Pest Management Regulatory Agency (PMRA). I evaluated chemistry data for
        all types of submissions for over 15 years as a senior scientific
        evaluator, and for two years I led the chemistry unit and the Formulants
        section, as a section head.
      </p>
      <p>
        I have helped companies prepare product chemistry packages to regulatory
        agencies to fulfill government requirements for pesticide product
        registration in Canada, the US and internationally. I am fully bilingual
        and can assist with French translation. I am a professional who is
        dedicated to providing a valued regulatory consulting service with
        respect to product chemistry.
      </p>
    </>
  );
}

export default App;
