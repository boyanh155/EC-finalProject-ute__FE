import React,{Suspense} from 'react'
import "../../assets/css/shop/contact.css"
const ContactUs = () => {
  return (
      <Suspense fallback={<h1>Loading...</h1>}>
            <div className='centerWord'>Contact Us</div>
          <div className="ContactWrapper row">
              <div className="ContactWrapper__left col">
                  Left
              </div>
              <div className="ContactWrapper__right col">
                Right 
              </div>

            
          </div>

      </Suspense>
  )
}

export default ContactUs