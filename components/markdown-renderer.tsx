import ReactMarkdown from "react-markdown";

const markdownContent = `
![Lentes AR](https://reactjs.org/logo-og.png)

[Más información](https://reactjs.org)
`;

export default function Page() {
  return (
    <ReactMarkdown
      components={{
        h1: ({ ...props }) => (
            <h1 className="size-10 text-red-800" {...props} />
          ),
          p: ({ ...props }) => (
            <h1 style={{ marginBottom: "4px" }} {...props} />
          ),
        a: ({ ...props }) => (
          <a style={{ color: "blue" }} target="_blank" rel="noopener noreferrer" {...props} />
        ),
        li: ({ ...props }) => (
          <li style={{ marginBottom: "4px" }} {...props} />
        ),
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
}
