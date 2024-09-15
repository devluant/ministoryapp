import createLesson from "@/server/actions/create-lesson"
import getLesson from "@/server/actions/get-lesson"
import CreateLessonButton from "./components/create-lesson-button"

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

                <form action={ createLesson }>
                    <input className="bg-neutral-950 text-neutral-50" type="text" name="title" placeholder="Title" />
                    <CreateLessonButton />
                </form>
            </div>
        )
    }
}