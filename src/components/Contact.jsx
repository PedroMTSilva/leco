import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import $ from 'jquery';
import data from '../config.json'

const smtp_service = process.env.REACT_APP_SMTP_SERVICE
const smtp_template = process.env.REACT_APP_SMTP_TEMPLATE
const smtp_publicId = process.env.REACT_APP_SMTP_PUBLIC_ID
const contactData = data.pt.contact

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    let emailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
    if (email.match(emailPattern) && message!="") {
      emailjs.sendForm(smtp_service, smtp_template, form.current, smtp_publicId)
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            // console.log(error.text);
        });
        e.target.reset()
    } else {
      if (!email.match(emailPattern)) {
        $("#email").removeClass("bg-gray-50 border border-gray-300 dark:bg-warm-gray-800 dark:border-warm-gray-600")
        $("#email").addClass("bg-red-50 border border-red-300 dark:bg-red-900 dark:border-red-700")
      }
      if (message=="") {
        $("#message").removeClass("bg-gray-50 border border-gray-300 dark:bg-warm-gray-800 dark:border-warm-gray-600")
        $("#message").addClass("bg-red-50 border border-red-300 dark:bg-red-900 dark:border-red-700")
      }
    }
    $("#email").on("focus",function() {
      $("#email").removeClass("bg-red-50 border border-red-300 dark:bg-red-900 dark:border-red-700")
      $("#email").addClass("bg-gray-50 border border-gray-300 dark:bg-warm-gray-800 dark:border-warm-gray-600")
    })
    $("#message").on("focus",function() {
      $("#message").removeClass("bg-red-50 border border-red-300 dark:bg-red-900 dark:border-red-700")
      $("#message").addClass("bg-gray-50 border border-gray-300 dark:bg-warm-gray-800 dark:border-warm-gray-600")
    })
  }
  
  return (
    <div name='contact' className="w-full px-8 mb-32 pt-[10%] dark:bg-warm-gray-900">
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        <div className='flex flex-col justify-center items-center'>
          <div className='basis-1/5'></div>
          <div className='basis-3/5'>
            <p className='dark:text-warm-gray-50 lg:text-8xl md:text-8xl sm:text-5xl text-3xl font-black text-center border-b-4 lg:border-b-8 md:border-b-8 border-yellow-400'>{contactData.title}</p>
          </div>
          <div className='basis-1/5'></div>
        </div>
        <div className='flex flex-col justify-center items-center mt-8'>
          <div className='basis-1/5'></div>
          <div className='basis-3/5'>
            <p className='dark:text-warm-gray-50 lg:text-xl md:text-xl sm:text-lg text-md font-medium text-center'>{contactData.text}</p>
          </div>
          <div className='basis-1/5'></div>
        </div>
        {/* TODO: Send message */}
        <div className="max-w-[1000px] w-full px-8 mt-16">
          <div className="bg-white text-black dark:bg-warm-gray-700 dark:text-white rounded-md shadow-md p-4 text-left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative p-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{contactData.text_email}</label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pt-7 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-warm-gray-800 dark:border-warm-gray-600 dark:placeholder-warm-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={contactData.text_email_input} name='email' id='email'/>
              </div>
              <div className="p-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{contactData.text_message}</label>
                <textarea rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-warm-gray-800 dark:border-warm-gray-600 dark:placeholder-warm-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={contactData.text_message_input} name='message' id='message'></textarea>
              </div>
              <div className="flex justify-end mt-2">
                <button type='submit' className='rounded-md bg-blue-500 hover:bg-blue-600 duration-100 text-white p-3'>
                  <div className='flex items-center justify-center'>
                    <svg className="fill-white w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
                    <span>{contactData.text_send_email}</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Contact