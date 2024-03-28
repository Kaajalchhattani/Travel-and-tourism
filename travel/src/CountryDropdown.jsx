import React,{useState} from 'react';
import Select from 'react-select';

//import countries from 'countries-list'



    const CountryDropdown=({countries,onCountrychange,selectedCountry})=>
    {
      

    
        const options=countries.map((country)=>
        (
          {
            value: country.value,
            label: country.label,
          }
        ));
    
  return (
    <div className='flex justify-center m-auto'>
    <h1 className='ml-7 mr-7 text-xl text-purple-300 text-bold'>Select Your Destination </h1>
   
    <Select className=' w-full max-w-xs rounded border '
          options={options}
      isSearchable={true}
      value={selectedCountry}
      onChange={onCountrychange}
      placeholder="Select a country"
     
    />
    
    

     </div>
  );
};
export default CountryDropdown;
