import React from 'react'
import Link from 'next/link'

const CustomToggle = React.forwardRef(({ children,variant, onClick }, ref) => (
    <Link
    href="/"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={variant}
    >
       <a>
      {children}
      </a>
      
    </Link>
));
  export default CustomToggle;