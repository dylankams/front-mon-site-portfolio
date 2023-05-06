import { Skills } from "../molecules/Skills";
import { Projects } from "./Projects";
import { NavBar } from "../molecules/NavBar";
import { Banner } from "../molecules/Banner";

export const FrontendLayout = () => {
  return (
    <>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
    </>
  );
};
