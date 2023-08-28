import Markdown from "./Markdown";

function Italic({ text }: { text: string }) {
  return (
    <span className="italic">
      <Markdown text={text} />
    </span>
  );
}

export default Italic;
