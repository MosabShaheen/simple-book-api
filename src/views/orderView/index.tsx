"use client";

let check: any = [];
export async function Letsee() {
  const authToken = localStorage.getItem("authToken");
  try {
    const response = await fetch(`/api/tokenOrders`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Something went Wrong");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    alert(error);
  }
}

export default async function OrderView() {
  const maybe = await Letsee();
  let bookHtml: any;
  console.log(maybe.length);
  console.log(check.length);
  
  if (maybe.length === check.length) {
    return (
      <div>
        <h2 className="text-red-500 text-2xl text-center">
          You Don't have any Order Yet!
        </h2>
      </div>
    );
  } else {
    bookHtml = maybe.map((item: any) => {
        return (
          <div className="quote flex justify-between">
            <span key={item.id}>Order Id: {item.id}</span>
            <span key={item.id}>Book Id: {item.bookId}</span>
            <span key={item.id}>Quantity: {item.quantity}</span>
            <span key={item.id}>Timestamp: {item.timestamp}</span>
            <span key={item.id}>- {item.customerName}</span>
          </div>
        );
      });
    return (
      <>
        <div>{bookHtml}</div>
      </>
    );
  }
}
