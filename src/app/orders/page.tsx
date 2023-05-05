import OrderView from "@/views/orderView";
export default function Orders() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <OrderView />
    </>
  );
}
