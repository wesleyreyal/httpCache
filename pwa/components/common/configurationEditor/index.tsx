import React, { useEffect, useState } from 'react';
import { Tabbar } from 'components/common/tab';
import { JsonEditor } from 'components/common/editor';
import { JSONEditor } from 'components/common/editor/friendly';
import { JsonProvider } from 'context';

type ConfigurationEditorProps = {
  json: object;
};
export const ConfigurationEditor: React.FC<ConfigurationEditorProps> = ({ json }) => {
  const [focusedTab, setFocusedTab] = useState(0);
  const [editor, setEditor] = useState(<div></div>);

  useEffect(() => {
    switch (focusedTab) {
      case 0:
        setEditor(<JsonEditor />);
        break;
      case 1:
        setEditor(<JSONEditor />);
        break;
    }
  }, [focusedTab]);

  return (
    <div className="w-full px-10">
      <JsonProvider json={json}>
        <Tabbar tabsName={['json', 'user-friendly']} className="ml-12" handleClick={(id) => setFocusedTab(id)} />
        <div className="w-full relative">{editor}</div>
      </JsonProvider>
    </div>
  );
};

export default ConfigurationEditor;
