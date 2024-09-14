import getLesson from "@/server/actions/get-lesson"

export default async function HomePage() {
    const { error, success }= await getLesson()
    if(error) throw new Error(error)
    
    if (success) {
        const lineElements = success.map(line => {
            return (<li key={line.id}>{ line.title }</li>)
        })

        return (
            <div>
                <h1>HomePage</h1>
                <ul>
                    { lineElements }
                </ul>
            </div>
        )
    }


        
}