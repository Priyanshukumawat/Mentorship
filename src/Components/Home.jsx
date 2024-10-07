import React from 'react'
import home from '../asets/icons/home.png';
import mentor from '../asets/icons/mentor.png';
import blog from '../asets/icons/blog.png';
import faq from '../asets/icons/faq.png';
import contact from '../asets/icons/contact.png';
import pages from '../asets/icons/pages.png';
import notebook from '../asets/icons/notebook.png';
import profile from '../asets/icons/profile.png';
import grow from '../asets/icons/grow.png';
import checklist from '../asets/icons/checklist.png';

// icons for background gif
const icons = [
    { src: notebook, size: '45px', position: { top: '7%', left: '20%' } },
    { src: profile, size: '100px', position: { top: '-3%', left: '45%' } },
    { src: grow, size: '75px', position: { bottom: '50%', right: '20%' } },
    { src: checklist, size: '65px', position: { bottom: '10%', left: '55%' } },
];

// icons for sidebar
const navItems = [
    { icon: home, label: 'Home' },
    { icon: mentor, label: 'Mentors' },
    { icon: blog, label: 'Blogs' },
    { icon: faq, label: 'FAQs' },
    { icon: contact, label: 'Contact' },
    { icon: pages, label: 'Pages' },
];


function Home() {
    return (

        <div
            className="flex items-center h-screen justify-center bg-cover bg-center min-h-full p-2 lg:p-4 lg:gap-[100px] gap-[5px] sm:gap-[50px]"
            style={{
                backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2789/7f95/48e0d4bb22ca65276360d5f59c6fb655?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjA58uCAz3Ch2KrOgJ1rwUdMngK3Sz3By7igOBjpAXmKZ9v6RGsbAagU4puhn5n5FluWU68AipElqNnUif5mt7iTOX-u78-QurVi6ZrjbtKn7Rgdb8niO65bvxzxlPq61lTrL4pICTjPXUYOQGS0VLX5s8fceARgqdd8iI3owCatOUUhJKlZGKLNamYN00eOC72I1EC7k11VucNO~nauU5UpE7rT~SfHzGaBStkiRFfn6uJfpHkaQoa63IEUt2hhVdR~~HiOzBwAU55NkzhW8Tfrcch1lLNE2Ev~-9Ug8VE58~GwVjz4waUahdy4ThPVqCqax7Ky2msM0T6cjrCvhw__')",

            }}
        >
            {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon.src}
                    alt={`icon-${index}`}
                    style={{
                        position: 'absolute',
                        width: icon.size,
                        zIndex: 0,
                        height: icon.size,
                        top: icon.position.top,
                        left: icon.position.left,
                        right: icon.position.right,
                        bottom: icon.position.bottom,
                        filter: 'blur(2px)',
                    }}
                />
            ))}

            {/* Top Right Buttons */}
            <div className="absolute top-5 right-5 p-5 space-x-4 z-10">
                <button className="bg-[#806543] text-white px-4 py-2 rounded-lg hover:bg-brown-700">Sign In</button>
                <button className="bg-[#806543] text-white px-4 py-2 rounded-lg hover:bg-brown-700">Get Started</button>
            </div>

            {/* Sidebar Navigation */}
            <div className="bg-[#806543] rounded-2xl lg:h-[80vh] p-3 pt-5 pb-5 flex flex-col justify-between relative md:w-fit md:h-auto lg:left-24">
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

            {/* Main Content Area */}
            <div className="flex flex-col items-start justify-center lg:h-full h-[40vh] w-full md:gap-10 lg:ml-52 z-10">
                <div className="bg-[#8065436f] bg-opacity-60 lg:gap-5 gap-1 text-start flex flex-col justify-center max-w-[850px] md:p-10 p-1 h-80">
                    <p className="text-3xl lg:text-5xl font-bold">
                        Teach and grow with help to a learner for world wide
                    </p>
                    <p className="sm:text-lg md:text-xl lg:text-2xl font-semibold">
                        Build confidence as a leader,<br /> grow your network, and define your legacy.
                    </p>
                </div>

                <button className="bg-[#806543] text-black lg:mt-20 mt-10 lg:py-2 lg:px-4 py-1 px-2 w-fit rounded-lg hover:bg-brown-700 flex justify-start items-center">
                    Become a member <span className="text-lg">→</span>
                </button>
            </div>
        </div>

    );
}

export default Home;