import React from 'react';
import glamorous from 'glamorous'

const inputStyles = {
  boxSizing: 'border-box',
  display: 'block',
  backgroundColor: `'transparent'`,
  color: 'rgba(0,0,0,.87)',
  border: 'none',
  borderBottom: '1px solid rgba(0,0,0,.26)',
  outline: '0',
  width: '100%',
  padding: '0',
  boxShadow: 'none',
  borderRadius: '0',
  fontSize: '16px',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
  backgroundImage: 'none',
  ':focus':{
    borderBottom: '1px solid #4285F4',
    boxShadow: '0 1px 0 0 #4285F4',
  }
};

const FormCompoenet = glamorous.form({
  width: '100%',
  margin: '0 auto',
  fontSize: '16px',
});

const InputComponent = glamorous.input(inputStyles);
const SelectComponent = glamorous.select(inputStyles);

const LabelComponent = glamorous.label({
  fontSize: '16px',
  margin: '30px 0 30px 0',
  display: 'inline-block',
});


const ButtonComponent = glamorous.button({
  display: 'inline-block',
  lineHeight: '2',
  textAlign: 'center',
  verticalAlign: 'middle',
  fontSize: '100%',
  whiteSpace: 'nowrap',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '50px',
  textDecoration: 'none',
  paddingTop: 0,
  paddingBottom: 0,
  paddingRight: '1rem',
  paddingLeft: '1rem',
  backgroundColor: 'rgb(63,81,181)',
  color: 'white',
  height: '30px',
  width: '150px',
  borderRadius: '8px'
})


const componentFactory = (Compoent) => (props) => <Compoent {...props}/>

export const Form=componentFactory(FormCompoenet);

export const Input=componentFactory(InputComponent); 

export const Label=componentFactory(LabelComponent);

export const Button=componentFactory(ButtonComponent);

export const Select = componentFactory(SelectComponent);
