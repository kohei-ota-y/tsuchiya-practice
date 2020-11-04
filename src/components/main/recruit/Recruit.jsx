import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Pop from '../RecruitPop'
import { TopSlide, PeopleBar, RecruitHover } from './index'
import { Header, Footer, Nav } from '../../common/index'
import leftArrow from '../../../assets/images/left_arrow_r.svg'
import rightArrow from '../../../assets/images/right_arrow_r.svg'

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (<span className="prev-arrow" onClick={onClick} style={{ display: props.isShowArrow ? "none" : "block" }}><img src={leftArrow} alt="" /></span>);
}

function SampleNextArrow(props) {
	const { onClick } = props;
	return (<span className="next-arrow" onClick={onClick} style={{ display: props.isShowArrow ? "none" : "block" }}><img src={rightArrow} alt="" /></span>);
}

const Recruit = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	})
	const peopleSettings = {
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 5000,
		slidesToShow: 10,
		cssEase: "linear",
		variableWidth: true,
		slidesToScroll: 1,
	}
	const [prevStyle, setPrevStyle] = useState(true);
	const [nextStyle, setNextStyle] = useState(false);
	const settings = {
		prevArrow: <SamplePrevArrow isShowArrow={prevStyle} />,
		nextArrow: <SampleNextArrow isShowArrow={nextStyle} />,
		infinite: false, //スライドのループ有効化
		dots: true, //ドットのナビゲーションを表示
		centerMode: true, //要素を中央寄せ
		beforeChange: (current, next) => {
			console.log(next);
			if (next === 0) {
				setPrevStyle(true);
			} else if (next === 1) {
				setPrevStyle(false);
				setNextStyle(false);
			} else {
				setNextStyle(true);
			}
		}
	}

	return (
		<>
			<Header />
			<Nav className={"rec_nav"} />
			<div className="pagebody recruit">
				<main className="main" id="top">
					<Pop type="b" />
					<div className="top">
						<Slider {...settings} >
							<TopSlide slideNum="slide1" />
							<TopSlide slideNum="slide2" />
							<TopSlide slideNum="slide3" />
						</Slider>
					</div>
					<div className="mid">
						<Slider {...peopleSettings} className="people">
							<PeopleBar num={"people1"} />
							<PeopleBar num={"people2"} />
							<PeopleBar num={"people3"} />
							<PeopleBar num={"people4"} />
							<PeopleBar num={"people5"} />
							<PeopleBar num={"people6"} />
							<PeopleBar num={"people7"} />
							<PeopleBar num={"people1"} />
							<PeopleBar num={"people2"} />
							<PeopleBar num={"people3"} />
							<PeopleBar num={"people4"} />
							<PeopleBar num={"people5"} />
							<PeopleBar num={"people6"} />
							<PeopleBar num={"people7"} />
							<PeopleBar num={"people1"} />
							<PeopleBar num={"people2"} />
							<PeopleBar num={"people3"} />
							<PeopleBar num={"people4"} />
							<PeopleBar num={"people5"} />
							<PeopleBar num={"people6"} />
							<PeopleBar num={"people7"} />
						</Slider>
						<div className="carBox">
							<div className="car01">
								<div className="line01"></div>
							</div>
							<div className="car02">
								<div className="line02"></div>
							</div>
						</div>
					</div>
					<div className="wrapper">
						<div className="topBox">
							<ul>
								<RecruitHover kind={"story"} />
								<RecruitHover kind={"talk"} />
								<RecruitHover kind={"message"} />
							</ul>
						</div>
						<div className="bottomBox">
							<ul>
								<RecruitHover kind={"eforts"} />
								<RecruitHover kind={"training"} />
								<RecruitHover kind={"info"} />
								<RecruitHover kind={"qa"} />
							</ul>
						</div>
					</div>
				</main>
			</div>
			<Footer type={"recruit"} recruitTop={"recruitTop"} />
		</>
	)
}

export default Recruit
