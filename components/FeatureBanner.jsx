import React from 'react';
import { urlFor } from '../lib/client';

const FeatureBanner = ({features}) => {
  return (
    <div className="FeatureContainer mx-auto">

      <div className="FeatureGrid align-items-center">

        <div className="row w-100 row-cols-2">

              <div className="col-3">

                <div className="row">

                  <div >
                      <img 
                          src={urlFor(features[0].icon)} 
                          width={60}
                          height={60}
                          className="feature-icon"
                      />
                  </div>

                </div>

              </div>

              <div className="col-9">

                <div className="row">
                  <p className="feature-title">{features[0].title}</p>
                </div>
            
                <div className="row">
                  <p className="feature-description">{features[0].description}</p>
                </div>

              </div>
        </div>    

        <div className="row w-100 row-cols-2">

              <div className="col-3">

                <div className="row">

                  <div >
                      <img 
                          src={urlFor(features[1].icon)} 
                          width={60}
                          height={60}
                          className="feature-icon"
                      />
                  </div>

                </div>

              </div>

              <div className="col-9">

                <div className="row">
                  <p className="feature-title">{features[1].title}</p>
                </div>
            
                <div className="row">
                  <p className="feature-description">{features[1].description}</p>
                </div>

              </div>
        </div>      
        
        <div className="row w-100 row-cols-2">

              <div className="col-3">

                <div className="row">

                  <div >
                      <img 
                          src={urlFor(features[2].icon)} 
                          width={60}
                          height={60}
                          className="feature-icon"
                      />
                  </div>

                </div>

              </div>

              <div className="col-9">

                <div className="row">
                  <p className="feature-title">{features[2].title}</p>
                </div>
            
                <div className="row">
                  <p className="feature-description">{features[2].description}</p>
                </div>

              </div>
        </div>          
    
      </div>

    </div>
  )
}

export default FeatureBanner