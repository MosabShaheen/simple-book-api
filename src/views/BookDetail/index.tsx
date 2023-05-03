import { API_BASE_URL } from "@/utils";
import Link from "next/link";
const getBooksList = async (id: number) => {  
  const res = await fetch(`${API_BASE_URL}/books/${id}`);
  if (!res.ok) {
    throw new Error("Something went worng");
  }
  return res.json();
};


export default async function BookDetail({
  params,
}: {
  params: { id: number };
}) {
  const book = await getBooksList(params.id);
  
  return (
    <div className="text-center">
      <h2>{book?.name}</h2>
      <p>Author : {book?.author}</p>
      <p>Isbn : {book?.isbn ?? "No isbn"}</p>
      <p>Price : {book?.price}</p>
      <p>Current-Stock : {book["current-stock"]}</p>
      <Link href="/submitOrder">
        <button className="mt-3 bg-green-700 font-medium rounded-md text-sm text-white p-2 ">
          Order
        </button>
      </Link>
    </div>
  );
}
