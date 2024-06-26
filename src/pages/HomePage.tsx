import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import PopularCities from "@/components/PopularCities";
import OwnerInvitation from "@/components/OwnerInvitation";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | FeastFlow</title>
      </Helmet>
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 z-20">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a take away today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          onSubmit={handleSearchSubmit}
          placeHolder="Search by city or Town"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the FeastFlow App for faster ordering and personalized
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
      <OwnerInvitation/>
      <PopularCities />
    </div>
  );
};

export default HomePage;
