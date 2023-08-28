import Markdown from "./Markdown";

function Bold({ text }: { text: string }) {
  return (
    <span className="font-semibold">
      <Markdown text={text} />
    </span>
  );
}

export default Bold;
