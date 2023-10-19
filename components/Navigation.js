import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/" passHref>
            <CustomA>Hjem</CustomA>
          </Link>
        </li>
        <li>
          <Link href="/quiz"><a className="first">Quiz</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;