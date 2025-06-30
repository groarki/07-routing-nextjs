import { getSingleNote } from "@/lib/api";
import NotesPreviewClient from "./NotesPreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePreview({ params }: Props) {
  const { id } = await params;
  const note = await getSingleNote(id);

  return <NotesPreviewClient note={note} />;
}
