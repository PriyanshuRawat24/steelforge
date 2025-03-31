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
      <About/>
      <Counter/>
      <Team/>
      <Company />
    </>
  )
}

export default Page
