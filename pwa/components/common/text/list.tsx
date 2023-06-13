import React from 'react';

type listPropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
export const List: React.FC<listPropsType> = ({ ...props }) => <ul {...props}>{props.children}</ul>;
