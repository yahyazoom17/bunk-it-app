import ClassCard from "../components/Cards/ClassCard";
import Navtabs from "../components/Navbar/Navtabs";
const Home = () => {
  return (
    <>
      <Navtabs />
      <div className="w-full max-w-4xl">
        <div className="p-3 mx-3 text-xl manrope font-extrabold">
          {"October 3, Friday - 2025"}
        </div>
        <ClassCard />
      </div>
    </>
  );
};

export default Home;
