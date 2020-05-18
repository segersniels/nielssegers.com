import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface Props {
  language: string;
  value: any;
}

const CodeBlock = (props: Props) => {
  const { language, value } = props;
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default CodeBlock;
