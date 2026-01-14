import { notFound, redirect } from "next/navigation";

export default  async function ProductReview({
    params,
}: {
    params: Promise<{productId: string; reviewId: string}>

}) {
    const {productId, reviewId} = await params
    if (parseInt(reviewId) > 1000) {
        //notFound()
        redirect("/product")
        
    }


    return(
        <h1>Reviews {reviewId} for product {productId}</h1>
    )
}