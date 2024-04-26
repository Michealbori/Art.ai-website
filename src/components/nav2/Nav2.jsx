import '../nav2/Nav2.css'

export default function Nav2()
{
    return (
        <div className="Nav2">

         <p id='Frame'> Frame color </p>
         <div className="Navber">
            <span id='ALLSpan'>
               <a href="" id="active">All</a>
            </span>
           

            <span id='FirstSpan'>
            <a href="" id='others'>This Month's</a>
            <a href="" id='others'>Photography</a> 
            </span>

            <span id='FirstSpan'>
            <a href="" id='others' className='g'>Graphic Design</a>
            <a href="" id='others' className='g'>Mixed Media</a>
            </span>
         </div>

                  <span id='filterSpan'>
                             <p>Filter <img src="src/Accets/Filter.png" alt="Filter" /></p>
                  </span>

    </div>
    )
    

}

