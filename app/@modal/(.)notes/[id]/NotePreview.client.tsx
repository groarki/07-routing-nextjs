'use client';
import css from "./NotesPreview.client.module.css"
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import type { Note } from "@/types/note";

export default function NotesPreviewClient({ note }: { note: Note }) {
  const router = useRouter();
  const onClose = () => { router.back() }
  return (
    <Modal onClose={onClose}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button className={css.button} onClick={onClose}>Close</button>
    </Modal>
  );
}
