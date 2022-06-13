import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import './Detail.css'

const Detail = () => {
    const { id } = useParams();
    const [items, setItems] = useState()

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(`https://retoolapi.dev/H2F0Ui/getemployedetail?id=${id}`)
        const data = await res.json()
        setItems(data[0]) 
        }
        fetchData()
    }, [id])

  return (
          (items)?
      <div className='prof'>
        <div className='detail'>
          <div className='comp__det'>
            <img className='logo' src={items.company_logo} alt="" />
            <h3>{ items.company }</h3>
          </div>
          <div className='name'>
            <div className='emp_det'>
                    <h3 className='emp'>
                        {items.name}
              </h3>
              <p>interests: { items.interests }</p>
            </div>
                    <p className='comp'>
                        {items.rating}
                    </p>
          </div>
          <div className='designation'>
            <h4>
              {items.designation}
            </h4>
            <p>
              {items.job_descripton}
            </p>
          </div>
          <a className='view' href={items.view_more}>View More</a>
            </div>
      </div> :
      <div className='prof'>
        <h1>Loading...</h1>
      </div>
  )
}

export default Detail