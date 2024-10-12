import React from 'react'
import home from '../../asets/icons/home.png';
import mentor from '../../asets/icons/mentor.png';
import blog from '../../asets/icons/blog.png';
import faq from '../../asets/icons/faq.png';
import contact from '../../asets/icons/contact.png';
import pages from '../../asets/icons/pages.png';
import notebook from '../../asets/icons/notebook.png';
import profile from '../../asets/icons/profile.png';
import grow from '../../asets/icons/grow.png';
import checklist from '../../asets/icons/checklist.png';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

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
        <>

            <div className="flex items-center h-screen justify-center bg-cover bg-center min-h-full p-2 gap-2 sm:gap-[50px]"
                style={{
                    backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2789/7f95/48e0d4bb22ca65276360d5f59c6fb655?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjA58uCAz3Ch2KrOgJ1rwUdMngK3Sz3By7igOBjpAXmKZ9v6RGsbAagU4puhn5n5FluWU68AipElqNnUif5mt7iTOX-u78-QurVi6ZrjbtKn7Rgdb8niO65bvxzxlPq61lTrL4pICTjPXUYOQGS0VLX5s8fceARgqdd8iI3owCatOUUhJKlZGKLNamYN00eOC72I1EC7k11VucNO~nauU5UpE7rT~SfHzGaBStkiRFfn6uJfpHkaQoa63IEUt2hhVdR~~HiOzBwAU55NkzhW8Tfrcch1lLNE2Ev~-9Ug8VE58~GwVjz4waUahdy4ThPVqCqax7Ky2msM0T6cjrCvhw__')",

                }}>
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

                <Navbar />
                <Sidebar />
                <Hero />
            </div>
        </>


    );
}

export default Home;