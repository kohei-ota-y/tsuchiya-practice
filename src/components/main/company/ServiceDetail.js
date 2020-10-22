import React from 'react';
import Image1 from'../../../assets/images/img_company_farewall.png'
import Image2 from'../../../assets/images/img_company_encounter.png'
import Image3 from'../../../assets/images/img_company_3.svg'
import Image4 from'../../../assets/images/img_company_protect.png'
import Image5 from'../../../assets/images/img_company_5.svg'
import Image6 from'../../../assets/images/img_company_check.png'
const ServiceDetail = (props) => {

  const data = {
    "別":{
        tit:"お車との別れ",
        text:"愛車を手放されるときは、次の愛車との出会いのタイミングでもあります。\nステキな次のお車との出会いには、直接買い取り・直接販売などの無料高額査定が可能な弊社に協力をさせてください。",
        img:Image1
    },
    "逢":{
        tit:"お車との\n新しい出会いのために",
        text:"欲しい車が売れてしまった、欲しい車が見つからない…\n豊富な在庫と自慢の仕入部隊がご希望のおクルマとの出会いをご協力させていただきます。",
        img:Image2
    },
    "長":{
        tit:"お車をより長く乗るために",
        text:"最大手のパートナー企業と独自開発した、業界最高品質の自動車修理保証を格安な価格でご利用いただけます。故障に備えた修理保証は私たちの自慢の1つです。",
        img:Image3
    },
    "守":{
        tit:"お客様をお守りするために",
        text:"最高水準のHGA代理店として、全営業スタッフが損害保険代理店資格を保有しています。\nお客様1人1人にピッタリの自動車保険をお勧めするのは、私たちの義務です。",
        img:Image4
    },
    "声":{
        tit:"お車の声に\n耳を傾けるために",
        text:"認証工場を完備する弊社では、納車後もお客様のカーライフをしっかりとサポート\n保証をご利用した故障修理から、日常点検、鈑金、オイル・タイヤ交換など、きめ細かなサービスをご用意いたしております。",
        img:Image5
    },
    "検":{
        tit:"お車の\n健康診断のために",
        text:"熟練のスタッフが関東運輸局指定・認証工場で民間車検を承ります。\nご予算のご相談から、代車のご用意まで、当社で購入していないお車でも大歓迎です。",
        img:Image6
    }
  }
  console.log(props.service)
  return(
    <li className="service_box_text">
      <p className="text_title">{data[props.service].tit}</p>
      <p>{data[props.service].text}</p>
      <div className="text_image"><img src={data[props.service].img} /></div>
    </li>
  )
}

export default ServiceDetail;
