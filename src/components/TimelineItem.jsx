import React from 'react';

function TimelineItem({ year, title, duration, details }) {
   return (
      <div>
      <ol className="flex flex-col md:flex-row relative border-l ml-5 border-stone-200 ">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white -ml-2 dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {year}
               </span>
               <h3 className="text-lg font-semibold  text-white">
                  {title}
               </h3>
               <div className="my-1 text-sm font-normal leading-none  text-gray-500">
                  {duration}
               </div>
            </p>
            <p className="my-2 text-base font-normal text-gray-500 dark:text-stone-400">
               {details}
            </p>
         </li>
      </ol>
      </div>
   )
}

export default TimelineItem;