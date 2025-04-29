import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <div>
      404 Page not found
      <Link to="/">
        <Button>Home From Link</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage