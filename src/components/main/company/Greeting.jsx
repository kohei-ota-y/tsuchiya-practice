import React from 'react'
import GreetinImage from '../../../assets/images/company-greeting.png'
const Greeting = () => {
  return(
    <div id="greet" className="greet">
      <div className="greet-bg"></div>
      <div className="greet_box">
        <div className="greet_image"><img src={GreetinImage} alt="代表取締役　土屋正己" /></div>
        <div className="greet_box_text">
          <p>ツチヤ自動車株式会社は昭和44年4月、東京・葛飾に誕生いたしました。当時はまだわが国の自動車社会は黎明期にあり、車種もそれほど多くはありませんでした。<br/>しかし、その後に訪れる高度経済成長とともに自動車社会は急成長をとげ、わが国の基幹産業といえるまでに成長。世界に冠たる自動車社会の雄としての今日の姿を形成するに至りました。</p>

          <p>当社は、こうした時代とともに今年創業50年を迎え、現在、東京・千葉エリアに７店舗をもつ中古車ディーラーへと成長してきました。この間、当社が販売したクルマの数は25万台余りー。この数こそが地域ナンバー1をめざす当社の誇りでもあり、スタッフの自信にも繋がっています。</p>

          <p>当社の基本理念は"地域の皆様とともに成長する企業であること。<br/>
            すなわち、地域の皆様に愛される『ツチヤ自動車』であり続けることこそが私たちの存在意義につながるものだと信じております。<br/>
            今後もツチヤ自動車は「地域の皆様とともに成長する企業」であり続ける為に、皆さまとのご縁を大事にし、地域に唯一無二の「中古車のデパート・ツチヤ自動車」として、広く皆様に愛される存在であるよう、『革新への挑戦』に励み、スタッフ一同さらなる努力を重ねていく所存です。</p>

          <p>皆様には今後とも変わらぬご指導とご鞭撻のほど、宜しくお願い申し上げます。</p>
        </div>
      </div>
    </div>
  )
}

export default Greeting
