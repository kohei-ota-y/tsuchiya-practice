import React from 'react'

const ContactRecruit = (props) => {
    return (
        <ul className="recruit_about">
            <li className="birthday">
                <p>ご来店予定日時<span>(必須)</span></p>
                <ul className="data_selecterBox">
                    <li>
                        <div className="data_selecter">
                            <select name="year"
                                onChange={(e) => {
                                    props.select(e);
                                    props.setYear(e.target.value);
                                }}
                            >
                                <option value="" hidden>ーー</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                            </select>
                            <div className="arrow-bg"></div>
                        </div>
                        <p>年</p>
                    </li>
                    <li>
                        <div className="data_selecter">
                            <select name="month" onChange={(e) => {
                                props.select(e);
                                props.setMonth(e.target.value);
                            }}>
                                <option value="" hidden>ーー</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <div className="arrow-bg"></div>
                        </div>
                        <p>月</p>
                    </li>
                    <li>
                        <div className="data_selecter">
                            <select name="day" onChange={(e) => {
                                props.select(e);
                                props.setDate(e.target.value);
                            }}>
                                <option value="" hidden>ーー</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <div className="arrow-bg"></div>
                        </div>
                        <p>日</p>
                    </li>
                </ul>
            </li>
            <li className="sex">
                <p>性別<span>(必須)</span></p>
                <div>
                    <input type="radio" id="male" name="sex" onChange={(e) => {
                        props.sexChange(e);
                        props.setSex(e.target.value)
                    }} />
                    <label htmlFor="male" className="radio-required">男</label>
                    <input type="radio" id="woman" name="sex" onChange={(e) => {
                        props.sexChange(e);
                        props.setSex(e.target.value)
                    }} />
                    <label htmlFor="woman" className="radio-required">女</label>
                </div>
            </li>
            <li className="post">
                <p>現住所郵便番号<span>(必須)</span></p>
                <input
                    type="text"
                    className="recruit_about_textinput"
                    placeholder="例) 272-0811"
                    onChange={props.onChangePost} />
            </li>
            <li className="adress">
                <p>現住所<span>(必須)</span></p>
                <input type="text" className="recruit_about_textinput val-ok" placeholder="例) 千葉県市川市北方町4-1441-8" onChange={(e) => { props.setAddress(e.target.value) }} />
            </li>
            <li className="occupation">
                <p>希望職種</p>
                <div className="occupation_selecter">
                    <select>
                        <option value="" hidden>ーー</option>
                        <option value="sales">カーライフアドバイザー(営業)</option>
                        <option value="mechanic">メカニック</option>
                        <option value="sales-support">営業アシスタント</option>
                        <option value="accounting">経理</option>
                    </select>
                    <div className="arrow-bg-green"></div>
                </div>
            </li>
            <li className="spouse">
                <p>配偶者</p>
                <div>
                    <input type="radio" id="spouse_yes" name="spouse" />
                    <label htmlFor="spouse_yes" className="radio">あり</label>
                    <input type="radio" id="spouse_no" name="spouse" />
                    <label htmlFor="spouse_no" className="radio">なし</label>
                </div>
            </li>
            <li className="experience">
                <p>職務経験</p>
                <div>
                    <input type="radio" id="experience_yes" name="experience" />
                    <label htmlFor="experience_yes" className="radio">あり</label>
                    <input type="radio" id="experience_no" name="experience" />
                    <label htmlFor="experience_no" className="radio">なし</label>
                </div>
            </li>
        </ul>
    )
}

export default ContactRecruit