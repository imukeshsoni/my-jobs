import React from 'react'
import Header from '../../components/Header/Header'
import BaseLayout from '../../components/BaseLayout'
import Companies from '../../components/Companies'
import './styles.css'

function HomePage() {
  return (
    <BaseLayout> 
            <Header/>
      <div>
        this is test
      </div>

      <Companies />

    </BaseLayout>
  )
}

export default HomePage