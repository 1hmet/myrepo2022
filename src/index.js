import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"

const books = [

{
    author:"Jordan Moore",
    title: "Interesting Things Curious Minds",
    img: "./img/book.jpg",
},

{

    author:"James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YkqyaFVEL._SY466_.jpg",
}

]









const BookList = () => {
    return   <section className="booklist"> 
    {books.map((book)=>{
        const {img,title,author} = book
        return <Book img={img} title={title} author={author} />
    })}
    </section>
}
const Book = (props) => {
    const {img, title, author} = props
    
    return <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 >{author}</h4>

      

      <button>click me</button>
   
    </article>
}












const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<BookList/>)
