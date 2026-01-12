import { Metadata } from "next"
import { resolve } from "path";

type Props = {
    params: Promise<{productId: string}>
};

export const generateMetadata = async({params}: Props): Promise<Metadata> => {
    const id = (await params).productId
    const title = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`iphone ${id}`)
        })
    })
    return{
        title: `Product ${title}`
    }

}

export default async function ProductId ({params}: Props) {
    const {productId} = (await params)
    return (
        <h1>Details about Product {productId}</h1>
    )
}


