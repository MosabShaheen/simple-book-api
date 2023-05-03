import BookDetail from "@/views/BookDetail"
import { Yes } from "@/views/order"
export default async function getBookDetail(props:any){
    return(
        <div>
            {/* @ts-expect-error Server Component */}
            <BookDetail {...props}/>
            {/* @ts-expect-error Server Component */}
            <Yes {...props} />
        </div>
    )
}