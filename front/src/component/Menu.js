import React from 'react';
import ProfileInfo from './ProfileInfo';

export default () => (
  <div className="menuDiv">
    <ProfileInfo />
    <ul>
      <li>PERFIL</li>
      <li>CONFIGURACIÓN</li>
      <li>AMIGOS</li>
      <li>MULTIMEDIA</li>
      <li>CERRAR SESIÓN</li>
    </ul>
  </div>
);
