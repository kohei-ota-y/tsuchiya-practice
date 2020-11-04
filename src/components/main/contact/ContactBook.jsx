import React from 'react'
import { Inquiry } from './index';

const ContactBook = (props) => {
    return (
        <ul className="reservaion_about">
            <li className="store">
                <p>ご来店予約店舗<span>(必須)</span></p>
                <select
                    name="booking-store"
                    className="store_selecter"
                    onChange={(e) => {
                        props.select(e);
                        props.setStore(true);
                    }}
                >
                    <option value="" hidden>ーーー</option>
                    <option value="新小岩">新小岩</option>
                    <option value="市川">市川/市川2号</option>
                    <option value="千葉北">千葉北</option>
                    <option value="成田">成田</option>
                    <option value="東金">東金</option>
                    <option value="茂原">茂原</option>
                </select>
                <div className="arrow-bg"></div>
                <p className="store_text">店</p>
            </li>
            <li className="date">
                <p>ご来店予定日時<span>(必須)</span></p>
                <ul className="data_selecterBox">
                    <li>
                        <select
                            name="year"
                            className="data_selecter"
                            onChange={(e) => {
                                props.select(e);
                                props.setYear(true)
                            }}>
                            <option value="" hidden>ーー</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                        </select>
                        <div className="arrow-bg"></div>
                        <p>年</p>
                    </li>
                    <li>
                        <select
                            name="month"
                            className="data_selecter"
                            onChange={
                                (e) => {
                                    props.select(e);
                                    props.setMonth(true);
                                }}
                        >
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
                        <p>月</p>
                    </li>
                    <li>
                        <select
                            name="day"
                            className="data_selecter"
                            onChange={(e) => {
                                props.select(e);
                                props.setDate(true)
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
                        <p>日</p>
                    </li>
                    <li>
                        <select
                            name="time"
                            className="data_selecter"
                            onChange={(e) => {
                                props.select(e);
                                props.setTime(true);
                            }}>
                            <option value="" hidden>ーー</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                        </select>
                        <div className="arrow-bg"></div>
                    </li>
                </ul>
            </li>
            <li className="reason">
                <p>ご来店理由<span>(必須)</span></p>
                <ul className="reason_input active_check">
                    <li>
                        <input type="checkbox" id="reason01" className="reason_check" onClick={props.reasonValidated} />
                        <label htmlFor="reason01" className="checkBox_off">お車購入</label>
                    </li>
                    <li>
                        <input type="checkbox" id="reason02" className="reason_check" onClick={props.reasonValidated} />
                        <label htmlFor="reason02" className="checkBox_off">メンテナンス</label>
                    </li>
                    <li>
                        <input type="checkbox" id="reason03" className="reason_check" onClick={props.reasonValidated} />
                        <label htmlFor="reason03" className="checkBox_off">車検</label>
                    </li>
                    <li>
                        <input type="checkbox" id="reason04" className="reason_check" onClick={props.reasonValidated} />
                        <label htmlFor="reason04" className="checkBox_off">お車査定</label>
                    </li>
                    <li>
                        <input type="checkbox" id="reason05" className="reason_check" onClick={props.reasonValidated} />
                        <label htmlFor="reason05" className="checkBox_off">その他</label>
                    </li>
                    <li>
                        <textarea name="reason" cols="30" rows="10" id="reason06" placeholder="(最大200文字まで)" onChange={props.textareaChange} />
                    </li>
                </ul>
            </li>
            <li className="times">
                <p>ご来店回数</p>
                <div className="times_selecter">
                    <select name="cometimes">
                        <option value="" hidden>ーー</option>
                        <option value="">はじめて</option>
                        <option value="">2~5回</option>
                        <option value="">6~9回</option>
                        <option value="">10回以上</option>
                    </select>
                    <div className="arrow-bg-green"></div>
                </div>
            </li>
            <li className="buy">
                <p>当店での購入の有無</p>
                <div>
                    <input type="radio" id="buy_yes" name="buy" />
                    <label htmlFor="buy_yes" className="radio">あり</label>
                    <input type="radio" id="buy_no" name="buy" />
                    <label htmlFor="buy_no" className="radio">なし</label>
                </div>
            </li>
            <li className="charge">
                <p>当店での担当者</p>
                <div className="charge_input">
                    <input type="radio" id="charge_yes" name="charge" />
                    <label htmlFor="charge_yes" className="radio">あり</label>
                    <input type="text" placeholder="担当者名" className="chargerName" />
                    <input type="radio" id="charge_no" name="charge" />
                    <label htmlFor="charge_no" className="radio">なし</label>
                </div>
            </li>
            <li className="inquiry">
                <Inquiry />
            </li>
        </ul>

    )
}


export default ContactBook