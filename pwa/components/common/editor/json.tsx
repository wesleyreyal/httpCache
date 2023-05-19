import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { BaseButton } from '../button';
import { Textarea } from '../input';
import { useJsonContext } from '../../../context';

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

export const JsonEditor: React.FC = () => {
  const { getCurrentJSON, setJSON } = useJsonContext();
  const [currentJSON, setCurrentJSON] = useState(() => getCurrentJSON());
  const [plainMod, setPlainMod] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    setJSON(currentJSON);
  }, [currentJSON, setJSON]);

  const handleJsonChange = (event) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      try {
        setCurrentJSON(JSON.parse(event.target.value));
      } catch (e) {
        // Le contenu n'est pas un JSON valide, ne faites rien
      }
    }, 2000);

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
          src={currentJSON}
          theme="summerfruit:inverted"
          onEdit={() => true}
          onDelete={() => true}
          onAdd={() => true}
        />
      ) : (
        <Textarea text={JSON.stringify(currentJSON, null, 4)} onChange={handleJsonChange} />
      )}
    </>
  );
};
