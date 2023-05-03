import Image from "next/image";
import Books from "@/views/Books";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Books />
    </div>
  );
}
