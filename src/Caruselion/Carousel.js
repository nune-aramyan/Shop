import React from 'react';
import Arrow from './Arrow';
import ImageSlide from './ImageSlide';
import '../Styles.css';


const imgUrls = [
	"https://st2.depositphotos.com/3346543/9349/i/950/depositphotos_93496354-stock-photo-sale-shoes-sale-shoes.jpg", 
	"http://www.unze.com.pk/media/catalog/category/web-category_338.jpg",
	"https://t1sports.files.wordpress.com/2019/01/t1-sports-new-year-tennis-shoes-sale.png?w=940",
	"https://blog.wildberries.ru/wp-content/uploads/2015/10/shoes_15_17_last_day.jpg",
	"https://www.shoes.com/images/brand/B-vans-hero1-authentic-090518.jpg"
];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	componentDidMount(){
		this.timerID = setInterval(this.nextSlide,5000)
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide }  />
			</div>
		);
	}
}

export default Carousel;