import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import log1 from '../../Assets/logo1.png'
import log2 from '../../Assets/logo2.png'
import log3 from '../../Assets/logo3.png'
import log4 from '../../Assets/logo4.png'
import log5 from '../../Assets/logo5.png'
import log6 from '../../Assets/logo6.png'
import log7 from '../../Assets/logo7.png'
import log8 from '../../Assets/logo8.png'


const Data = [
    {
        id:1,
        image:log1,
        title:"Web Developer",
        time:'Now',
        location:'Canada',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam?',
        company:'Novac Linus Co.'
    },
    {
        id:2,
        image:log2,
        title:"UI Designer",
        time:'14Hrs',
        location:'Manchester',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam?',
        company:'Liquis Assessments'
    },
    {
        id:3,
        image:log3,
        title:"Software Eng",
        time:'10Hrs',
        location:'Australi3',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam?',
        company:'Web Tech Agency'
    },
    {
        id:4,
        image:log4,
        title:"Ui/Ux Designer",
        time:'10H',
        location:'Germnany',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam?',
        company:'Government'
    },
    {
        id:5,
        image:log5,
        title:"Product Designer",
        time:'Now',
        location:'Manchester',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam?',
        company:'Newcastle'
    },
    {
        id:6,
        image:log6,
        title:"Researcher",
        time:'5H',
        location:'Norway',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam?',
        company:'Nin Co.'
    },
    {
        id:7,
        image:log7,
        title:"Lead Developer",
        time:'14Hrs',
        location:'Leeds',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam?',
        company:'Nimeloi - UK'
    },
    {
        id:8,
        image:log8,
        title:"Data Scientist",
        time:'2 days',
        location:'Turkey',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam?',
        company:'Noms and Sons'
    }
]

const Jobs = () => {
  return (
   <div>
    <div className="jobcontainer flex gap-10 flex-wrap justify-center items-center py-10">
        {
            Data.map(({id,image,title,time,location,desc,company}) => {
                return(
                    <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                </span>

            </span>
            <h6 className='text-[#ccc]'> {location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
               {desc}
            </p>

            <div className='company flex items-center gap-2 '>
                <img src={image} alt="company logo" className='w-[10%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
            </div>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                Apply Now
            </button>
            
        </div>
                )
            })
        }
    </div>
   </div>
  )
}

export default Jobs
