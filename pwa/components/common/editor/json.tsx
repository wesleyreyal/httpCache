import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { BaseButton } from 'components/common/button';
import { Textarea } from 'components/common/input';

type jsonSchemaEditorType = {
  json: object;
};

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

export const JsonEditor: React.FC<jsonSchemaEditorType> = ({ json }) => {
  const [value, setValue] = useState(json);
  const [plainMod, setPlainMod] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [text, setText] = useState('');

  useEffect(() => {
    setText(JSON.stringify(value, null, 4));
  }, [json, value]);

  const handleJsonChange = (event) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      try {
        setValue(JSON.parse(event.target.value));
      } catch (e) {
        // Le contenu n'est pas un JSON valide, ne faites rien
      }
    }, 3000);

    setTimeoutId(id);
  };

  return (
    <>
      <BaseButton
        onClick={() => setPlainMod(!plainMod)}
        text="Change to plain mode"
        className="absolute z-10 right-5 top-4"
      />
      {!plainMod ? (
        <ReactJson
          src={value}
          theme="summerfruit:inverted"
          onEdit={() => true}
          onDelete={() => true}
          onAdd={() => true}
        />
      ) : (
        <Textarea text={text} onChange={handleJsonChange} />
      )}
    </>
  );
};
