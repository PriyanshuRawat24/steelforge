"use client"

import React from 'react'
import Banner from '../components/banner'
import About from '../components/about'
import { Company } from '@/components/ui/cases-with-infinite-scroll'
import Team from '../components/ourteam'
import Counter from '../components/counter'

const Page = () => {
  return (
    <>

      <Banner heading="About Us" breadcrumbs={"About"} />
      <About className={"!important "}/>
      <Counter className={"md:pt-[30rem]"}/>
      <Team className={"pt-[600px]"}/>
      <Company />
    </>
  )
}

export default Page
