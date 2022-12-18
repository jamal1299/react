
import React from "react";
import Common from './Common'
import landing from '../src/img/landing.jpg';
import contact from '../src/img/con3.jpg';
import team from '../src/img/team2.jpg';
import { Routes,Route } from "react-router-dom";
import Career from "./Career";


function App() {
  return (
    <>
    <Routes>
      <Route index element={<Common wellcome="WELLCOME TO SOFTWARE " world="WORLD" img={landing} btntext="Read More" para1="Some great placeholder content for the first featurette here. Imagine some exciting prose here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, ullam exercitationem odit accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique,  odit accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique. odit accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique." />} />
      <Route path="/About" element={<Common wellcome="WE ARE ..... " world="DEVELOPERS" img={team} btntext="Hire" para1="Some great placeholder content for the first featurette here. Imagine some exciting prose here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, ullam exercitationem odit accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique ,accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique. odit accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique." />}  />
      <Route path="/Career" element={<Career />}  />
      <Route path="/Contact" element={<Common wellcome="FEEL FREE TO " world="CONTACT US" img={contact} btntext="Contact us"  para1="Some great placeholder content for the first featurette here. Imagine some exciting prose here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, ullam exercitationem odit accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique, accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique. odit accusantium quae excepturi explicabo aspernatur omnis molestiae quibusdam incidunt vitae impedit consequatur similique." />}  />
      <Route Path="*" element={<Common />} />
    </Routes>





    
    </>
  );
}

export default App;
