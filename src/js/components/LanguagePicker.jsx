import React, { Component } from 'react';
import { Dropdown } from 'react-toolbox';

const languageConfig = [
  { value: 'en', iso: 'gb', name: 'English', englishName: 'English' },
  { value: 'cn', iso: 'cn', name: '简体中文', englishName: 'Simplified Chinese' },
  { value: 'mo', iso: 'mo', name: '繁体中文', englishName: 'Traditional Chinese' }
];

const languageTemplate = item => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row'
  };

  const iconStyle = {
    display: 'flex',
    width: '3rem',
    height: '3rem',
    marginRight: '1rem'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={containerStyle}>
      <span style={iconStyle} className={`flag-icon flag-icon-${item.iso}`}></span>
      <div style={contentStyle}>
        <strong>{item.name}</strong>
        <small>{item.englishName}</small>
      </div>
    </div>
  );
};

export default class LanguagePicker extends Component {
	constructor(props) {
		super(props);
		this.state = { languageSelected: 'en' };
	}

	render() {
		return (
      <Dropdown
        source={languageConfig}
        onChange={value => this.setState({ languageSelected: value })}
        label='Choose a language'
        template={languageTemplate}
        value={this.state.languageSelected} />
		);
	}
}
