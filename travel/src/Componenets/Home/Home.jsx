import React,{useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios';
//import Background from "public\Background.json"
import CountryDropdown from '../../CountryDropdown';
function Home() {
   
const countries = [
  { value: 'AF', label: 'Afghanistan' },
  { value: 'AX', label: 'Åland Islands' },
  { value: 'AL', label: 'Albania' },
  { value: 'DZ', label: 'Algeria' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'AD', label: 'Andorra' },
  { value: 'AO', label: 'Angola' },
  { value: 'AI', label: 'Anguilla' },
  { value: 'AQ', label: 'Antarctica' },
  { value: 'AG', label: 'Antigua and Barbuda' },
  { value: 'AR', label: 'Argentina' },
  { value: 'AM', label: 'Armenia' },
  { value: 'AW', label: 'Aruba' },
  { value: 'AU', label: 'Australia' },
  { value: 'AT', label: 'Austria' },
  { value: 'AZ', label: 'Azerbaijan' },
  { value: 'BS', label: 'Bahamas' },
  { value: 'BH', label: 'Bahrain' },
  { value: 'BD', label: 'Bangladesh' },
  { value: 'BB', label: 'Barbados' },
  { value: 'BY', label: 'Belarus' },
  { value: 'BE', label: 'Belgium' },
  { value: 'BZ', label: 'Belize' },
  { value: 'BJ', label: 'Benin' },
  { value: 'BM', label: 'Bermuda' },
  { value: 'BT', label: 'Bhutan' },
  { value: 'BO', label: 'Bolivia, Plurinational State of' },
  { value: 'BQ', label: 'Bonaire, Sint Eustatius and Saba' },
  { value: 'BA', label: 'Bosnia and Herzegovina' },
  { value: 'BW', label: 'Botswana' },
  { value: 'BV', label: 'Bouvet Island' },
  { value: 'BR', label: 'Brazil' },
  { value: 'IO', label: 'British Indian Ocean Territory' },
  { value: 'BN', label: 'Brunei Darussalam' },
  { value: 'BG', label: 'Bulgaria' },
  { value: 'BF', label: 'Burkina Faso' },
  { value: 'BI', label: 'Burundi' },
  { value: 'KH', label: 'Cambodia' },
  { value: 'CM', label: 'Cameroon' },
  { value: 'CA', label: 'Canada' },
  { value: 'CV', label: 'Cape Verde' },
  { value: 'KY', label: 'Cayman Islands' },
  { value: 'CF', label: 'Central African Republic' },
  { value: 'TD', label: 'Chad' },
  { value: 'CL', label: 'Chile' },
  { value: 'CN', label: 'China' },
  { value: 'CX', label: 'Christmas Island' },
  { value: 'CC', label: 'Cocos (Keeling) Islands' },
  { value: 'CO', label: 'Colombia' },
  { value: 'KM', label: 'Comoros' },
  { value: 'CG', label: 'Congo' },
  { value: 'CD', label: 'Congo, the Democratic Republic of the' },
  { value: 'CK', label: 'Cook Islands' },
  { value: 'CR', label: 'Costa Rica' },
  { value: 'CI', label: 'Côte d\'Ivoire' },
  { value: 'HR', label: 'Croatia' },
  { value: 'CU', label: 'Cuba' },
  { value: 'CW', label: 'Curaçao' },
  { value: 'CY', label: 'Cyprus' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'DK', label: 'Denmark' },
  { value: 'DJ', label: 'Djibouti' },
  { value: 'DM', label: 'Dominica' },
  { value: 'DO', label: 'Dominican Republic' },
  { value: 'EC', label: 'Ecuador' },
  { value: 'EG', label: 'Egypt' },
  { value: 'SV', label: 'El Salvador' },
  { value: 'GQ', label: 'Equatorial Guinea' },
  { value: 'ER', label: 'Eritrea' },
  { value: 'EE', label: 'Estonia' },
  { value: 'ET', label: 'Ethiopia' },
  { value: 'FK', label: 'Falkland Islands (Malvinas)' },
  { value: 'FO', label: 'Faroe Islands' },
  { value: 'FJ', label: 'Fiji' },
  { value: 'FI', label: 'Finland' },
  { value: 'FR', label: 'France' },
  { value: 'GF', label: 'French Guiana' },
  { value: 'PF', label: 'French Polynesia' },
  { value: 'TF', label: 'French Southern Territories' },
  { value: 'GA', label: 'Gabon' },
  { value: 'GM', label: 'Gambia' },
  { value: 'GE', label: 'Georgia' },
  { value: 'DE', label: 'Germany' },
  { value: 'GH', label: 'Ghana' },
  { value: 'GI', label: 'Gibraltar' },
  { value: 'GR', label: 'Greece' },
  { value: 'GL', label: 'Greenland' },
  { value: 'GD', label: 'Grenada' },
  { value: 'GP', label: 'Guadeloupe' },
  { value: 'GU', label: 'Guam' },
  { value: 'GT', label: 'Guatemala' },
  { value: 'GG', label: 'Guernsey' },
  { value: 'GN', label: 'Guinea' },
  { value: 'GW', label: 'Guinea-Bissau' },
  { value: 'GY', label: 'Guyana' },
  { value: 'HT', label: 'Haiti' },
  { value: 'HM', label: 'Heard Island and McDonald Mcdonald Islands' },
  { value: 'VA', label: 'Holy See (Vatican City State)' },
  { value: 'HN', label: 'Honduras' },
  { value: 'HK', label: 'Hong Kong' },
  { value: 'HU', label: 'Hungary' },
  { value: 'IS', label: 'Iceland' },
  { value: 'IN', label: 'India' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'IR', label: 'Iran, Islamic Republic of' },
  { value: 'IQ', label: 'Iraq' },
  { value: 'IE', label: 'Ireland' },
  { value: 'IM', label: 'Isle of Man' },
  { value: 'IL', label: 'Israel' },
  { value: 'IT', label: 'Italy' },
  { value: 'JM', label: 'Jamaica' },
  { value: 'JP', label: 'Japan' },
  { value: 'JE', label: 'Jersey' },
  { value: 'JO', label: 'Jordan' },
  { value: 'KZ', label: 'Kazakhstan' },
  { value: 'KE', label: 'Kenya' },
  { value: 'KI', label: 'Kiribati' },
  { value: 'KP', label: 'Korea, Democratic People\'s Republic of' },
  { value: 'KR', label: 'Korea, Republic of' },
  { value: 'KW', label: 'Kuwait' },
  { value: 'KG', label: 'Kyrgyzstan' },
  { value: 'LA', label: 'Lao People\'s Democratic Republic' },
  { value: 'LV', label: 'Latvia' },
  { value: 'LB', label: 'Lebanon' },
  { value: 'LS', label: 'Lesotho' },
  { value: 'LR', label: 'Liberia' },
  { value: 'LY', label: 'Libya' },
  { value: 'LI', label: 'Liechtenstein' },
  { value: 'LT', label: 'Lithuania' },
  { value: 'LU', label: 'Luxembourg' },
  { value: 'MO', label: 'Macao' },
  { value: 'MK', label: 'Macedonia, the Former Yugoslav Republic of' },
  { value: 'MG', label: 'Madagascar' },
  { value: 'MW', label: 'Malawi' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'MV', label: 'Maldives' },
  { value: 'ML', label: 'Mali' },
  { value: 'MT', label: 'Malta' },
  { value: 'MH', label: 'Marshall Islands' },
  { value: 'MQ', label: 'Martinique' },
  { value: 'MR', label: 'Mauritania' },
  { value: 'MU', label: 'Mauritius' },
  { value: 'YT', label: 'Mayotte' },
  { value: 'MX', label: 'Mexico' },
  { value: 'FM', label: 'Micronesia, Federated States of' },
  { value: 'MD', label: 'Moldova, Republic of' },
  { value: 'MC', label: 'Monaco' },
  { value: 'MN', label: 'Mongolia' },
  { value: 'ME', label: 'Montenegro' },
  { value: 'MS', label: 'Montserrat' },
  { value: 'MA', label: 'Morocco' },
  { value: 'MZ', label: 'Mozambique' },
  { value: 'MM', label: 'Myanmar' },
  { value: 'NA', label: 'Namibia' },
  { value: 'NR', label: 'Nauru' },
  { value: 'NP', label: 'Nepal' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'NC', label: 'New Caledonia' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'NI', label: 'Nicaragua' },
  { value: 'NE', label: 'Niger' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'NU', label: 'Niue' },
  { value: 'NF', label: 'Norfolk Island' },
  { value: 'MP', label: 'Northern Mariana Islands' },
  { value: 'NO', label: 'Norway' },
  { value: 'OM', label: 'Oman' },
  { value: 'PK', label: 'Pakistan' },
  { value: 'PW', label: 'Palau' },
  { value: 'PS', label: 'Palestine, State of' },
  { value: 'PA', label: 'Panama' },
  { value: 'PG', label: 'Papua New Guinea' },
  { value: 'PY', label: 'Paraguay' },
  { value: 'PE', label: 'Peru' },
  { value: 'PH', label: 'Philippines' },
  { value: 'PN', label: 'Pitcairn' },
  { value: 'PL', label: 'Poland' },
  { value: 'PT', label: 'Portugal' },
  { value: 'PR', label: 'Puerto Rico' },
  { value: 'QA', label: 'Qatar' },
  { value: 'RE', label: 'Réunion' },
  { value: 'RO', label: 'Romania' },
  { value: 'RU', label: 'Russian Federation' },
  { value: 'RW', label: 'Rwanda' },
  { value: 'BL', label: 'Saint Barthélemy' },
  { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
  { value: 'KN', label: 'Saint Kitts and Nevis' },
  { value: 'LC', label: 'Saint Lucia' },
  { value: 'MF', label: 'Saint Martin (French part)' },
  { value: 'PM', label: 'Saint Pierre and Miquelon' },
  { value: 'VC', label: 'Saint Vincent and the Grenadines' },
  { value: 'WS', label: 'Samoa' },
  { value: 'SM', label: 'San Marino' },
  { value: 'ST', label: 'Sao Tome and Principe' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'SN', label: 'Senegal' },
  { value: 'RS', label: 'Serbia' },
  { value: 'SC', label: 'Seychelles' },
  { value: 'SL', label: 'Sierra Leone' },
  { value: 'SG', label: 'Singapore' },
  { value: 'SX', label: 'Sint Maarten (Dutch part)' },
  { value: 'SK', label: 'Slovakia' },
  { value: 'SI', label: 'Slovenia' },
  { value: 'SB', label: 'Solomon Islands' },
  { value: 'SO', label: 'Somalia' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
  { value: 'SS', label: 'South Sudan' },
  { value: 'ES', label: 'Spain' },
  { value: 'LK', label: 'Sri Lanka' },
  { value: 'SD', label: 'Sudan' },
  { value: 'SR', label: 'Suriname' },
  { value: 'SJ', label: 'Svalbard and Jan Mayen' },
  { value: 'SZ', label: 'Swaziland' },
  { value: 'SE', label: 'Sweden' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'SY', label: 'Syrian Arab Republic' },
  { value: 'TW', label: 'Taiwan, Province of China' },
  { value: 'TJ', label: 'Tajikistan' },
  { value: 'TZ', label: 'Tanzania, United Republic of' },
  { value: 'TH', label: 'Thailand' },
  { value: 'TL', label: 'Timor-Leste' },
  { value: 'TG', label: 'Togo' },
  { value: 'TK', label: 'Tokelau' },
  { value: 'TO', label: 'Tonga' },
  { value: 'TT', label: 'Trinidad and Tobago' },
  { value: 'TN', label: 'Tunisia' },
  { value: 'TR', label: 'Turkey' },
  { value: 'TM', label: 'Turkmenistan' },
  { value: 'TC', label: 'Turks and Caicos Islands' },
  { value: 'TV', label: 'Tuvalu' },
  { value: 'UG', label: 'Uganda' },
  { value: 'UA', label: 'Ukraine' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'US', label: 'United States' },
  { value: 'UM', label: 'United States Minor Outlying Islands' },
  { value: 'UY', label: 'Uruguay' },
  { value: 'UZ', label: 'Uzbekistan' },
  { value: 'VU', label: 'Vanuatu' },
  { value: 'VE', label: 'Venezuela, Bolivarian Republic of' },
  { value: 'VN', label: 'Viet Nam' },
  { value: 'VG', label: 'Virgin Islands, British' },
  { value: 'VI', label: 'Virgin Islands, U.S.' },
  { value: 'WF', label: 'Wallis and Futuna' },
  { value: 'EH', label: 'Western Sahara' },
  { value: 'YE', label: 'Yemen' },
  { value: 'ZM', label: 'Zambia' },
  { value: 'ZW', label: 'Zimbabwe' },
];




const[selectedCountry,setValue]=useState('');
const[URL,seturl]=useState(null);


const handleChange=(selectedOption)=>
{
setValue(selectedOption);


}
useEffect(()=>
{
  const fetchData = async () => {
    const data1=await axios.get('Background.json')
    
    
   
    const Url=data1.data.find((url)=>url.country===selectedCountry.label)
   console.log(Url.flag);
   seturl(Url.flag)

  
};
fetchData();


},[selectedCountry,setValue]);




console.log(URL)

  return (
   <div class='overflow-hidden '>


  <div className="m-0 p-0 h-[565px]  justify-center items-center ">
    <div className=" bg-cover bg-center blur-sm absolute inset-20 z-0 inline-block " style={{ backgroundImage: `url("${URL}") `}} ></div>
 
     <div className=' z-10 text-4xl  justify-center relative top-20 my-auto mx-auto mb-7 text-purple-600 font-bold'><h1> Here To Get You There </h1></div>
     <div className=' items-center justify-center relative top-20 my-auto mx-auto '>
   <CountryDropdown 
   countries ={countries} 
   onCountrychange={handleChange}
   selectedCountry={selectedCountry}
   />
   <a class=' relative top-20 bg-grey-300 border border-blue-500 font-bold rounded-lg px-2 py-3 mt-30  text-purple-500 hover:text-purple-700 mb-0'  href='#section1'>Get Started</a>
</div>
</div>
<h1 class='font-bold text-3xl mb-10'>What WE Offer</h1>
<div class='flex flex-row  items-center  m-0 p-0' id="section1">
  <div class='h-[500px] w-1/4 bg-green-900 bg-cover bg-center text-white font-bold ' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") `}}>
   <div>Student</div> 
    <a class=' mt-[270px] inline-block bg-white border border-blue-500 font-bold rounded-lg px-2 py-3 w-[159px] text-purple-500 hover:text-purple-700 mb-10'href='#'>Exchange Program</a>
    <a class='inline-block bg-grey-300 bg-white border border-blue-500 font-bold rounded-lg px-2 py-3 w-[159px]  text-purple-500 hover:text-purple-700 mb-0' href='#'>Travel Package</a>
    </div>
  <div class=' h-[500px] w-1/4 bg-cover bg-center bg-green-900  '   style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1671069848029-a0d8c3b153a7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") `}}>
  <div> College</div>
    <a class=' mt-[270px] inline-block bg-white border border-blue-500 font-bold rounded-lg px-2 py-3 w-[159px] text-purple-500 hover:text-purple-700 mb-10'href='#'>Exchange Program</a>
    <a class='inline-block bg-grey-300 bg-white border border-blue-500 font-bold rounded-lg px-2 py-3 w-[159px]  text-purple-500 hover:text-purple-700 mb-0' href='#'>Travel Package</a>
    </div>
  <div class='h-[500px] w-1/4  bg-cover bg-center bg-green-900  '   style={{ backgroundImage: `url("https://images.unsplash.com/photo-1543357480-c60d40007a3f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdyb3VwJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D") `}}>
  <div> Individual</div>
    <a class=' mt-[270px] inline-block bg-white border border-blue-500 font-bold rounded-lg px-2 py-3 w-[159px] text-purple-500 hover:text-purple-700 mb-10'href='#'>Exchange Program</a>
    <a class='inline-block bg-grey-300 bg-white border border-blue-500 font-bold rounded-lg px-2 py-3 w-[159px]  text-purple-500 hover:text-purple-700 mb-0' href='#'>Travel Package</a>
    </div>
  <div class='h-[500px] w-1/4 bg-cover bg-center bg-green-900  '   style={{ backgroundImage: `url("https://images.unsplash.com/photo-1542560453-88e10bdc429f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXAlMjB0b3VyaXNtfGVufDB8fDB8fHww") `}}>
  <div>  Group</div>
    <a class=' mt-[270px] inline-block bg-white border border-blue-500 font-bold rounded-lg px-2 py-3 w-[159px] text-purple-500 hover:text-purple-700 mb-10'href='#'>Exchange Program</a>
    <a class='inline-block bg-grey-300 bg-white border border-blue-500 font-bold rounded-lg px-2 py-3 w-[159px]  text-purple-500 hover:text-purple-700 mb-0' href='#'>Travel Package</a>
    </div>
</div>
<div>Reviews from Our Clients</div>
   
  </div>
  )
}

export default Home;
