import React from 'react';

type FormProps =  {
    onSubmit: React.FormEventHandler;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

export default Form;
