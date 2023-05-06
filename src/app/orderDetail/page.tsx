import OrderDtail from "@/views/ordersDetail"
export default function Detailview(){
    return(
        <>
        {/* @ts-expect-error Server Component */}
        <OrderDtail />
        </>
    )
}