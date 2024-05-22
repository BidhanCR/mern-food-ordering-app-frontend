import { Order } from "@/types/types"
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props={
    order: Order;
}

const OrderStatusHeader = ({order}:Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);
    created.setMinutes(created.getMinutes() + order.restaurant.estimatedDeliveryTime);
  
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    
    return created.toLocaleTimeString(undefined, options);
  };

  const getOrderInfo = () => {
    return ORDER_STATUS.find((o)=> o.value === order.status) || ORDER_STATUS[0]
  }
  return (
    <>
    <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span>Order Status: {getOrderInfo().label}</span>
        <span>Expected By: {getExpectedDelivery()}</span>
    </h1>
    <Progress className="animate-pulse" value={getOrderInfo().progressValue}/>
    </>
  )
}

export default OrderStatusHeader