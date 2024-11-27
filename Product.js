

function product({title,price,rating,category,imgurl}){
   let view=233;
  return(
    <div style={{ display:'flex', gap:'20px'}}>
       <div style={{flex:1}}>
          <img src={imgurl} alt={title} style={{width:'300px',height: 'auto'}}/>
          <h1>{title}</h1>
          <p>{price}</p>
          <h5>{rating}</h5>
          <h5>{category}</h5>
          <h2>{view}</h2>
       </div>
       <div style={{flex:1}}>
          <img src={imgurl} alt={title} style={{width:'300px',height: 'auto'}}/>
          <h1>{title}</h1>
          <p>{price}</p>
          <h5>{rating}</h5>
          <h5>{category}</h5>
       </div>
       <div style={{flex:1}}>
          <img src={imgurl} alt={title} style={{width:'300px',height: 'auto'}}/>
          <h1>{title}</h1>
          <p>{price}</p>
          <h5>{rating}</h5>
          <h5>{category}</h5>
       </div>
    </div>
  )
}
export default product;