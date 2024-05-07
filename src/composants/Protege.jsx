import React from 'react'
import { Navigate } from 'react-router-dom';
export default function Protege({estConnect,children}) {
    if(!estConnect) return <Navigate to="/"/>;

    
    return (
    <div>
    {children}
   
    </div>
  )
}
