import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App ()
{
  const [ markdown, setMarkdown ] = useState( '# This is heading 1' );
  return (
    <main className="markdown">
      <section>
        <div className="title">
          <p>Markdown Editor</p>
          <a
            href="https://www.markdownguide.org/cheat-sheet"
            target="_blank" rel="noreferrer"
            className="link"
          >Guide</a>
        </div>
        <textarea
          className='input'
          value={ markdown }
          onChange={ ( e ) => setMarkdown( e.target.value ) }
        ></textarea>
      </section>
      <section>
        <p className="title">Markdown Preview</p>
        <ReactMarkdown className="result">{ markdown }</ReactMarkdown>
      </section>
    </main>
  );
}
export default App;