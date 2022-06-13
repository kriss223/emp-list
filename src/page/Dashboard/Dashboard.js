import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import './Dashboard.css'

const Dashboard = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(`https://retoolapi.dev/GFHqAV/getemployees`)
        const data = await res.json()
        setItems(data)
        }
        fetchData()
    }, [])

    return (
      <>
            <div className='dashboard'>Dashboard</div>
            {(!items) ? <h1>loading...</h1> :
                <div className='cards'>
                    {items.map(e => 
                            <div className='wrap' key={e.id}>
                            <Link to={`detail/${e.id}`}>
                                <div className='name-logo'>
                                    <img className='logo' src={e.company_logo} alt=""/>
                                    <div className='name'>
                                        <h3 className='emp'>
                                            {e.name}
                                        </h3>
                                        <p className='comp'>
                                            {e.company}
                                        </p>
                                    </div>
                                </div>
                                <h3 className='des'>
                                    {e.designation}
                                </h3>
                            </Link>
                            </div>
                    )}
                </div>
            }
      </>
  
  )
}

export default Dashboard