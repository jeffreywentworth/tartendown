import React from 'react'
import Layout from '../components/Layout.jsx'
import ImageHeader from '../components/ImageHeader.jsx'

const ourplants = () => {
  return (
    <div>
      <div>Our Plants</div>
      <div className='flex justify-center'> 
          <ImageHeader /> 
      </div>
      <h1>SO MANY PLANTS</h1>
      <p className='w-[25%]'>Tartendown offers a wide variety of well-tended plants. The majority of stock is grown on site, so plants are healthy and sturdy.</p>
      <br></br>
      <p>There are a lot of perennials, shrubs, alpines, hedging and trees. The nursery has a fair amount of large specimen plants including rhododendrons and camelias which are ideal for landscapers or for gardeners who want something that is instantly established.</p>
      <br></br>
      <p>Tartendown also offers a good range of bedding and patio plants in spring and not only sells planted hanging baskets but also offers a re-filling service.</p>
      <br></br>
      <p>There is plenty of advice on hand from Dawn and Simon and colleague Phil. They are used to people bringing a rough sketch of their garden and can help suggest what will work best to create the effect they want.</p>
    </div>
  )
}

export default ourplants;