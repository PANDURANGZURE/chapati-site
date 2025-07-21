import React from 'react'

function Location() {
  return (
    <>
    <div className="w-full max-w-2xl  mx-auto  aspect-video relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.506204938493!2d73.89913017523864!3d18.596287982511953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7e96de8f927%3A0x2397e5be26a571c6!2sSaurav%20Zure!5e0!3m2!1sen!2sin!4v1752822084323!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    </>
  )
}

export default Location