'use client'
import React from 'react'
import { CTA, Footer, Navbar } from '@/components';
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { WhatsApp } from '@mui/icons-material';
import { articlesOnPage } from '@/data/articleData';

const Detail = () => {
  const socials = [
    { id: 1, name: 'Twitter', link: 'https://twitter.com/CCollege_Ind', component: <TwitterIcon color='inherit' fontSize='inherit' /> },
    { id: 2, name: 'Instagram', link: 'https://www.instagram.com/candidate.college/', component: <InstagramIcon color='inherit' fontSize='inherit' /> },
    { id: 3, name: 'Whatsapp', link: 'https://www.youtube.com/channel/UCk2XANWkjfjc9K305H2WjrQ', component: <WhatsApp color='inherit' fontSize='inherit' /> },
  ]

  return (
    <main className="bg-white h-full w-full">
      {/* Navbar */}
      <Navbar active='Articles' isDetail={true} />

      {/* Hero */}
      <section className="flex flex-col pt-32 md:pt-40 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-white md:justify-center md:items-center relative h-full">

        <div className="flex flex-col gap-4 md:px-24">
          <div className="flex flex-col gap-4 pb-6 border-b border-b-gray">
            <h1 className="font-semibold text-primary text-3xl md:text-[60px] md:text-center md:w-[100%] md:leading-[100%] leading-[150%]">
              Achieve Quality Equally For All Indonesian Student.
            </h1>

            <p className="text-gray text-base md:text-base md:text-center md:w-[100%]">
              Candidate College is an Education Platform that works to facilitate students.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full pt-2 gap-4">
            <p className='text-sm text-gray'>
              4 Min Read  &nbsp; | &nbsp; 24 July 2023
            </p>
            <div className="flex flex-row items-center gap-3">
              <p className='text-sm text-gray'>
                Share :
              </p>
              <div className="flex flex-row gap-3">
                {
                  socials.map((social, index) => (
                    <span key={index} className='text-xl rounded-full text-primary bg-secondary px-[0.65rem] pt-1 pb-2'>
                      {social.component}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <Image 
          src={'https://blog.gojek.io/content/images/2022/12/2_Year-End-Newsletter-Header-2022-02-02-2.jpg'}
          alt='Cover Landscape'
          title='Cover Landscape'
          width={100}
          height={0}
          className='w-full h-[25vh] md:h-full mt-2 rounded-xl object-cover'
        />

        <div className="text-primary text-base md:text-left w-full">Content goes here ...</div>

        <div className="flex flex-row items-center justify-between pb-6 mt-10 border-b border-b-gray w-full">
          <h2 className="font-semibold text-2xl md:text-4xl text-primary">Related Articles</h2>
        </div>

        {/* Articles */}
        <div className="flex flex-col gap-8 md:gap-5 mt-5 md:grid md:grid-cols-3">
              {
                articlesOnPage.slice(0, 3).map((article, index) => (
                  <div key={index} className={`flex-col gap-2 md:items-center md:gap-5 flex`}>
                    <Image 
                      width={100}
                      height={50}
                      src={article.coverLandscape}
                      alt={article.title}
                      title={article.title}
                      className='w-full md:flex-1 h-full rounded-xl'
                      priority
                    />

                    <div className="flex md:flex-1 flex-col gap">
                        <h3 className="font-semibold text-xl md:text-2xl text-primary">
                          {article.title}
                        </h3>
                        <p className="font-normal text-sm md:text-base text-gray">
                          {article.snippets}
                        </p>

                        <p className="font-normal text-xs text-gray md:mt-5 mt-3">
                          {article.publishedAt} | {article.duration} min read
                        </p>
                      </div>
                  </div>
                ))
              }
        </div>

      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  )
}

export default Detail