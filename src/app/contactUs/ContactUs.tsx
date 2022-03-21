import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './static/css/styles.css'
import emailjs from '@emailjs/browser'

const ContactUs = () => {
  const { t } = useTranslation('common')
  const form = useRef<HTMLFormElement>(null)
  const sendEmail = (e: any) => {
    e.preventDefault()
    if (form.current !== null) {
      emailjs
        .sendForm(
          'Aplus_email_sender',
          'Aplus_contact_us_email',
          form.current,
          'gDL74LAKShvFoHvKk'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        fontSize: '50px !important',
      }}
    >
      <div className='contact-area'>
        <div className='contact-box'>
          <div className='contact-links'>
            <h2>{t('ContactUsComponent.title')}</h2>
            <div className='links'>
              <div className='link'>
                <a>
                  <img
                    src='https://i.postimg.cc/m2mg2Hjm/linkedin.png'
                    alt='linkedin'
                  />
                </a>
              </div>
              <div className='link'>
                <a>
                  <img
                    src='https://i.postimg.cc/YCV2QBJg/github.png'
                    alt='github'
                  />
                </a>
              </div>
              <div className='link'>
                <a>
                  <img
                    src='https://i.postimg.cc/W4Znvrry/codepen.png'
                    alt='codepen'
                  />
                </a>
              </div>
              <div className='link'>
                <a>
                  <img
                    src='https://i.postimg.cc/NjLfyjPB/email.png'
                    alt='email'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='contact-form-wrapper'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-item'>
                <input
                  type='text'
                  name='sender'
                  placeholder={t('ContactUsComponent.yourName')}
                  required
                />
              </div>
              <div className='form-item'>
                <input
                  type='text'
                  name='email'
                  placeholder={t('ContactUsComponent.email')}
                  required
                />
              </div>
              <div className='form-item'>
                <textarea
                  className=''
                  name='message'
                  placeholder={t('ContactUsComponent.textField')}
                  required
                ></textarea>
              </div>
              <button className='submit-btn'>
                {t('ContactUsComponent.button')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
