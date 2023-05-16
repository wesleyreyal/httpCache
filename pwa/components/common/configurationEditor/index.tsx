import React, { useEffect, useState } from 'react';
import { Tabbar } from '../tab';
import { JsonEditor } from '../editor';
import { Textarea } from '../input';

type configurationEditorType = {
  json: object;
  caddy: string;
};
export const ConfigurationEditor: React.FC<configurationEditorType> = ({ json, caddy }) => {
  const [focusedTab, setFocusedTab] = useState(0);
  const [editor, setEditor] = useState(<div></div>);

  useEffect(() => {
    switch (focusedTab) {
      case 0:
        setEditor(<JsonEditor json={json} />);
        break;
      case 1:
        setEditor(<Textarea text={caddy} />);
        break;
      case 2:
        //TODO replace with user-friendly editor
        setEditor(<div>user-friendly editor</div>);
        break;
    }
  }, [caddy, focusedTab, json]);

  return (
    <div className="w-full px-10">
      <Tabbar
        tabsName={['json', 'caddyfile', 'user-friendly']}
        className="ml-12"
        handleClick={(id) => setFocusedTab(id)}
      />
      <div className="w-full relative">{editor}</div>
    </div>
  );
};

export default ConfigurationEditor;
