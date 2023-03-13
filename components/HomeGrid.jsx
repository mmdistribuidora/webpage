import React from 'react';
import Link from "next/link";
import { urlFor } from '../lib/client';
import useScript from '../hooks/useScript';

const HomeGrid = ({category}) => {
  return (
        <div className="container w-75 mx-auto">
            <div className="row">

                <div className="col parent">
                    <div className="grid-container">
                        <img 
                            src={urlFor(category[0].image)} 
                            className="d-block w-100" 
                        />
                    </div>
                    <div className="child top-85 start-10 GridTitle">
                        <p>{category[0].name}</p>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <div className="col parent">
                            <div className="grid-container">
                                <img 
                                    src={urlFor(category[1].image)}  
                                    className="d-block w-100"
                                >
                                </img>
                            </div>
                            <div className="child top-80 start-5 GridTitle">
                                <p>{category[1].name}</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col parent">
                        <div className="h-5"></div>
                            <div className="grid-container">
                                <img 
                                    src={urlFor(category[3].image)}  
                                    className="d-block w-100"
                                />
                            </div>
                            <div className="child top-80 start-10 GridTitle">
                                <p>{category[3].name}</p>
                            </div>
                        </div>
                        <div className="col parent">
                            <div className="h-5"></div>
                            <div className="grid-container">
                            <img 
                                src={urlFor(category[2].image)}  
                                className="d-block w-100"
                            />
                            </div>
                            <div className="child top-80 start-10 GridTitle">
                                <p>{category[2].name}</p>
                            </div>                            
                        </div>
                    </div>         
                </div>
                
            </div>
        </div>
    )
}

export default HomeGrid

