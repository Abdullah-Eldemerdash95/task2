import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'

class PaginationComp extends Component {

 state = {
   list: [],
   perPage: 9,
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
        pages: Math.ceil(30 / perPage),
      });
  }


 handlePageClick = (event) => {
   let page = event.selected;
   this.setState({page})
 }

 


 render() {
   const {page, perPage, pages, list} = this.state;
   let {id} = this.props
   let weathers = list.filter(item => item.id === id).map(x=> ((x.includes).slice(page * perPage, (page + 1) * perPage)).map(thiy=> {
    return (
     <div className="image-container" key={(thiy.categoryNumber) + thiy.id + thiy.title } >
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
                  {weathers}
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

export default PaginationComp;

