import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable';

import { Terminal } from './styles';

interface Props {
  language: string;
  value: any;
}

const CodeBlock = (props: Props) => {
  const { language, value } = props;
  return (
    <Terminal>
      <SyntaxHighlighter style={style} language={language}>
        {value}
      </SyntaxHighlighter>
    </Terminal>
  );
};

export default CodeBlock;
