import React from  'react';

function ButtonLink(props) {
// props é um objeto 
// props => {className: "O que alguém passar", href: ""}
console.log(props)
  return(
    <a className={props.className} href={props.href}>
        {props.children}
    </a>
);
}

export default ButtonLink;