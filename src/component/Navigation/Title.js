import React from 'react'
// import menshero from '../../Images/hero.jpg'
import hero from '../../Images/hero.jpg'
import women from '../../Images/women.jpg'
import Electronics from '../../Images/lappy.png'
import jewellery from '../../Images/jewellery.jpg'
let heroimgs = {
  "Men's": hero,
  "Women's": women,
  "Electronics": Electronics,
  "Jewelery": jewellery
}
function Title({ category }) {
  category = category.replace('clothing', 'Outerwear');
  const heading = category.split(" ");
  for (var i = 0; i < heading.length; i++) {
    heading[i] = heading[i].charAt(0).toUpperCase() + heading[i].slice(1);
  }

  console.log(heading[0]);
  return (
    <div>
      <div className='main'>

        <div className='hero-sec'>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--4">
              <div className="card_1">
                <div className="card_1-body">
                <h5 class="card_1_title">{heading[0]}<br />{heading[1]}</h5>
                  <div className='lines'>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--8">
              <div className="card-img">
              <img style={{margin:" 15px 0px"}} src={heroimgs[heading[0]]} class="pic" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='sub hero-sec'>
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div className="card-img">
            <img src={heroimgs[heading[0]]} class="pic" alt="" />
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div className="card_1">
              <div className="card_1-body">
              <h5 class="card_1_title">{heading[0]}<br />{heading[1]}</h5>
                <div className='lines'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Title
