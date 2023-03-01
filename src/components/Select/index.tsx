import React from 'react';
import { SelectStyled } from './styles';
import { Label } from 'components/Label';
import { Wrapper } from 'components/Wrapper';

type Props = {
  type?: string;
  onChange: ()=>void;
  placeholder?: string;
  value: string;
  label?: string;
  id?: string;
  required?: boolean;
}

const Select = ({label, id, required=false , ...texFieldProps}: Props)  => {
  return <Wrapper>
   { label&&<Label for={id} required={required}>{label}</Label>}
    <SelectStyled {...texFieldProps} id={id} />
  </Wrapper>
}

export default Select
