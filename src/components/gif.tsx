import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    display: flex;
    margin: 10px;
    flex: 1;
    max-width: fit-content;
`;

interface GifImageProps {
    title: string;
    url: string;
};

const GifImage = ({title, url}: GifImageProps) => {
  return (
    <Img src={url} alt={title} className='gif-image'/>
  );
}

export default GifImage;
