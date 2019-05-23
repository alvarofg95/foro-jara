import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  render() {
    const {
      type = 'text',
      placeholder,
      onChange,
      label = null,
      className,
      labelClassName,
      divClassName,
      newLine
    } = this.props;
    if (label) {
      return (
        <div className={divClassName}>
          <p className={labelClassName}>{label}</p>
          <input
            ref={this.input}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
          />
        </div>
      );
    }
    return <input ref={this.input} type={type} placeholder={placeholder} onChange={onChange} />;
  }
}
export default TextInput;
