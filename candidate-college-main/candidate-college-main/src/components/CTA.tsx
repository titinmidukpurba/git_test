import React, { useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import Link from 'next/link';

const CTA = () => {
    const [isShowSocials, setIsShowSocials] = useState<boolean>(false)
    const toggleIsShowSocials = () => {
        setIsShowSocials(!isShowSocials)
    }
    const socials = [
        { id: 1, name: 'Twitter', link: 'https://twitter.com/CCollege_Ind', component: <TwitterIcon color='inherit' fontSize='inherit' /> },
        { id: 2, name: 'Instagram', link: 'https://www.instagram.com/candidate.college/', component: <InstagramIcon color='inherit' fontSize='inherit' /> },
        { id: 3, name: 'Youtube', link: 'https://www.youtube.com/channel/UCk2XANWkjfjc9K305H2WjrQ', component: <YouTubeIcon color='inherit' fontSize='inherit' /> },
        { id: 4, name: 'Spotify', link: 'https://open.spotify.com/show/0xhjenJefepCIKH5UeVyiE?si=08402adcbd92430b', component: <PodcastsIcon color='inherit' fontSize='inherit' /> },
        { id: 5, name: 'Tiktok', link: 'https://www.tiktok.com/@candidatecollege', component: <AudiotrackIcon color='inherit' fontSize='inherit' /> },
    ]

    return (
        <div className='flex flex-col gap-4 fixed bottom-8 left-5'>
            <Link href={'/merchandise'} about={'Merchandise Market'} title={'Merchandise Market'} className={`bg-secondary w-fit flex items-center justify-center px-4 py-4 self-end rounded-full text-primary hover:text-white duration-800 transition-all cursor-pointer`} >
                <p className={`font-medium text-base flex items-center justify-center`}><span className='text-primary hover:text-white text-2xl leading-[0.5rem]'><ShoppingBagRoundedIcon fontSize='inherit' color='inherit' />
                    </span></p>
            </Link>

            <div className={`flex-col gap-4 ${isShowSocials ? 'flex' : 'hidden'}`}>
            {
                socials.map((social, index) => (
                    <Link href={social.link} key={index} about={social.name} title={social.name} className={`bg-secondary w-fit flex items-center justify-center px-4 py-4 self-end rounded-full text-primary hover:text-white duration-800 transition-all cursor-pointer`} >
                        <p className={`font-medium text-base flex items-center justify-center`}><span className='text-primary hover:text-white text-2xl leading-[0.5rem]'>{social.component}
                            </span></p>
                    </Link>
                ))
            }
            </div>

            <div onClick={(e) => toggleIsShowSocials()} className={`bg-secondary w-fit flex items-center justify-center px-4 py-4 self-end rounded-full text-primary duration-800 transition-all cursor-pointer`} >
                <p className={`font-medium text-base flex items-center justify-center`}><span className='text-primary text-2xl leading-[0.9rem]'><AutoAwesomeIcon fontSize='inherit' color='inherit' />
                    </span></p>
            </div>
        </div>
    )
}

export default CTA
