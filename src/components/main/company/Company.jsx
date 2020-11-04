import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Idea, Service, Greeting, Pop, About, PageBar } from './index'
import { Header, Footer, Nav } from '../../common/index'
import { useLocation } from 'react-router';

const Company = () => {
	const [pop, popChange] = useState(true),
		[service, setService] = useState('別'),
		[barStyle, setBarStyle] = useState({});

	useEffect(() => {

		window.scrollTo(0, 0);

		const serviceBox = document.getElementsByClassName('service_box');
		const serviceIcon = document.getElementsByClassName('service_icon__li');
		// スクロールに応じて表示の変化
		window.addEventListener('scroll', () => {
			if (serviceBox[0] !== undefined) {
				let y = window.pageYOffset;
				if (y > 2735) {
					popChange(false);
				} else {
					popChange(true);
				}
				// pageBarのスクロールアニメーション
				if (y < 3000) {
					setBarStyle({
						clipPath: "inset(0% 0% 89%)"
					})
				} else if (3000 < y && y <= 4200) {
					setBarStyle({
						clipPath: "inset(0% 0% 60%)"
					})
				} else if (4200 < y && y <= 14360) {
					setBarStyle({
						clipPath: "inset(0% 0% 30%)"
					})
				} else {
					setBarStyle({
						clipPath: "inset(0% 0% 0%)"
					})
				}
				//serviceの一文字のスクロールによってのスタイル変更
				if (y > 4200) {
					serviceBox[0].classList.add('active');
				} else {
					serviceBox[0].classList.remove('active');
				}
				if (y < 5165) {
					setService('別');
					serviceIcon[0].classList.add('active_icon');
					serviceIcon[1].classList.remove('active_icon');
				}
				else if (y >= 5165 && y < 7312) {
					setService('逢');
					serviceIcon[0].classList.remove('active_icon');
					serviceIcon[1].classList.add('active_icon');
					serviceIcon[2].classList.remove('active_icon');
				}
				else if (y >= 7312 && y < 8868) {
					setService('長');
					serviceIcon[1].classList.remove('active_icon');
					serviceIcon[2].classList.add('active_icon');
					serviceIcon[3].classList.remove('active_icon');
				}
				else if (y >= 8868 && y < 10424) {
					setService('守');
					serviceIcon[2].classList.remove('active_icon');
					serviceIcon[3].classList.add('active_icon');
					serviceIcon[4].classList.remove('active_icon');
				}
				else if (y >= 10424 && y < 11980) {
					setService('声');
					serviceIcon[3].classList.remove('active_icon');
					serviceIcon[4].classList.add('active_icon');
					serviceIcon[5].classList.remove('active_icon');
				}
				else {
					setService('検');
					serviceIcon[4].classList.remove('active_icon');
					serviceIcon[5].classList.add('active_icon');
				}
			}
		});
	}, [])

	return (
		<>
			<Header />
			<Nav />
			<div className="pagebody company">
				<PageBar barStyle={barStyle} />
				<main className="main">
					<div className="bk">
						<div className="bar"></div>
						<div className="recruitBtn"></div>
					</div>
					<div className="wrapper">
						<Pop pop={pop} />
						<p className="pagetitle"></p>
						<ScrollAnimation offset={300} initialVisible="true" animateIn="fadeIn animated" animateOut="fadeOut" duration={0.5}><Idea num={"idea01"} heat={"heat01"} /></ScrollAnimation>
						<ScrollAnimation offset={300} animateIn="fadeIn" animateOut="fadeOut" duration={0.5}><Idea num={"idea02"} heat={"heat02"} /></ScrollAnimation>
						<ScrollAnimation offset={300} animateIn="fadeIn" animateOut="fadeOut" duration={0.5}><Idea num={"idea03"} heat={"heat02"} /></ScrollAnimation>
						<ScrollAnimation offset={300} animateIn="fadeIn" animateOut="fadeOut" duration={0.5}><Idea num={"idea04"} heat={"heat02"} /></ScrollAnimation>
					</div>
					<Greeting />
					<Service service={service} />
					<About />
				</main>
			</div>
			<Footer />
		</>
	)
}

export default Company
