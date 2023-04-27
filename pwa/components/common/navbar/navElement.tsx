import React from "react";
import PropTypes from "prop-types";

function NavElement(props: {text : string, link: string}) {
  return (
    <li>
      <a href={props.link} className="block py-2 pl-3 pr-4 text-rich_black rounded md:p-0 relative group">
        <span>{props.text}</span>
        <span className="absolute bottom-0.5 left-0 w-0 h-0.5 bg-rich_black transition-all group-hover:w-full"></span>
      </a>
    </li>
  );
}

NavElement.PropTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
}

NavElement.defaultProps = {
  text: "change this text",
  link: "/",
}
export default NavElement;
