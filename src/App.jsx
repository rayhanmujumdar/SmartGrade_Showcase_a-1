import BannerImage from "./components/BannerImage";
import BannerTitle from "./components/BannerTitle";
import ResultTableBody from "./components/ResultTableBody";
import ResultTableHead from "./components/ResultTableHead";
import SearchBox from "./components/SearchBox";
import StudentTitle from "./components/StudentTitle";
import Footer from "./components/Footer";
import Hero from "./components/layouts/Hero";
import Main from "./components/layouts/Main";
import Navbar from "./components/Navbar";
import SearchBarContainer from "./components/layouts/SearchBarContainer";
import Student from "./components/layouts/Student";
import StudentTableContainer from "./components/layouts/StudentTableContainer";

function App() {
  return (
    <Main>
      {/* navbar section */}
      <Navbar />
      {/* Hero Section */}
      <Hero>
        <BannerImage />
        <BannerTitle />
      </Hero>
      {/* Student Result section */}
      <Student>
        <SearchBarContainer>
          <StudentTitle />
          <SearchBox />
        </SearchBarContainer>
        <StudentTableContainer>
          <ResultTableHead />
          <ResultTableBody />
        </StudentTableContainer>
      </Student>
      {/* Footer section */}
      <Footer></Footer>
    </Main>
  );
}

export default App;
