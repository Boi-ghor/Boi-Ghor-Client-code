import React from 'react';
import BookCard from '../Card/BookCard';

const books=[1,2,3,4,5,6]

const PopularBooks = () => {


    return (


        <div>
            <h1 className='text-3xl font-semibold mx-10 my-6'>Popular Books</h1>

          <div className='flex flex-wrap justify-center gap-6'> 
          {books.map ((i)=>{
                {console.log(i)}
                

                return < BookCard/>
            }
                
            

            )}

          </div>
           
        </div>
    );
};

export default PopularBooks;