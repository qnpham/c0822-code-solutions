import React from 'react';
import * as ReactDom from 'react-dom/client';
function CustomButton(props) {
  return <button>{props.text}</button>;
}
const element = (
<div>
  <CustomButton text = 'I' />
  <CustomButton text = 'know' />
  <CustomButton text = 'React!' />
</div>
);

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(element);
