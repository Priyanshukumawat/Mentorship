import React from 'react'
import home from '../../asets/icons/home.png';
import mentor from '../../asets/icons/mentor.png';
import blog from '../../asets/icons/blog.png';
import faq from '../../asets/icons/faq.png';
import contact from '../../asets/icons/contact.png';
import pages from '../../asets/icons/pages.png';

// icons for sidebar
const navItems = [
    { icon: home, label: 'Home' },
    { icon: mentor, label: 'Mentors' },
    { icon: blog, label: 'Blogs' },
    { icon: faq, label: 'FAQs' },
    { icon: contact, label: 'Contact' },
    { icon: pages, label: 'Pages' },
];


function Sidebar() {
    return (
        <div>
            <div className="bg-[#806543] rounded-2xl p-3 pt-5 pb-5 flex flex-col justify-between relative md:w-fit md:h-auto xl:left-20 xl:mr-52 xl:h-[80vh]" >
                <nav className="flex-grow pt-2 pb-2">
                    <ul className="list-none h-full flex flex-col justify-around items-center">
                        {navItems.map(({ icon, label }) => (
                            <li key={label} className="group font-bold text-center flex-grow">
                                <a href="#" className="text-black flex flex-col items-center transition-colors duration-300 hover:text-white">
                                    <img src={icon} alt={label} className="h-[35px] w-[35px] group-hover:brightness-0 group-hover:invert" />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar