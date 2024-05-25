import { Button } from "@/components/ui/button";
import restaurantImage from "./../assets/restaurant.jpeg";
import { useAuth0 } from "@auth0/auth0-react";
const OwnerInvitation = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return null;
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4">
        <div className="space-y-3">
          <h2 className="text-3xl">Are you a Restaurant Owner ?</h2>
          <p className="text-xl">
            Sign up today to start increasing your online presence and <br />
            generating more sales for your restaurant.
          </p>

          <Button
            className="bg-orange-500 mt-4"
            onClick={async () => await loginWithRedirect()}
          >
            Join with Us
          </Button>
        </div>
        <div>
          <img
            src={restaurantImage}
            className="h-full w-full object-cover rounded-lg"
            alt="restaurant"
          />
        </div>
      </div>
    );
  }
};

export default OwnerInvitation;
