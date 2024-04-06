import React, { useState } from 'react'
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Search = () => {
  const [jobSearch, setJobSearch] = useState('');
  const [companySearch, setCompanySearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

  const clearInput = (inputType) => {
    switch (inputType) {
      case 'job':
        setJobSearch('');
        break;
      case 'company':
        setCompanySearch('');
        break;
      case 'location':
        setLocationSearch('');
        break;
      default:
        break;
    }
  }

  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
        <form action="">
            <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                <div className='flex gap-2 items-center'>
                    <AiOutlineSearch className='text-[25px] icon'/>
                    <input 
                      type="text" 
                      className='bg-transparent text-blue-500 focus:outline-none w-[100%]' 
                      placeholder='Search Job Here...'
                      value={jobSearch}
                      onChange={(e) => setJobSearch(e.target.value)} 
                    />
                    <AiOutlineCloseCircle 
                      className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                      onClick={() => clearInput('job')}
                    />
                </div>
                <div className='flex gap-2 items-center'>
                    <BsHouseDoor className='text-[25px] icon'/>
                    <input 
                      type="text" 
                      className='bg-transparent text-blue-500 focus:outline-none w-[100%]' 
                      placeholder='Search by company...' 
                      value={companySearch}
                      onChange={(e) => setCompanySearch(e.target.value)} 
                    />
                    <AiOutlineCloseCircle 
                      className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                      onClick={() => clearInput('company')}
                    />
                </div>
                <div className='flex gap-2 items-center'>
                    <CiLocationOn className='text-[25px] icon'/>
                    <input 
                      type="text" 
                      className='bg-transparent text-blue-500 focus:outline-none w-[100%]' 
                      placeholder='Search by location...' 
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)} 
                    />
                    <AiOutlineCloseCircle 
                      className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                      onClick={() => clearInput('location')}
                    />
                </div>
                <button className='bg-blueColor h-[50px] p-2 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-400'>Search</button>
            </div>
        </form>

        <div className='setDiv flex items-center gap-10 justify-center'>
            <div className='singleSearch flex items-center gap-2'> 
            <label htmlFor="relevance" className='text-[#808080] fonr-semibold '>Sort by:</label>
            <select id="relevance" name="" className='bg-white rounded-[3px] px-4 py-1'>
                <option value="">Relevance</option>
                <option value="">Inclusive</option>
                <option value="">Starts with</option>
                <option value="">Contains</option>
            </select>

            </div>
            <div className='singleSearch flex items-center gap-2'> 
            <label htmlFor="type" className='text-[#808080] fonr-semibold '>Type:</label>
            <select id="type" name="" className='bg-white rounded-[3px] px-4 py-1'>
                <option value="">Full-time</option>
                <option value="">Remote</option>
                <option value="">Contract</option>
                <option value="">Part-time</option>
            </select>

            </div>
            <div className='singleSearch flex items-center gap-2'> 
            <label htmlFor="level" className='text-[#808080] fonr-semibold '>Level:</label>
            <select id="level" name="" className='bg-white rounded-[3px] px-4 py-1'>
                <option value="">Senior</option>
                <option value="">Beginner</option>
                <option value="">Intermediate</option>
                <option value="">Advanced</option>
            </select>

            </div>
            <span className='text-[#a1a1a1] cursor-pointer'>Clear all</span>

        </div>
    </div>
  )
}

export default Search;
