import React from 'react'
import Link from '@material-ui/core/Link';
import '../../styles/Footer.scss'
export default function Copyright() {
  return (
    <div className ='footerContent'>
      {'Copyright © '}
      <Link color="inherit" href="https://www.airheadventures.com/">
        Airhead Ventures 
      </Link>{'  '}
       {new Date().getFullYear()}
      {'.'}
      </div>
  );
}

