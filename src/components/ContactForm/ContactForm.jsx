import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  contactValidation = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;

    const namesContact = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const numbersContact = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (namesContact.includes(name) || numbersContact.includes(number)) {
      alert(`${name}${number} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter all data');
      return true;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.setState({ name: '', number: '' });

    if (this.contactValidation()) {
      return;
    }

    this.props.onSubmit(name, number);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Сontact name"
            onChange={this.handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="Сontact number"
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
