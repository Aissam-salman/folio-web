import type {SVGProps} from 'react';
import React from 'react';

const JsSvg = (props: SVGProps<SVGSVGElement>) => {

    return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor"
              d="M3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25m9 3.25a.75.75 0 0 1 .75.75v6A1.75 1.75 0 0 1 11 18H9.75a.75.75 0 0 1 0-1.5H11a.25.25 0 0 0 .25-.25v-6A.75.75 0 0 1 12 9.5m2 1.75c0-.966.784-1.75 1.75-1.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 16.25 18h-1.5a.75.75 0 0 1 0-1.5h1.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-.5A1.75 1.75 0 0 1 14 12.75z"></path>
    </svg>);
};

export default JsSvg;