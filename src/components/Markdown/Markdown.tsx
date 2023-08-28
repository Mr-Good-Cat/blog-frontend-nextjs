import Bold from "./Bold";
import Italic from "./Italic";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Link from "next/link";

const SEPARATOR_TEMPLATE = "| $& |";
const SEPARATOR = "|";

const rules = [
  [/~([^~]+\n?)~/g, '{"text": "$1"}', Paragraph],
  [/\*([^*]+)\*/g, '{"text": "$1"}', Bold],
  [/_([^_`]+)_/g, '{"text": "$1"}', Italic],

  [
    /!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g,
    '{"src": "$1", "alt": "$2", "title": "$3"}',
    Image,
  ],
  [
    /[^!]\[([^\]]+)]\(([^)]+)\)/g,
    '{"children": "$1", "href": "$2", "className": "text-blue-400 hover:text-blue-200"}',
    Link,
  ],
];

const parse = (description: string): React.ReactNode[] | string => {
  let html = description;

  for (const [rule, jsonProps, Component] of rules) {
    // @ts-ignore
    if (html.match(rule)) {
      // @ts-ignore
      html = html.replace(rule, SEPARATOR_TEMPLATE);

      return html
        .split(SEPARATOR)
        .filter((s) => !!s)
        .map((s, index) => {
          // @ts-ignore
          const found = s.match(rule);

          if (found) {
            // @ts-ignore
            const props = JSON.parse(s.replace(rule, jsonProps));
            // @ts-ignore
            return <Component key={index} {...props} />;
          }

          return parse(s);
        });
    }
  }

  return html;
};

function Markdown({ text }: { text: string }) {
  return parse(text);
}

export default Markdown;
