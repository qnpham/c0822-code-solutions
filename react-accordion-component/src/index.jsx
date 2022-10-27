import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';
const topics = [
  {
    id: 1,
    name: 'Hypertext Markup Language',
    info: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. '
  },
  {
    id: 2,
    name: 'Cascading Style Sheets',
    info: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    id: 3,
    name: 'JavaScript',
    info: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.'
  }
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion topics={topics}/>);
