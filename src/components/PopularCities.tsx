import { cityList } from "@/config/popularCities-config";
import { Link } from "react-router-dom";
import CityCard from "./CityCard";

const PopularCities = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl tracking-tight text-center mb-10">
        Popular Cities and many more
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cityList?.map((city) => (
          <Link to={`/search/${city.cityName}`}>
            <CityCard city={city} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
