import React from 'react'

const shorts=[
  {
    short:"https://youtube.com/embed/shorts/KROWI3dwKLM?si=q4wgD4iOuWWsBh7e"
  },
  {
    short:"https://youtube.com/embed/shorts/04kc1qryaQg?si=JQ81g1RbifingYsN"
  },
  {
    short:"https://youtube.com/embed/shorts/BK_4YGVizpc?si=a5TSBzNt6ownBXRu"
  },
  {
    short:"https://youtube.com/embed/shorts/eVqNwMexD8A?si=--UhqSy8XQSVmOJl"
  },
  {
    short:"https://youtube.com/embed/shorts/VsrISNRPHA8?si=FNPIxPjotLkxg-L8"
  },
  {
    short:"https://youtube.com/embed/shorts/mTKABwr_tIA?si=GiCW0wOiHYJC6h9I"
  }
]
function Shorts() {
  return (
    <>
    <main id='shorts_div'>
      {
        shorts.map((v)=>{
          const{short}=v;
          return (
            <>
        <div className='short-div'>
         <iframe src={short}></iframe>
         
        </div>

            </>
          )
        })
      }
    </main>
    </>
  )
}

export default Shorts