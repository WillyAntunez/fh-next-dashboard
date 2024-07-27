import { CartCounter } from "@/app/shopping-cart/components";

export const metadata = {
  title: "Counter Page",
  descriotion: "Un simple contador",
};

export const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter value={20} />
    </div>
  );
};

export default CounterPage;
