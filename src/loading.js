import React from 'react';

export default function Loading (){
  const paragraphs = Array.from({ length: 1000 }, (_, index) => (
    <p key={index}>This is paragraph {index + 1}</p>
  ));

  return <div>{paragraphs}</div>;
};

