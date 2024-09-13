export default function LessonLayout(props : {
    children: React.ReactNode 
}) {
    return (
        <div>
            <h1>Lesson Layout</h1>
            <div>{ props.children }</div>
        </div>
    )
}