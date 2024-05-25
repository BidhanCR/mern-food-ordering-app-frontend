import { CityList } from "@/config/popularCities-config"
import { Card, CardHeader, CardTitle } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { ArrowRight } from "lucide-react";

type Props ={
    city: CityList;
}
const CityCard = ({city}:Props) => {
  return (
    <Card>
        <AspectRatio ratio={16/8}>
            <img src={city.imageUrl} className="w-full h-full object-cover rounded-t-lg"/>
        </AspectRatio>
        <CardHeader>
            <CardTitle className="flex justify-between items-center">
                {city.cityName}
                <ArrowRight/>
            </CardTitle>
        </CardHeader>
    </Card>
  )
}

export default CityCard