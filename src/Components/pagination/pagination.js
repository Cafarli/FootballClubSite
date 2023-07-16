import { useEffect } from "react";
import "./pagination.css";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";

export function Paginate ({ postsPerPage, totalPosts, paginate, previousPage, nextPage, currentPage }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
       pageNumbers.push(i);
    }
    useEffect((e)=>{
      const parentEl = document.querySelector('.pagination')
      for(let i=0; i<parentEl.childNodes.length; i++){
         if(i!==currentPage){
            parentEl.childNodes[i].classList.remove('active')
         }
         parentEl.childNodes[currentPage].className += ' active'
            }
    })

  
    return (
       <div className="pagination-container">
          <ul className="pagination">
          <li onClick={previousPage} className="page-arrow">
          <MdKeyboardArrowLeft/>
            </li>
             {pageNumbers.map((number) => (
                <li
                   key={number}
                   onClick={(e) => {paginate(number)}}
                   className="page-number"
                >
                   {number}
                </li>
             ))}
             <li onClick={nextPage} className="page-arrow">
               <MdKeyboardArrowRight/>
            </li>
          </ul>
       </div>
    );
 };
  
//  export default Paginate;