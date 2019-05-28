import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import postToAPI from '../apiCalls/postToAPI';
import CHAT_QUERY from '../apiCalls/chat.query';
import Icon from '../component/images/Icon';
import { formattedDate } from '../utils';
import TextInput from '../component/inputs/TextInput';

const messages = [
  {
    text: 'Holaaaaa 1',
    user: 'alvarofg95'
  },
  {
    text: 'Holaaaaa 2',
    user: 'alvarofg95'
  },
  {
    text: 'Holaaaaa 3',
    user: 'alvarofg95'
  },
  {
    text: 'Holaaaaa 4',
    user: 'alvarofg95'
  },
  {
    text: 'Holaaaaa 5',
    user: 'alvarofg95'
  },
  {
    text: 'Holaaaaa 6',
    user: 'alvaro12'
  }
];

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.message = React.createRef();
    this.loadChatInfo = this.loadChatInfo.bind(this);
    this.goBack = this.goBack.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentWillMount() {
    this.loadChatInfo();
  }

  loadChatInfo() {
    postToAPI(CHAT_QUERY, { slug: this.props.slug }).then(res => {
      const {
        data: { chat }
      } = res;
      this.setState({ data: chat });
    });
  }

  goBack() {
    this.setState({ goBack: true });
  }

  sendMessage() {
      const message = this.message.current.input.current.value;
      console.log({ message})
  }

  render() {
    console.log({ props: this.props });
    if (this.state.goBack) {
      return <Redirect to="/" />;
    }
    if (this.state.data) {
      const { name, description, numUsers, numMessages, creationDateString } = this.state.data;
      return (
        <div>
          <div className="flex chatTitle">
            <Icon
              button
              onClick={this.goBack}
              width="10%"
              height="50px"
              src={require('../images/icons/go-back.svg')}
            />
            <h3 className="chatTitleH3">{name}</h3>
            <div className="chatStatus">
              <span className="chatStatusSpan">
                <Icon
                  className="chatStatusIcon"
                  width="20px"
                  src={require('../images/icons/multiple-users.svg')}
                />{' '}
                {numUsers}
              </span>
              <span className="chatStatusSpan">
                <Icon
                  className="chatStatusIcon"
                  width="20px"
                  src={require('../images/icons/chat-speech-bubbles.svg')}
                />{' '}
                {numMessages}
              </span>
              <span className="chatStatusSpan">
                <Icon
                  className="chatStatusIcon"
                  width="20px"
                  src={require('../images/icons/calendar.svg')}
                />{' '}
                {formattedDate(creationDateString)}
              </span>
            </div>
          </div>
          <div>
            {messages.map(mes => (
              <p className={mes.user === this.props.nick ? 'myMessage' : 'message'}>
                {mes.text} <span>{mes.user}</span>
              </p>
            ))}
          </div>
          <div className="sendDiv flex">
            <TextInput textArea rows={2} ref={this.message} placeholder="Escribe tu mensaje" />
            <Icon
              button
              onClick={this.sendMessage}
              width="10%"
              height="50px"
              src={require('../images/icons/send-button.svg')}
            />
          </div>
        </div>
      );
    }
    return <span>Loading...</span>;
  }
}

const mapStateToProps = props => ({
  nick: props && props.nick
});

export default connect(mapStateToProps)(Chat);
