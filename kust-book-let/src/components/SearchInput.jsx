import React from 'react'

export const SearchInput = () => {
  return (
    <div>
        <form action="">

        <div class="relative">

            <input type="text" class="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:text-gray-300  focus:outline-none " placeholder="Search" />
            <span class="absolute inset-y-0 right-4 flex items-center pl-3">
                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </span>
        </div>
        </form>
    </div>
 )
}
