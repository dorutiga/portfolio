import './portfolio.css'

const PortfolioItem = ({project})=>  {

const {image, github, live } = project;

return ( <article className='item'>
<div className='portfolio_image_item'>
<img src={image} alt = 'img'></img>
</div>


<div className='cta'>
<a href={github} className='btn '> Github</a>
<a href={live} className='btn btn-primary ' target='_blank' rel="noreferrer"> Live Demo</a>
</div>

</article>)

}
export default PortfolioItem;