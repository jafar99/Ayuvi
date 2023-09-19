import React from 'react'
import '../style/Content.css';
import img from '../assets/7.png';


const Content = () => {
  return (
    <div className='contenthead'>

        <div className='content1'>
        <span className='text1'>Ayurveda for the mind, body & soul</span>

        <span className='text2'>Your journey to the healthy you, the happier you,the real you.</span>
        </div>

        <div className='content2'>

        <span className='bodytext'>MIND.</span>

        <div className='contentbody'>
                <span className='bodytext'>BODY</span>
                <img src={img} alt="logo" className="contentlogo" />

                <span className='bodytext'>SOUL</span>
        </div>

        <div className='para'>
        <span className='paragraph'>
        Ayuvi is a platform designed 
        to help you live a healthier, happier life through a
         combination of the ancient science of Ayurveda,
          modern technology and specialised guidance from experts. 
          While modern medicine targets symptoms instead of the cause, 
          Ayurveda is an ancient science of over 5000 years that focuses
           on prevention in addition to cure. Ayuvi helps you balance your health with this power of Ayurveda, with a dedicated Wellness Team of specialist Ayurvedic vaidyas, Ayurvedic dieticians and yoga coaches to monitor and help you through your journey with daily, personalised advice.
        </span>
        </div>


        </div>

       
    </div>
  )
}

export default Content