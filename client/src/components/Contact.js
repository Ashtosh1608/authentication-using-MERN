import React from 'react'
import '../App.css'

const Contact = () => {
  return (
<>
    <div className='contact-flex'>
        <div>
            <div>
                Phone
            </div>
            <div>
                +91 90111111111
            </div>
        </div>
        <div>
            <div>
                Email
            </div>
            <div>
                ashtosh2008@gmail.com
            </div>
        </div>
        <div>
            <div>
                Address
            </div>
            <div>
                Lakhisarai, Bihar
            </div>
        </div>
    </div>
    <div className='contact-flex cfu'>
        <div>
            <input type="text" id='contact_form_name'
            className='contact_form_name' placeholder='Your Name' required="true" />
        </div>
        <div>
            <input type="email" id='contact_form_name'
            className='contact_form_name' placeholder='Your Email' required="true" />
        </div>
        <div>
            <input type="number" id='contact_form_name'
            className='contact_form_naame' placeholder='Your Phone Number' required="true" />
        </div>
    </div>
    <div>
        <textarea placeholder='Message' id="" cols="60" rows="10"></textarea>
    </div>
    <div>
        <button type='submit' className='btn btn-success btn-lg'>Send Message</button>
    </div>
</>
  )
}

export default Contact