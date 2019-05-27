import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Icon from './images/Icon';
import CustomButton from './buttons/CustomButton';
import postToAPI from '../apiCalls/postToAPI';
import CHATS_QUERY from '../apiCalls/chats.query';
import TextInput from './inputs/TextInput';
import TagInput from './inputs/TagInput';
import ADD_CHAT_MUTATION from '../apiCalls/addChat.mutation';

const CUSTOM_STYLE = {
  width: '50%'
};

const cutDescription = description => {
  if (description.length > 250) {
    return `${description.substring(0, 249)}...`;
  }
  return description;
};

const formattedDate = dateString => {
  const dateArray = dateString.split('-');
  return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
};

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      chatList: []
    };
    this.name = React.createRef();
    this.description = React.createRef();
    this.handleNewChatModal = this.handleNewChatModal.bind(this);
    this.saveChat = this.saveChat.bind(this);
    this.loadChats = this.loadChats.bind(this);
  }

  componentWillMount() {
    this.loadChats();
  }

  loadChats() {
    this.setState({ loading: true });
    postToAPI(CHATS_QUERY).then(res => {
      if (res && res.data && res.data.chats) {
        const {
          data: { chats }
        } = res;
        this.setState({ chatList: chats, loading: false });
      }
    });
  }

  handleNewChatModal() {
    this.setState(prevState => ({ openModal: !prevState.openModal }));
  }

  saveChat() {
    const name = this.name.current.input.current.value;
    const description = this.description.current.input.current.value;
    const { userId } = this.props;
    if (name && description) {
      postToAPI(ADD_CHAT_MUTATION, {
        userId,
        name,
        description,
        tags: []
      }).then(res => {
        console.log({ res });
        this.setState({ openModal: false });
        this.loadChats();
      });
    }
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
          <Modal isOpen={this.state.openModal} style={CUSTOM_STYLE} ariaHideApp={false}>
            <div>
              <TextInput
                ref={this.name}
                labelClassName="spanNewChat"
                inLine
                required
                label="Nombre"
                className="inputNewChat"
              />
              <br />
              <br />
              <TextInput
                ref={this.description}
                labelClassName="spanNewChat"
                inLine
                required
                label="Descripción"
                textArea
                rows={6}
                className="textareaNewChat"
              />
              <br />
              <br />
              <TagInput />
              <div className="btnSaveGroup">
                <CustomButton
                  text="Guardar"
                  className="createChat"
                  backgroundColor="#4ca540"
                  height={35}
                  fontSize={20}
                  borderRadius="10px"
                  onClick={this.saveChat}
                />
                <CustomButton
                  text="Cancelar"
                  className="createChat"
                  backgroundColor="rgb(183, 70, 62)"
                  height={35}
                  fontSize={20}
                  borderRadius="10px"
                  onClick={this.handleNewChatModal}
                />
              </div>
            </div>
          </Modal>
        </div>
        {this.state.loading && <span>Cargando...</span>}
        {this.state.chatList.map(item => (
          <div className="listChatDiv" key={item._id}>
            <div>
              <span className="chatNameList">{item.name}</span>
              <div>
                <span className="chatStatusSpan">
                  <Icon
                    className="chatStatusIcon"
                    width="20px"
                    src={require('../images/icons/multiple-users.svg')}
                  />{' '}
                  {item.numUsers}
                </span>
                <span className="chatStatusSpan">
                  <Icon
                    className="chatStatusIcon"
                    width="20px"
                    src={require('../images/icons/chat-speech-bubbles.svg')}
                  />{' '}
                  {item.numMessages}
                </span>
                <span className="chatStatusSpan">
                  <Icon
                    className="chatStatusIcon"
                    width="20px"
                    src={require('../images/icons/calendar.svg')}
                  />{' '}
                  {formattedDate(item.creationDateString)}
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

const mapStateToProps = props => ({
  userId: props && props.userId
});

export default connect(mapStateToProps)(Panel);
