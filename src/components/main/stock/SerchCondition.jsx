import React from 'react'
import { SerchMaker, SerchType } from './index'
import SerchPickUp from './SerchPickUp'

const SerchCondition = (props) => {
    const onModal = {
        display: "block"
    }
    const offModal = {
        display: "none"
    }
    console.log(props.conditionModal)
    return (
        <div id="condition" style={props.conditionModal ? (onModal):(offModal)}>
            <div className="close" onClick={props.modalOffHandle}>
                <span></span>
                <span></span>
                <span>とじる</span>
            </div>
            <form name="condition">
                <div className="form_box_left">
                    <div className="meka">
                        <p>メーカー(複数選択可)</p>
                        <SerchMaker />
                    </div>
                    <div className="carName">
                        <p>車名(複数選択可)</p>
                        <input type="text" list="carNameList" placeholder="車名を選択又は入力してください" id="carNameInput" multiple />
                        <datalist id="carNameList">
                            <option value="carName01"></option>
                            <option value="carName02"></option>
                            <option value="carName03"></option>
                            <option value="carName04"></option>
                            <option value="carName05"></option>
                            <option value="carName06"></option>
                            <option value="carName07"></option>
                            <option value="carName08"></option>
                            <option value="carName09"></option>
                            <option value="carName10"></option>
                        </datalist>
                    </div>
                    <div className="body">
                        <p>ボディタイプ(複数選択可)</p>
                        <SerchType />
                    </div>
                    <div className="pick">
                        <p>ピックアップ(複数選択可)</p>
                        <SerchPickUp />
                    </div>
                </div>
                <div className="form_box_right">
                    <div className="price">
                        <p>販売価格</p>
                        <div className="selectBox">
                            <div className="selectBox_item">
                                <select name="before">
                                    <option value="指定なし">指定なし</option>
                                    <option value="0">0円</option>
                                    <option value="30">30万円</option>
                                    <option value="50">50万円</option>
                                    <option value="80">80万円</option>
                                    <option value="100">100万円</option>
                                    <option value="150">150万円</option>
                                    <option value="200">200万円</option>
                                    <option value="200以上">200万円以上</option>
                                </select>
                            </div>
                            <p>〜</p>
                            <div className="selectBox_item">
                                <select name="after">
                                    <option value="指定なし">指定なし</option>
                                    <option value="0">0円</option>
                                    <option value="30">30万円</option>
                                    <option value="50">50万円</option>
                                    <option value="80">80万円</option>
                                    <option value="100">100万円</option>
                                    <option value="150">150万円</option>
                                    <option value="200">200万円</option>
                                    <option value="200以上">200万円以上</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="distance">
                        <p>走行距離</p>
                        <div className="selectBox">
                            <div className="selectBox_item">
                                <select name="before">
                                    <option value="指定なし">指定なし</option>
                                    <option value="0">0km</option>
                                    <option value="1">10,000km</option>
                                    <option value="3">30,000km</option>
                                    <option value="5">50,000km</option>
                                    <option value="7">70,000km</option>
                                    <option value="10">100,000km</option>
                                    <option value="10以上">100,000km以上</option>
                                </select>
                            </div>
                            <p>〜</p>
                            <div className="selectBox_item">
                                <select name="before">
                                    <option value="指定なし">指定なし</option>
                                    <option value="0">0km</option>
                                    <option value="1">10,000km</option>
                                    <option value="3">30,000km</option>
                                    <option value="5">50,000km</option>
                                    <option value="7">70,000km</option>
                                    <option value="10">100,000km</option>
                                    <option value="10以上">100,000km以上</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modelYear">
                        <p>年式</p>
                        <div className="selectBox">
                            <div className="selectBox_item">
                                <select name="before">
                                    <option value="指定なし">指定なし</option>
                                    <option value="2020">令和2(2020)年</option>
                                    <option value="2019">令和1(2019)年</option>
                                    <option value="2018">平成30(2018)年</option>
                                    <option value="2017">平成29(2017)年</option>
                                    <option value="2016">平成28(2016)年</option>
                                    <option value="2015">平成27(2015)年</option>
                                    <option value="2014">平成26(2014)年</option>
                                    <option value="2013">平成25(2013)年</option>
                                    <option value="2012">平成24(2012)年</option>
                                    <option value="2011">平成23(2011)年</option>
                                    <option value="2010">平成22(2010)年</option>
                                    <option value="2009">平成21(2009)年</option>
                                    <option value="2008">平成20(2008)年</option>
                                    <option value="2007">平成19(2007)年</option>
                                    <option value="2006">平成18(2006)年</option>
                                    <option value="以前">それ以前</option>
                                </select>
                            </div>
                            <p>〜</p>
                            <div className="selectBox_item">
                                <select name="before">
                                    <option value="指定なし">指定なし</option>
                                    <option value="2020">令和2(2020)年</option>
                                    <option value="2019">令和1(2019)年</option>
                                    <option value="2018">平成30(2018)年</option>
                                    <option value="2017">平成29(2017)年</option>
                                    <option value="2016">平成28(2016)年</option>
                                    <option value="2015">平成27(2015)年</option>
                                    <option value="2014">平成26(2014)年</option>
                                    <option value="2013">平成25(2013)年</option>
                                    <option value="2012">平成24(2012)年</option>
                                    <option value="2011">平成23(2011)年</option>
                                    <option value="2010">平成22(2010)年</option>
                                    <option value="2009">平成21(2009)年</option>
                                    <option value="2008">平成20(2008)年</option>
                                    <option value="2007">平成19(2007)年</option>
                                    <option value="2006">平成18(2006)年</option>
                                    <option value="以前">それ以前</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="shoplist">
                        <p>店舗</p>
                        <ul className="carlist">
                            <li><input type="checkbox" name="store" id="ichikawa" value="ichikawa" /><label htmlFor="ichikawa">市川/市川2号店</label></li>
                            <li><input type="checkbox" name="store" id="shinkoiwa" value="shinkoiwa" /><label htmlFor="shinkoiwa">新小岩店</label></li>
                            <li><input type="checkbox" name="store" id="tibakita" value="tibakita" /><label htmlFor="tibakita">千葉北店</label></li>
                        </ul>
                        <ul className="carlist">
                            <li><input type="checkbox" name="store" id="narita" value="narita" /><label htmlFor="narita">成田店</label></li>
                            <li><input type="checkbox" name="store" id="togane" value="togane" /><label htmlFor="togane">東金店</label></li>
                            <li><input type="checkbox" name="store" id="mobara" value="mobara" /><label htmlFor="mobara">茂原店</label></li>
                        </ul>
                        <div className="shop_map">
                            <div id="shop_map01"></div>
                            <div id="shop_map02"></div>
                            <div id="shop_map03"></div>
                            <div id="shop_map04"></div>
                            <div id="shop_map05"></div>
                            <div id="shop_map06"></div>
                        </div>
                    </div>
                    <div className="serchClear">
                        <button type="reset" className="clear">条件クリア</button>
                        <button type="submit" className="serching">検索する</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default SerchCondition