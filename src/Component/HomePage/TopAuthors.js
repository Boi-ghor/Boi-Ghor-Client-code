import React from 'react';
import AuthorCard from '../Card/AuthorCard';
const author=[1,2,3,4,5,6]

const TopAuthors = () => {
    return (
        <div>
        <h1 className='text-3xl font-semibold mx-10 my-6'>Popular Books</h1>

      <div className='flex flex-wrap justify-center gap-6'> 
      {author.map ((i)=>{
            {console.log(i)}
            

            return < AuthorCard/>
        }
            
        

        )}

      </div>
       
    </div>
    );
};

export default TopAuthors;