export default async function ProductId ({
    params,
}: {
    params: Promise<{ productId: string }>
}) {
    const {productId} = (await params)
    return (
        <h1>Details about Product {productId}</h1>
    )
}


