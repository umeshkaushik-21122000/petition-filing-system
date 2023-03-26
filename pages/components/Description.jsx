import React from 'react'
import Link from "next/link";
function Description() {
  return (
    <section  className="text-gray-400 bg-gray-900 body-font pt-7 group-hover:blur-sm">
        <div   className="flex"><h1   className="mx-auto text-4xl text-gray-300 text-bold"> Trending Petition</h1></div>
    <div  className="container px-5 py-24 mx-auto">
      <div  className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
        <div  className="flex  inline-flex items-center  rounded-full text-green-400 bg-gray-800 flex-shrink-0">
          <img src="/assets/chruch.jpg"   className="h-36 w-36 rounded-full m-4" />
        </div>
        <div  className="flex-grow sm:text-left text-center mt-6 sm:mt-0 group-hover:blur-sm">
          <h2  className="text-white text-lg title-font font-medium mb-2">Save ChurchGate - Mumbai's Iconic Place</h2>
          <p  className="leading-relaxed text-base p-3">To: State Government, Ministry of Home Affairs, Ministry of Railways, Department of Posts and Survey of India.</p>
         <Link href="/Save ChurchGate - Mumbai's Iconic Place" className="mt-3 text-green-400 inline-flex items-center"> Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div  className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
        <div  className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2  className="text-white text-lg title-font font-medium mb-2">Request to Zomato to Reduce High Commission</h2>
          <p  className="leading-relaxed text-base p-3">We, the undersigned, urge you to reduce the high commission charges for food delivery from our restaurants. The current commission rates of 24-30% are too high, especially for businesses operating in tier 3 cities like ours.</p>
         <Link href="/Request to Zomato to Reduce High Commission" className="mt-3 text-green-400 inline-flex items-center" >Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div  className=" order-first sm:order-none  inline-flex items-center justify-center rounded-full text-green-400 bg-gray-800 flex-shrink-0">
        <img src="/assets/zomato.jpeg"   className="h-36 w-36 rounded-full m-4" />
        </div>
      </div>
      <div  className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
        <div  className="inline-flex items-center justify-center rounded-full text-green-400 bg-gray-800 flex-shrink-0">
        <img src="/assets/trucking-service.jpg"   className="h-36 w-36 rounded-full m-4" />
        </div>
        <div  className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2  className="text-white text-lg title-font font-medium mb-2">No Parking Lots under Parks in Mumbai</h2>
          <p  className="leading-relaxed text-base p-3">The BMC has planned to push for underground parking facilities under the decades old public parks namely Pushpa Narsee Park in Juhu and Patwardhan Park in Bandra. This is being done under a current provision in the city's Development Control Regulations. </p>
         <Link href="/No Parking Lots under Parks in Mumbai" className="mt-3 text-green-400 inline-flex items-center"> Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    
    </div>
  </section>
  )
}

export default Description