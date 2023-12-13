import './css/style.css'

const App = () => {
return(
    <>
   <div className="relative">
  <img className="w-full" src="https://res.cloudinary.com/derwgb2aj/image/upload/v1702441403/xyaozcavnlzqbkml7wu1.png" />
  <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 top-72">
    Sling Academy</h1>
  {/* <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2> */}
  {/* <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3> */}
  {/* <h3 className="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}
</div>
    </>
)
}

export default App

// const Text = () => {
//     return(
//         <>
//         <div className='mx-auto'>
//             <div className="text-center mx-auto bg-image text-white">
//                 <h1 className="text-2xl font-bold">Hellloo</h1>
//                 <p className='mt-60'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, nulla!</p>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Text
