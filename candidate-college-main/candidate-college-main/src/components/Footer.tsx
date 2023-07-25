import { articles } from '@/data/articleData'
import { latestEvents } from '@/data/eventData'
import { footers, menus } from '@/data/menuData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

const Footer = () => {
  const socials = [
    { id: 1, name: 'Twitter', link: 'https://twitter.com/CCollege_Ind', component: <TwitterIcon color='inherit' fontSize='inherit' /> },
    { id: 2, name: 'Instagram', link: 'https://www.instagram.com/candidate.college/', component: <InstagramIcon color='inherit' fontSize='inherit' /> },
    { id: 3, name: 'Youtube', link: 'https://www.youtube.com/channel/UCk2XANWkjfjc9K305H2WjrQ', component: <YouTubeIcon color='inherit' fontSize='inherit' /> },
    { id: 4, name: 'Spotify', link: 'https://open.spotify.com/show/0xhjenJefepCIKH5UeVyiE?si=08402adcbd92430b', component: <PodcastsIcon color='inherit' fontSize='inherit' /> },
    { id: 5, name: 'Tiktok', link: 'https://www.tiktok.com/@candidatecollege', component: <AudiotrackIcon color='inherit' fontSize='inherit' /> },
  ]

  return (
    <footer className='w-full h-full px-7 md:px-0 md:mx-auto md:max-w-5xl py-6 bg-primary flex flex-col gap-6'>
      <section className={`w-full flex flex-col`}>
        <Image 
          src={`/logo/logo-full-cc.png`}
          width={100}
          height={50}
          alt={`Logo Candidate College`}
          title={`Logo Candidate College`}
          className={`block w-[150px] h-[100px] object-contain`}
          loading="lazy"
        />

        <p className="text-gray text-sm -mt-3">Education Platform that works to facilitate students in Indonesia.
        </p>
      </section>

      <div className="flex flex-row">
        <div className="flex flex-row">
          <section className="flex flex-row gap-10">
          <div className="flex flex-col gap-2">
            <p className='font-medium text-white text-base'>Navigation</p>

            <ul className='flex flex-col gap-2'>
              {
                menus.map((menu, index) => (
                  <Link className='text-sm text-gray font-normal hover:text-white duration-700 transition-all' href={menu.link} title={menu.name} about={menu.name} key={index}>{menu.name}</Link>
                ))
              }
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className='font-medium text-white text-base'>Latest Events</p>

            <ul className='flex flex-col gap-2'>
              {
                latestEvents.map((event, index) => (
                  <Link className='text-sm text-gray font-normal hover:text-white duration-700 transition-all' href={event.link} title={event.name} about={event.name} key={index}>{event.name}</Link>
                ))
              }
            </ul>
          </div>
          </section>

          <section className="hidden lg:ml-10 lg:flex flex-row gap-10">
            <div className="flex flex-col gap-2">
              <p className='font-medium text-white text-base'>Articles</p>

              <ul className='flex flex-col gap-2'>
                {
                  articles.map((article, index) => (
                    <Link className='text-sm text-gray font-normal hover:text-white duration-700 transition-all' href={article.link} title={article.title} about={article.title} key={index}>{article.title}</Link>
                  ))
                }
              </ul>
            </div>
          </section>
        </div>

        <section className="hidden lg:ml-10 lg:flex flex-row gap-10">
          <div className="flex flex-col gap-2">
            <p className='font-medium text-white text-base'>Our Socials</p>

            <ul className='flex flex-row gap-2'>
              {
                socials.map((social, index) => (
                  <Link className='text-3xl text-secondary font-normal hover:text-white duration-700 transition-all' href={social.link} title={social.name} about={social.name} key={index}>{social.component}</Link>
                ))
              }
            </ul>
          </div>
        </section>
      </div>

      <section className="flex lg:hidden flex-row gap-10">
            <div className="flex flex-col gap-2">
              <p className='font-medium text-white text-base'>Articles</p>

              <ul className='flex flex-col gap-2'>
                {
                  articles.map((article, index) => (
                    <Link className='text-sm text-gray font-normal hover:text-white duration-700 transition-all' href={article.link} title={article.title} about={article.title} key={index}>{article.title}</Link>
                  ))
                }
              </ul>
            </div>
          </section>

      <section className="flex lg:hidden flex-row gap-10">
        <div className="flex flex-col gap-2">
          <p className='font-medium text-white text-base'>Our Socials</p>

          <ul className='flex flex-row gap-2'>
            {
              socials.map((social, index) => (
                <Link className='text-3xl text-secondary font-normal hover:text-white duration-700 transition-all' href={social.link} title={social.name} about={social.name} key={index}>{social.component}</Link>
              ))
            }
          </ul>
        </div>
      </section>

      <hr className='bg-gray text-gray' />

      <section className="flex lg:hidden flex-row gap-10">
        <div className="flex flex-col gap-2">
          <ul className='flex flex-col gap-3'>
            {
              footers.map((footer, index) => (
                <Link className='font-medium text-white text-base duration-700 transition-all' href={footer.link} title={footer.name} about={footer.name} key={index}>{footer.name}</Link>
              ))
            }
          </ul>
        </div>
      </section>

      <p className="text-gray text-sm mt-5 lg:mt-0">&copy; Candidate College 2023.
        </p>
    </footer>
  )
}

export default Footer