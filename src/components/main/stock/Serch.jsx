import React, { useState } from 'react'
import { SerchMaker, SerchType, SerchCondition } from './index'

import logoSerchMaker from '../../../assets/images/txt_searchmaker.png'
import logoSerchType from '../../../assets/images/txt_searchtype.png'
import logoSerchPrice from '../../../assets/images/txt_searchtype.png'
import logoSerchCondition from '../../../assets/images/txt_searchcondition.png'

const Serch = () => {
    const [ conditionModal, setConditionModal ] = useState(false)

    const modalOnHandle = () => {
        setConditionModal(true)
    }
    const modalOffHandle = () => {
        setConditionModal(false)
    }
    return (
        <>
            <ul id="tab">
                <li className="manufacture tab_list">
                    <img src={logoSerchMaker} alt="メーカーを探す" />
                    <div id="manufacture" className="tab-box">
                        <form>
                            <div className="vaner_left">
                                <SerchMaker />
                                <input type="text" className="serch_carName" placeholder="車名を選択又は入力してください" />
                            </div>
                            <div className="serchClear">
                                <button type="reset" className="clear">条件クリア</button>
                                <button type="submit" className="serching">検索する</button>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="type tab_list">
                    <img src={logoSerchType} alt="ボディタイプで探す" />
                    <div id="type" className="tab-box">
                        <form>
                            <div className="vaner_left">
                                <SerchType />
                            </div>
                            <div className="serchClear">
                                <button type="reset" className="clear">条件クリア</button>
                                <button type="submit" className="serching">検索する</button>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="amount tab_list">
                    <img src={logoSerchPrice} alt="金額で探す" />
                    <form id="amount" className="tab-box">
                        <div className="vaner_left">
                            <div className="selectBox">
                                <div className="selectBox_item">
                                    <select name="before">
                                        <option type="hidden">指定なし</option>
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
                                        <option type="hidden">指定なし</option>
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
                        <div className="serchClear">
                            <button type="reset" className="clear">条件クリア</button>
                            <button type="submit" className="serching">検索する</button>
                        </div>
                    </form>
                </li>
                <li className="condition tab_list" onClick={modalOnHandle}>
                    <img src={logoSerchCondition} alt="条件を指定して探す" />
                </li>
            </ul>
            <SerchCondition conditionModal={conditionModal} modalOffHandle={modalOffHandle} />
        </>
    )
}

export default Serch