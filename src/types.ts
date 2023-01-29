export interface NoteType {
  id: string;
  author: string;
  message: string;
  date: Date;
}

export type NotesType = Record<string, NoteType>;