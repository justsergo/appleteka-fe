import React from 'react';
import { Input } from './styles';
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

const TextField = ({label, id, required=false , ...texFieldProps}: Props)  => {
  return <Wrapper>
   { label&&<Label for={id} required={required}>{label}</Label>}
    <Input {...texFieldProps} id={id} />
  </Wrapper>
}

export default TextField
