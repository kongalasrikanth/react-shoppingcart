import React from 'react'
import menshero from '../../Images/hero.jpg'

function Title() {
  return (
    <div>
      <div className='main'>

        <div className='hero-sec'>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--4">
              <div className="card_1">
                <div className="card_1-body">
                  <h5 className="card_1_title">Men’s <br />Outerwear</h5>
                  <div className='lines'>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--8">
              <div className="card-img">
                <img alt="Venia_alt" src={menshero} className="card-img-top"/>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='sub hero-sec'>
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div className="card-img">
              <img alt="Venia_alt" src={menshero} className="card-img-top" />
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div className="card_1">
              <div className="card_1-body">
                <h5 className="card_1_title">Men’s <br />Outerwear</h5>
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