import React from 'react'
import './NewsletterForm.scss'

const NewsletterForm = () => {

    return (
        <div className='newsletter-form'>
            <h2>Get the lastes Updates</h2>
            <form>
                <input type='email' placeholder='Your Email' />
                <button type='submit'>Email Me!</button>
            </form>
        </div>
    )
}

export default NewsletterForm;