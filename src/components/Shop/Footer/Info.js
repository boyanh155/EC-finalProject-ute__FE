import React from 'react'

const Info = () => {
  return (
    
    <div className='row no-gutters Info__Row'>
      {/* R1 - C1 - Help */}
      <div className="col Info__Col">
        <div className="Info__Col--title">
        Help & support

        </div>
        <div className="Info__Col--content row no-gutters">
          shipping info
        </div>
        <div className="Info__Col--content row no-gutters">
          returns
        </div>
        <div className="Info__Col--content row no-gutters">
          how to order
        </div>
        <div className="Info__Col--content row no-gutters">
          how to track
        </div>
        <div className="Info__Col--content row no-gutters">
          size guide
        </div>
      </div>
      {/* R1 - C2 - Company */}
      <div className="col Info__Col">
        <div className="Info__Col--title">
        Company info

        </div>
        <div className="Info__Col--content row no-gutters">
          our company
        </div>
        <div className="Info__Col--content row no-gutters">
          our team
        </div>
      </div>
      {/* R1 - C3 - CService */}
      <div className="col Info__Col">
        <div className="Info__Col--title">
        Customer care

        </div>
        <div className="Info__Col--content row no-gutters">
          contact us
        </div>
        <div className="Info__Col--content row no-gutters">
          payment method
        </div>
        <div className="Info__Col--content row no-gutters">
          offer redemption
        </div>
      </div>
      {/* R1 - C4 - Social */}
      <div className="col Info__Col">
        <div className="Info__Col--title">
        Find us on

        </div>
        <div className="Info__Col--content row no-gutters">
          
        </div>
      </div>
      {/* R1 - C5 - App */}
      <div className="col Info__Col">
        <div className="Info__Col--title">
        App

        </div>
        <div className="Info__Col--content row no-gutters">
          
        </div>
      </div>
    </div>
  )
}

export default Info