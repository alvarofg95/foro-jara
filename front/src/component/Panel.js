import React, { Component } from 'react';
import Icon from './images/Icon';
import CustomButton from './buttons/CustomButton';
import TextInput from './inputs/TextInput';

const array = [
  {
    id: 1,
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  },
  {
    id: 3,
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  },
  {
    id: 4,
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  },
  {
    id: 5,
    name: 'Nombre Charla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numMessages: 500,
    numUsers: 123,
    creationDate: new Date()
  },
  {
    id: 6,
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

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };

    this.handleNewChatModal = this.handleNewChatModal.bind(this);
  }

  handleNewChatModal() {
    this.setState(prevState => ({ openModal: !prevState.openModal }));
  }

  render() {
    return (
      <div className="panelDiv">
        <div className="createChatDiv">
          <CustomButton
            text="Crear charla"
            className="createChat"
            backgroundColor="#4ca540"
            height={35}
            fontSize={20}
            borderRadius="10px"
            onClick={this.handleNewChatModal}
          />
        </div>
        {array.map(item => (
          <div className="listChatDiv" key={item.id}>
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
  }
}
export default Panel;
