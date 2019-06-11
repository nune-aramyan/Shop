import React from 'react';
import Arrow from './Arrow';
import ImageSlide from './ImageSlide';
import '../Styles.css';


const imgUrls = [
	"http://jbsuits.com/blog/wp-content/uploads/2015/01/10-best-places-to-wear-a-suit.jpg",
	"https://splendorandarrow.com/wp-content/uploads/slider-main-07.jpg",
	"http://www.donscreation.com/wp-content/uploads/2014/07/new1.jpg",
	"https://cdn3.yoox.biz/cloud/karlwp/uploads/2019/01/Post-Standard-Feature-Image-1.jpg",
	"https://brightcove04pmdo-a.akamaihd.net/1268729919001/1268729919001_5861112994001_5861110814001-vs.jpg?pubId=1268729919001&videoId=5861110814001"
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