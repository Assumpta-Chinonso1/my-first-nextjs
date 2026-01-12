export default async function Doc({
    params,
 }: {
    params: Promise<{slug: string[]}>

}){
    const {slug} = await params
    if (slug?.length === 2) {
        return(
            <h1>Viewing docs for feature {slug[0]} and concepts for {slug[1]} </h1>
        )
        
    } else if (slug?.length ===1) {
        return(
            <h1>viewing docs for feature {slug[0]} </h1>
        )
        
    }
    return <h1>This is Doc Page</h1>
}
