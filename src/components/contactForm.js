import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <section className=' flex justify-center md:w-1/2'>
        <form
          className='px-10 mx-auto w-full md:w-7/12'
          name='contact'
          method='post'
          action='/contact/'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type='hidden' name='form-name' value='contact' />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name='bot-field' onChange={this.handleChange} />
            </label>
          </div>

          <div className='mt-10'>
            <input
              className='rounded w-full'
              type={'text'}
              name={'name'}
              placeholder='Name'
              onChange={this.handleChange}
              id={'name'}
              required={true}
            />
          </div>

          <div className='mt-8'>
            <input
              className='rounded w-full'
              placeholder='Email'
              type={'email'}
              name={'email'}
              onChange={this.handleChange}
              id={'email'}
              required={true}
            />
          </div>

          <div className='mt-8'>
            <textarea
              className=' rounded w-full'
              name={'message'}
              placeholder='Message'
              onChange={this.handleChange}
              id={'message'}
              required={true}
            />
          </div>
          <div className='mt-5 mb-10'>
            <button
              className='bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
      </section>
    );
  }
}
