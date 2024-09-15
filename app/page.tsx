import createLesson from "@/server/actions/create-lesson";
import getLesson from "@/server/actions/get-lesson";
import CreateLessonButton from "./components/create-lesson-button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default async function HomePage() {
  const { error, success } = await getLesson();
  if (error) throw new Error(error);

  if (success) {
    const lineElements = success.map((line) => {
      return <li key={line.id}>{line.title}</li>;
    });

    return (
      <div>
        <h1>HomePage</h1>
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <ul>{lineElements}</ul>

        <form action={createLesson}>
          <input
            className="bg-neutral-950 text-neutral-50"
            type="text"
            name="title"
            placeholder="Title"
          />
          <CreateLessonButton />
        </form>
      </div>
    );
  }
}
