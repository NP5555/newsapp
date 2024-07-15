import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
<h1>NEWS FEED</h1>
<div className='row'>

<div className='col-md-4'>
<Newsitem title="Trista Sutter was filming 'Special Forces' during absence: report - New York Post " description="The Bachelorette” alum Trista Sutter’s husband Ryan Sutter previously shared several bizarre Instagram posts amid her absence, and fans became concerned over her whereabouts and …" imageUrl="https://nypost.com/wp-content/uploads/sites/2/2024/06/bachelorette-star-trista-sutter-says-83620254.jpg?quality=75&strip=all&w=1024"/>
</div>

<div className='col-md-4'>
<Newsitem title="The world agreed to ban this dangerous pollutant — and it's working - The Washington Post" description="For the first time ever, researchers have detected a significant dip in atmospheric levels of hydrochlorofluorocarbons -- harmful gases that deplete the ozone layer and warm the planet." imageUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3333OZTDFRLIT4KWITCC7W2HEA.jpg&w=1440"/>
</div>

<div className='col-md-4'>
<Newsitem title="3t News" description="News Description"/>
</div>

</div>

<div className='row my-5'>

<div className='col-md-4'>
<Newsitem title="1st News" description="News Description"/>
</div>

<div className='col-md-4'>
<Newsitem title="2t News" description="News Description"/>
</div>

<div className='col-md-4'>
<Newsitem title="3t News" description="News Description"/>
</div>

</div>
      </div>
    )
  }
}
