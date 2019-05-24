import React from 'react';
import Icon from './images/Icon';
const array = [
  {
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  },
  {
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  },
  {
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  },
  {
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  },
  {
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  }
];

const cutDescription = description => {
  return `${description.substring(0, 249)}...`;
};

export default () => (
  <div>
    <h1>Lista de charlas</h1>
    {array.map(item => (
      <div className="listChatDiv">
        <div>
          <span className="chatNameList">{item.name}</span>
          <div>
            <span className="chatStatusSpan">
              <Icon
                className="chatStatusIcon"
                width="20px"
                src={require('../images/icons/multiple-users.svg')}
              />{' '}
              {item.numMessages}
            </span>
            <span className="chatStatusSpan">
              <Icon
                className="chatStatusIcon"
                width="20px"
                src={require('../images/icons/chat-speech-bubbles.svg')}
              />{' '}
              {item.numUsers}
            </span>
            <span className="chatStatusSpan">
              <Icon
                className="chatStatusIcon"
                width="20px"
                src={require('../images/icons/calendar.svg')}
              />{' '}
              {item.creationDate.toLocaleDateString()}
            </span>
          </div>
        </div>
        <p>{cutDescription(item.description)}</p>
      </div>
    ))}
  </div>
);
