import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu.tsx";
import { Link } from "react-router-dom";
import { useGetMyOrders } from "@/api/OrderApi.ts";
const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { orders } = useGetMyOrders();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className={`font-bold hover:text-orange-500 ${orders?.length === 0 ? "hidden": "block"}`}
          >
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          className="font-bold hover:text-orange-500 hover:bg-white"
          variant="ghost"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
