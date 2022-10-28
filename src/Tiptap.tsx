import './styles.scss';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import Typography from '@tiptap/extension-typography';

import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

import { lowlight } from 'lowlight';

import React from 'react';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('cpp', cpp);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('ts', ts);

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex">
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`flex-none w-40 h-14 border-dashed border-2 border-sky-500 editor.isActive('codeBlock') ? 'is-active' : ''}`}
      >
        toggleCodeBlock
      </button>
      <button
        onClick={() => editor.chain().focus().setCodeBlock().run()}
        disabled={editor.isActive('codeBlock')}
        className="flex-none w-40 h-14 border-dashed border-2 border-sky-500"
      >
        setCodeBlock
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`flex-none w-40 h-14 border-dashed border-2 border-sky-500 editor.isActive('bold') ? 'is-active' : ''}`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`flex-none w-40 h-14 border-dashed border-2 border-sky-500 editor.isActive('italic') ? 'is-active' : ''}`}
      >
        italic
      </button>
    </div>
  );
};

const Tiptap: React.FC = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      StarterKit,
      Highlight,
      Typography,
      CodeBlockLowlight.configure({
        lowlight
      })
    ],

    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none'
      }
    },
    content: ''
  });

  return (
    <div className="min-h-screen border-2 border-current rounded-lg">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
