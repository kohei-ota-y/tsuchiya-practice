import logoToyota from '../../../assets/images/img_brandtoyota.png'
import logoLexus from '../../../assets/images/img_brandlexus.png'
import logoNissan from '../../../assets/images/img_brandnissan.png'
import logoHonda from '../../../assets/images/img_brandhonda.png'
import logoSuzuki from '../../../assets/images/img_brandsuzuki.png'
import logoDaihatu from '../../../assets/images/img_branddaihatsu.png'
import logoMazda from '../../../assets/images/img_brandmazda.png'
import logoSubaru from '../../../assets/images/img_brandsubaru.png'
import logoMitsubisi from '../../../assets/images/img_brandmitsubishi.png'
import logoIsuzu from '../../../assets/images/img_brandisuzu.png'
import logoMitsuoka from '../../../assets/images/img_brandmitsuoka.png'
import logoImported from '../../../assets/images/img_brandimported.png'

import logoType01 from '../../../assets/images/icon_car01.png'
import logoType02 from '../../../assets/images/icon_car02.png'
import logoType03 from '../../../assets/images/icon_car03.png'
import logoType04 from '../../../assets/images/icon_car04.png'
import logoType05 from '../../../assets/images/icon_car05.png'
import logoType06 from '../../../assets/images/icon_car06.png'
import logoType07 from '../../../assets/images/icon_car07.png'
import logoType08 from '../../../assets/images/icon_car08.png'


const data = {
    "maker": {
        contents: [
            { nameJ: "トヨタ", nameE: "toyota", logo: logoToyota },
            { nameJ: "レクサス", nameE: "lexus", logo: logoLexus },
            { nameJ: "日産", nameE: "nissan", logo: logoNissan },
            { nameJ: "ホンダ", nameE: "honda", logo: logoHonda },
            { nameJ: "スズキ", nameE: "suzuki", logo: logoSuzuki },
            { nameJ: "ダイハツ", nameE: "daihatu", logo: logoDaihatu },
            { nameJ: "マツダ", nameE: "mazda", logo: logoMazda },
            { nameJ: "スバル", nameE: "subaru", logo: logoSubaru },
            { nameJ: "三菱", nameE: "mitsubisi", logo: logoMitsubisi },
            { nameJ: "いすず", nameE: "isuzu", logo: logoIsuzu },
            { nameJ: "ミツオカ", nameE: "mitsuoka", logo: logoMitsuoka },
            { nameJ: "輸入車", nameE: "imported", logo: logoImported }
        ]
    },
    "type": {
        contents: [
            { value: "軽自動車", id: "cartype01", logo: logoType01 },
            { value: "コンパクトカー", id: "cartype02", logo: logoType02 },
            { value: "セダン", id: "cartype03", logo: logoType03 },
            { value: "スポーツ/クーペ", id: "cartype04", logo: logoType04 },
            { value: "ミニバン", id: "cartype05", logo: logoType05 },
            { value: "SUB/4WD", id: "cartype06", logo: logoType06 },
            { value: "ステーションワゴン", id: "cartype07", logo: logoType07 },
            { value: "バン/トラック", id: "cartype08", logo: logoType08 }
        ]
    },
    "PickUp":{
        contents: [
            { id:"newArrival", text:"新着(3ヶ月以内)" },
            { id:"pricedown", text:"プライスダウン"},
            { id:"new", text:"未使用者" },
            { id:"eco", text:"エコカー", span: "(EV、ハイブリット、PHV)" },
            { id:"female", text:"女性向け" },
            { id:"welfare", text:"福祉社" },
        ]
    }
}

export default data