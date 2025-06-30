import Modal from "@/components/Modal/Modal";
import { getSingleNote } from "@/lib/api";

type Props = {
    params: Promise<{ id: string }>;
  };
  
  export default async function NotePreview({ params }: Props) {
    const { id } = await params;
    const note = await getSingleNote(id);
      const close = () => {
          router.back()
      }
    return (
      <Modal>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </Modal>
    );
  }