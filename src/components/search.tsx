import React from 'react';
import Section from '../elements/section';
import Input from '../elements/input';

interface SearchProps {
    onSearch: (value: string) => void;
    value: string;
};

const Search = ({value, onSearch}: SearchProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onSearch(val);
    };
  return (
    <Section>
        <Input type='text' onChange={onChange} value={value} placeholder={'Please, use me.'} />
    </Section>
  );
}

export default Search;
