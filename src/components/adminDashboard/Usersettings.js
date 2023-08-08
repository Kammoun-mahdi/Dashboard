import React from 'react'

function Usersettings() {
  return (
    <div className='m-12'>
      <h1 className='text-header-3 text-primary'>Settings</h1>
      <br/>
    <form>
      <div class="mb-6">
        <label >Full Name</label>
        <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Full Name" required/>
      </div>
      <div class="mb-6">
        <label >Email</label>
        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
      </div>
      <div class="mb-6">
        <label >Phone</label>
        <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Full Name" required/>
      </div>
       <div className='mb-6 h-3' >
      <label >Address :</label>  
      </div>
      <div className='mb-6 flex justify-between '>
      <div className='flex'>
      <label className='mr-3 mt-1'>Address street:</label>
      <input type="text" id="adr" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12		 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required/>
      </div>
      <div className='flex'>
      <label className='mr-3 mt-1'>City:</label>
      <input type="text" id="adr" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12		 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
      </div>
      <div className='flex'>
      <label className='mr-3 mt-1' >Code Zip:</label>
      <input type="text" id="adr" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12		 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
      </div>
      </div>
      <div class=" m-8">
        <label className= ''>Begin-Date</label>
        <input type="date" className='mr-6 ml-1 rounded-2xl	'  id="date" required/>
        <label className=' '>End-Date</label>
        <input type="date" className='rounded-2xl	 ml-1' id="date"  required/>

      </div>
      <button type="submit" className='text-white bg-primary rounded-2xl 	w-50 h-15 p-2.5 text-bold'>confirm</button>
    </form>
    </div>
  )
}

export default Usersettings