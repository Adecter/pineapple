import React, {useState} from 'react';
import Mail from './Mail';


function Form() {
const [name, setName] = useState('')
const [titleName, setTitleName] = useState('Subscribe to newsletter')
const [subtitleName, setSubtitleName] = useState('Subscribe to our newsletter and get 10% discount on pineapple glasses.')

  const handleNameChange = (name) =>{
    setName(name)
    setTitleName('Thanks for subscribing!')
    setSubtitleName('You have successfully subscribed to our email listing. Check your email for the discount code.')
  }

  
  console.log(name)
    return(
            <div className="form">
              <div className={`form__cup ${name ? 'form__cup__visible' : 'form__cup__hidden'}`}>
                <svg width="44" height="70" viewBox="0 0 44 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M13 51C13 50.4477 13.4477 50 14 50H30C30.5523 50 31 50.4477 31 51V61C31 61.5523 30.5523 62 30 62H14C13.4477 62 13 61.5523 13 61V51ZM15 52H29V60H15V52Z"
                    fill="#4066A5" />
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8 0C7.44771 0 7 0.447723 7 1V5C7 5.55228 7.44772 6 8 6H9V7H8.1657C7.4119 7 6.7066 6.53748 6.27884 5.92047L5.68489 5.06351C4.806 3.79572 3.35709 3.03665 1.8147 3.03296H1.80081C1.32878 3.03296 0.866241 3.22342 0.529755 3.55728C0.188171 3.89661 0 4.34778 0 4.82794V9.22031C0 12.4582 0.716553 14.8268 2.19077 16.4615C3.48946 17.9018 5.23088 18.6052 6.76764 19.2259C8.55252 19.9469 10.2387 20.6281 11.0571 22.3049C11.3589 22.9237 11.28 23.5205 10.8347 23.9852C10.471 24.3649 9.92801 24.5916 9.3826 24.5916C9.15112 24.5916 8.93655 24.5504 8.74535 24.4692C7.89464 24.1076 7.81107 23.1128 7.83704 22.5518C7.8633 21.986 7.42316 21.506 6.8541 21.48C6.28104 21.457 5.80255 21.8916 5.77644 22.4576C5.69191 24.2883 6.49876 25.7455 7.93518 26.3559C8.38397 26.5465 8.87112 26.6432 9.3826 26.6432C10.4816 26.6432 11.5826 26.1786 12.3279 25.4007C12.4415 25.282 12.5437 25.157 12.6377 25.0284C13.6017 26.4686 15.7199 28.8035 17 30V34C17 34.5523 17.4477 35 18 35H18.8093C18.6024 36.0118 18.2809 37.2426 17.8385 38.4244C17.2437 40.0128 16.4994 41.3217 15.6714 42H6C5.44771 42 5 42.4477 5 43V47C5 47.5523 5.44772 48 6 48H7V64H6C5.44771 64 5 64.4477 5 65V69C5 69.5523 5.44772 70 6 70H38C38.5523 70 39 69.5523 39 69V65C39 64.4477 38.5523 64 38 64H37V48H38C38.5523 48 39 47.5523 39 47V43C39 42.4477 38.5523 42 38 42H28.3286C27.5005 41.3217 26.7562 40.0128 26.1615 38.4244C25.719 37.2426 25.3976 36.0118 25.1907 35H26C26.5523 35 27 34.5523 27 34V30C28.2771 28.8063 30.4076 26.4749 31.37 25.0385C31.462 25.1635 31.5614 25.2849 31.6719 25.4002C32.4173 26.1783 33.5183 26.6429 34.6173 26.6429C35.1288 26.6429 35.6159 26.5462 36.0648 26.3555C37.5011 25.7452 38.308 24.2879 38.2234 22.4574C38.1973 21.8915 37.7146 21.4573 37.1458 21.4797C36.5768 21.5058 36.1367 21.9857 36.1628 22.5516C36.1888 23.1124 36.1052 24.1073 35.2547 24.4688C35.0633 24.5501 34.8489 24.5913 34.6173 24.5913C34.0718 24.5913 33.5289 24.3646 33.1651 23.9849C32.7198 23.5202 32.6409 22.9236 32.9428 22.3048C33.7612 20.6278 35.4472 19.9467 37.2325 19.2256C38.7691 18.6051 40.5104 17.9016 41.8092 16.4613C43.2834 14.8267 44 12.4581 44 9.22015V4.82794C44.0003 4.34778 43.8121 3.89648 43.4701 3.55701C43.1306 3.22028 42.667 3.03159 42.1912 3.03296C40.6432 3.03665 39.1944 3.79587 38.3154 5.06366L37.7214 5.92047C37.2937 6.5376 36.5881 7 35.8343 7H35V6H36C36.5523 6 37 5.55228 37 5V1C37 0.447723 36.5523 0 36 0H8ZM33 6H11V12.4182C11 18.9243 13.9756 25.1141 19.2171 29H24.7982C30.04 25.1141 33 18.9243 33 12.4182V6ZM35 2H9V4H35V2ZM16.0159 44C16.0059 44.0002 15.9959 44.0002 15.9859 44H7V46H37V44H16.0159ZM25.7054 42C25.1178 41.1159 24.6529 40.0986 24.2886 39.1256C23.7454 37.6749 23.3721 36.1714 23.1529 35H20.8472C20.628 36.1714 20.2547 37.6749 19.7115 39.1256C19.3472 40.0986 18.8822 41.1159 18.2946 42H25.7054ZM25 33V31H19V33H19.9831C19.9935 32.9998 20.0039 32.9998 20.0143 33H25ZM9 48H35V64H9V48ZM37 66H7V68H37V66ZM3.72643 15.0916C4.70717 16.1791 6.08502 16.7357 7.54372 17.3248C8.19923 17.5897 8.88362 17.8665 9.54796 18.2054C9.04926 16.3331 9 14.3891 9 12.4182V9H8.1657C6.73355 9 5.39336 8.25754 4.58058 7.0849L3.98663 6.22809C3.54114 5.58536 2.8353 5.1748 2.06281 5.09784V9.22031C2.06281 11.9298 2.60698 13.8503 3.72643 15.0916ZM36.4567 17.3248C37.9155 16.7356 39.2932 16.1792 40.2738 15.0916C41.3933 13.8503 41.9372 11.9298 41.9372 9.22031V5.09836C41.1622 5.1763 40.4582 5.58673 40.0134 6.22836L39.4194 7.08502C38.6068 8.25766 37.2664 9 35.8343 9H35V12.4182C35 14.3859 34.9664 16.3271 34.4692 18.1967C35.1285 17.8617 35.8069 17.5872 36.4567 17.3248Z"
                    fill="#4066A5" />
                </svg>
              </div>
              <h1 className="form__title">{titleName}</h1>
              <p className={`form__subtitle ${name ? 'form__subtitle__cup':''}`}>{subtitleName}</p>
              {!name && <Mail onClick = {handleNameChange} />}
            </div>
           );
    
  }
    export default Form;