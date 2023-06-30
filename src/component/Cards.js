import React, {useState} from 'react'
import ReactStars from 'react-stars';

const Cards = () => {

    const [data, setData] = useState([
        {
            name: "Asur 2",
            year: "2023",
            rating: 5,
            img:"https://assets.gadgets360cdn.com/pricee/assets/product/202305/Asur-Season-1_1685018145.jpg"
        },
        {
            name: "Sacred Games 2",
            year: "2018",
            rating: 4.5,
            img:"https://pbs.twimg.com/media/D6LgUiYUcAAGjCW.jpg"
        },
        {
            name: "Mirzapur",
            year: "2018",
            rating: 3.5,
            img:"https://timesofindia.indiatimes.com/thumb/78802407.cms?width=219&height=317&quality=80&imgsize=89911"
        },
        {
            name: "Game Of Thrones",
            year: "2008-13",
            rating: 4.4,
            img:"https://assets.vogue.in/photos/5ce40baeb8031105d88f4b5c/2:3/w_2560%2Cc_limit/Game-Of-Thrones-Season-1-Recap.jpg"
        },
        {
            name: "Gangs Of Wasseypur",
            year: "2014",
            rating: 4.3,
            img:"https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_FMjpg_UX1000_.jpg"
        },
        {
            name: "Asur 2",
            year: "2023",
            rating: 5,
            img:"https://assets.gadgets360cdn.com/pricee/assets/product/202305/Asur-Season-1_1685018145.jpg"
        },
        {
            name: "Sacred Games 2",
            year: "2018",
            rating: 4.5,
            img:"https://pbs.twimg.com/media/D6LgUiYUcAAGjCW.jpg"
        },
        {
            name: "Mirzapur",
            year: "2018",
            rating: 3.5,
            img:"https://timesofindia.indiatimes.com/thumb/78802407.cms?width=219&height=317&quality=80&imgsize=89911"
        },
        {
            name: "Game Of Thrones",
            year: "2008-13",
            rating: 4.4,
            img:"https://assets.vogue.in/photos/5ce40baeb8031105d88f4b5c/2:3/w_2560%2Cc_limit/Game-Of-Thrones-Season-1-Recap.jpg"
        },
        {
            name: "Gangs Of Wasseypur",
            year: "2014",
            rating: 4.3,
            img:"https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_FMjpg_UX1000_.jpg"
        },
    ],[])

  return (
    <div className='flex flex-wrap justify-evenly p-3 mt-5' >

        {data.map((e, i)=>{
            return(

            

      <div key={i} className='card p-3 shadow-xl hover:-translate-y-2 cursor-pointer text-lg font-bold mt-6 transition-all duration-300' >

        <img className='h-80 w-60' src={e.img} alt={e.name} />

        <h1> <span className='text-gray-500'>Name:</span>  {e.name} </h1>

        <h1 className='flex text-center'> <span className='text-gray-500 mr-2'>Rating:</span>  <ReactStars 
            size={20}
            half={true}
            value={e.rating}
            edit={false}/>
             </h1>

        <h1> <span className='text-gray-500'>Release Year:</span> {e.year}</h1>
      </div>
)})}
    </div>
  )
}

export default Cards
