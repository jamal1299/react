import React from 'react'


const Common = (obj) => {
  return (
    <>
<div className="container mb-5 home">
<div className="row featurette mt-5">
      <div className="col-md-7">
        <h2 className="featurette-heading wellcome ">{obj.wellcome}<span className=" world">{obj.world}</span></h2>
        <p className="lead mt-5">{obj.para1}</p>

        <button className='btn mt-4 main-btn'>{obj.btntext}</button>      
      </div>
      <div className="col-md-5">
        <img src={obj.img} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"  aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />

      </div>
    </div>

    </div>
    
    
    </>
  )
}

export default Common