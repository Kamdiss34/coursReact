import React from 'react'
import { useRouteError } from 'react-router-dom'
export default function PageError() {
    const error = useRouteError();
  return (
    <div>
        <h2>Il ya erreur</h2>

        <i> {error.statusText || error.message} </i>
    </div>
  )
}


