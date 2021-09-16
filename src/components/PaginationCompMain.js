import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'

class PaginationCompMain extends Component {

 state = {
   list: [],
   perPage:15, // cause the order map in each loop he took an object of each one of the 15
   page: 0,
   pages: 0,
 };


 componentDidMount = async () => {
    const list = await fetch('http://localhost:3000/people')
      .then(res => res.json())
      .then(data=> data)
      const {perPage} = this.state;
      this.setState({
        list,
        pages: Math.ceil(450 / perPage) // we have array with 15 objs and each have array of 30 object 450
      });
  }


 handlePageClick = (event) => {
   let page = event.selected;
   this.setState({page})
 }

 render() {
   const {page, perPage, pages, list} = this.state;

   // we used 15 here cause we want to make it equal 1 so it show each loop of map as 15 items 
  let basterds = list.map(x=> ((x.includes).slice(page * perPage /15 , (page + 1) * perPage/15 )).map(thiy=> {
    return (
     <div className="image-container" key={(thiy.categoryNumber) + thiy.id + x.name } >
       <Link to={{
  pathname: `/categories/${thiy.categoryNumber}/${thiy.id}`,
  state:{
    categoryNumber: thiy.categoryNumber,
    id: thiy.id,
    categoryName: x.name,
    title: thiy.title,
    imageUrl: `${thiy.imageUrl}`,
  }}}>
     <div className="photo--container">
     <div className="bg-img" >
     <img src={`${thiy.imageUrl}`} alt="Medium"/>
     </div>
     <h3>{thiy.title}</h3>
     </div>
     </Link> 
     </div>
    )
  })) || '';
   return (
     <>
       <div className="photos--container">
                <div className="row">
                  {basterds}
                  </div>
                  <ReactPaginate
         previousLabel={'Pervious'}
         nextLabel={'Next'}
         pageCount={pages}
         onPageChange={this.handlePageClick}
         containerClassName={'pagination'}
         activeClassName={'active'}
       />
                  </div>
         
      
     </>
   );
 }
}

export default PaginationCompMain;

