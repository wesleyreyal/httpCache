import React, {useState} from "react";
import {Block} from "./block";
import {Icon} from "../icon";
import {Subdomain} from "./subdomain";
import {EditBlock} from "./editBlock";
import {Popup} from "../popup";

type domainBlockProps = {
  number: number,
  name: string,
  countConfiguration: number,
}
export const DomainBlock: React.FC<domainBlockProps> = ({number,name, countConfiguration}) => {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClickPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      {showPopup && (
        <div>
          <Popup
            iconName="check"
            text="Your changes have been saved!"
            success={true}
          />
        </div>
      )}
      <Block className="flex-col px-4 " children={
        <>
          <section className="w-full flex justify-between items-center font-medium px-6" onClick={() => setOpen(!open)}>
            <div className="w-1/4">{number}</div>
            <div className="w-1/4">{name}</div>
            <div className="w-1/4">{countConfiguration} configurations</div>
            <Icon name='arrow-down' addedClass={`${open ? 'transform transition duration-500 ease-in-out rotate-0' : 'transform transition duration-500 ease-in-out rotate-90'}`} />
          </section>
          <section className={`w-full  text-center ${ open
            ? 'transform transition duration-1000 ease-in-out'
            : 'transform transition duration-1000 ease-in-out h-0 overflow-hidden'}`}>
            <div className={'mt-2 items-center gap-y-4 grid grid-cols-4' + `parent grid-rows-${5 + 1}`}>
              <div className="div2">zone</div>
              <div className="div3">ip</div>
              <div className="div4">configuration</div>
              <div className="div5"></div>
              <Subdomain ip="127.0.0.1" zone="www" showPopup={handleClickPopup} />
              <Subdomain ip="10.0.0.1" zone="org" showPopup={handleClickPopup}/>
              <Subdomain ip="127.255.0.1" zone="net" showPopup={handleClickPopup}/>
            </div>
            <EditBlock />
          </section>
        </>
      } />
    </>
  );
}
