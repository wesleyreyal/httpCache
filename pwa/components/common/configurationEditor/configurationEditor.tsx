import React, { useEffect, useState } from 'react';
import { Tabbar } from '../tab';
import { JsonEditor } from '../editor';

type configurationEditorType = {
  json: object;
};
export const ConfigurationEditor: React.FC<configurationEditorType> = ({ json }) => {
  const [focusedTab, setFocusedTab] = useState(0);
  const [editor, setEditor] = useState(<div></div>);

  useEffect(() => {
    switch (focusedTab) {
      case 0:
        setEditor(<JsonEditor json={json} />);
        break;
      case 1:
        //TODO replace with caddyfile editor
        setEditor(<div>caddyfile editor</div>);
        break;
      case 2:
        //TODO replace with user-friendly editor
        setEditor(<div>user-friendly editor</div>);
        break;
    }
  }, [focusedTab, json]);

  console.log(editor);

  return (
    <div className="w-full px-10">
      <Tabbar
        tabsName={['json', 'caddyfile', 'user-friendly']}
        className="ml-12"
        handleClick={(id) => setFocusedTab(id)}
      />
      <div className="w-full relative p-2">{editor}</div>
    </div>
  );
};
