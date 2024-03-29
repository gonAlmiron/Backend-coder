import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Ingresos',
    path: '/ingresos',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />,
//     cName: 'nav-text'
//   },
  {
    title: 'Clientes',
    path: '/clientes',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: 'nav-text'
//   },
  {
    title: 'Soporte',
    path: '/soporte',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];