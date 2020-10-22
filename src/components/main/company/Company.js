import React, {useState, useCallback, useEffect} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Idea from './Idea'
import Greeting from './Greeting'
import Service from './Service'
import {default as Pop} from './CompanyPop'
import { Header, Footer, Nav } from '../../common/index'

const Company = () => {
  const [pop, popChange] = useState(true);

  const [IdeaFade1, setIdeaFade1] = useState(true);
  const [IdeaFade2, setIdeaFade2] = useState(false);
  const [IdeaFade3, setIdeaFade3] = useState(false);
  const [IdeaFade4, setIdeaFade4] = useState(false);
  const [service, setService] = useState('別');

  useEffect(()=> {

    window.scrollTo(0,0);

    const serviceBox = document.getElementsByClassName('service_box')[0]
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset ;

      if(y > 2735){
        popChange(false);
      }else{
        popChange(true);
      }

      if(y > 4200){
        serviceBox.classList.add('active');
      }else{
        serviceBox.classList.remove('active');
      }
        if(y < 5165){//4165~5165
          setService('別');
        }
        else if(y >= 5756 && y < 7312){//5165~6165
          setService('逢');
        }
        else if(y>=7312 && y < 8868){//6165~7165
          setService('長');
        }
        else if(y>= 8868 && y < 10424){//7165~8165
          setService('守');
        }
        else if(y>=10424 && y < 11980){//8165~9165
          setService('声');
        }
        else{//9165~10165
          setService('検');
        }
    });
  },[])

  return(
    <>
    <Header />
    <Nav />
    	<div className="pagebody company">
		  <div className="pageBar">
			  <div id="pageBar_point01" className="pageBar_point"></div>
			  <div id="pageBar_bar01" className="pageBar_bar"></div>
			  <div id="pageBar_point02" className="pageBar_point"></div>
			  <div id="pageBar_bar02" className="pageBar_bar"></div>
			  <div id="pageBar_point03" className="pageBar_point"></div>
			  <div id="pageBar_bar03" className="pageBar_bar"></div>
			  <div id="pageBar_point04" className="pageBar_point"></div>
		  </div>
		  <main className="main">
			  <div className="bk">
				  <div className="bar"></div>
				  <div className="recruitBtn"></div>
			  </div>
			  <div className="wrapper">
          <Pop pop={pop}/>
				  <p className="pagetitle"></p>
				  <ScrollAnimation offset={300} initialVisible="true" animateIn="fadeIn animated" animateOut="fadeOut" duration={0.5}><Idea num={"idea01"} heat={"heat01"} /></ScrollAnimation>
				  <ScrollAnimation offset={300} animateIn="fadeIn" animateOut="fadeOut" duration={0.5}><Idea num={"idea02"} heat={"heat02"} /></ScrollAnimation>
				  <ScrollAnimation offset={300} animateIn="fadeIn" animateOut="fadeOut" duration={0.5}><Idea num={"idea03"} heat={"heat02"} /></ScrollAnimation>
				  <ScrollAnimation offset={300} animateIn="fadeIn" animateOut="fadeOut" duration={0.5}><Idea num={"idea04"} heat={"heat02"} /></ScrollAnimation>
		  	</div>
			  <Greeting />
			  <Service service={service}/>
			  <div id="about" className="about">
				  <div className="bk-color"></div>
				  <div className="about_box">
					  <div className="rightbox">
						  <dl>
							  <dt><span>社名</span></dt>
							  <dd>ツチヤ自動車 株式会社</dd>

							  <dt><span>本拠所在地</span></dt>
							  <dd>〒272-0811 千葉県市川市北方町4-1441-8
							  	<br/>TEL：047-338-3588
							  	<br/>FAX：047-338-4988
							  	<br/>E-mail：ichikawa@tsuchiya-car.jp</dd>

							  <dt><span>設立</span></dt>
							  <dd>1969(昭和44)年4月</dd>

							  <dt><span>資本金</span></dt>
							  <dd>3000万円</dd>

							  <dt><span>社員数</span></dt>
							  <dd>75名</dd>

					  		<dt><span>事業内容</span></dt>
					  		<dd>全メーカーの新車／中古車販売
					  			<br/>全メーカーの車検／整備／鈑金
					  			<br/>塗装／カー用品／自動車部品販売
					  			<br/>損害保険代理店業／生命保険代理店業
								  <br/>クレジット業務／レンタカー事業</dd>

					  		<dt><span>事業所</span></dt>
						  	<dd className="shoptag"><a href="#">市川/市川2</a>/<a href="#">新小岩</a>
					  			<br/><a href="#">千葉北</a>/<a href="#">成田</a>/<a href="#">東金</a>/<a href="#">茂原</a></dd>

						  	<dt><span>許認可・免許・登録</span></dt>
					  		<dd>古物商許可番号：<br/>
					  			東京都公安委員会 第307767800176
								  <br/>
							  	古物商許可番号：<br/>
								  千葉県公安委員会 第441050001135
						  	</dd>
				  		</dl>
				  	</div>
				  	<div className="leftbox">
						  <dl>
						  	<dt><span>取引銀行</span></dt>
						  	<dd>千葉銀行／京葉銀行
						  		<br/>商工組合中央金庫／三井住友銀行</dd>

						  	<dt><span>取引損害保険会社</span></dt>
						  	<dd>あいおいニッセイ同和損害保険株式会社
						  		<br/>損害保険ジャパン日本興亜株式会社</dd>

						  	<dt><span>広告媒体</span></dt>
						  	<dd>ニッポン放送／千葉テレビ
						  		<br/>カーセンサー／Goo／読売新聞</dd>

						  	<dt><span>主要取引ディーラー</span></dt>
						  	<dd>東京トヨペット株式会社
						  		<br/>東京トヨタ自動車株式会社
						  		<br/>トヨタ東京カローラ株式会社
						  		<br/>ネッツトヨタ東都株式会社
						  		<br/>日産自動車販売株式会社
						  		<br/>株式会社スズキ自販東京
						  		<br/>東京スバル 株式会社
						  		<br/>関東三菱自動車販売 株式会社
						  		<br/>トヨタカローラ千葉 株式会社
						  		<br/>千葉トヨペット株式会社
						  		<br/>千葉トヨタ自動車株式会社
						  		<br/>ダイハツ千葉販売 株式会社
						  		<br/>他 協力店及び指定工場60社</dd>
						  </dl>
  					</div>
	  			</div>
		  	</div>
		  </main>
	   </div>
    </>
  )
}

export default Company
