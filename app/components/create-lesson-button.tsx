"use client"

import { useFormStatus } from "react-dom"

export default function CreateLessonButton() {
    const status = useFormStatus()
    return (
        <button disabled={ status.pending } type="submit">Submit</button>
    )
}