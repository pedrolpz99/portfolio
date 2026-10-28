import Habilities from "../components/about/habilities.jsx";
import About from "../components/about/about.jsx";

export const metadata = {
  title: "About | Pedro López",
};

const Page = () => {
  return (
    <div>
      <About />
      <Habilities />
    </div>
  );
};

export default Page;
