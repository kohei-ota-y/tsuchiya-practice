import React,{useEffect,useState,useCallback} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { Header, Footer, Nav } from '../../common/index';
import Basic from './Basic';

const Contact = () => {

  const [lastName , setLastName] = useState('');
  const [firstName , setFirstName] = useState('');
  const [lastKana , setLastKana] = useState('');
  const [firstKana , setFirstKana] = useState('');
  const [mail , setMail] = useState('');
  const [telNum , setTellNum] = useState('');
  const [store , setStore] = useState('');
  const [year , setYear] = useState('');
  const [month , setMonth] = useState('');
  const [date , setDate] = useState('');
  const [time , setTime] = useState('');
  const [reason , setReason] = useState({});
  const [NofT , setNofT] = useState('');
  const [history , setHistory] = useState('');
  const [staff , setStaff] = useState('');
  const [discription, setDiscription] = useState('');
  const [sex , setSex] = useState('');
  const [postal , setPostal] = useState('');
  const [address , setAddress] = useState('');
  const [occupation , setOccupation] = useState('');
  const [spouse , setSpouse] = useState('');
  const [experience , setExperience] = useState('');

  useEffect(()=> {
    window.scrollTo(0,0);
  },[])

  const validateString = (...arg) => {
    let isWrongString = false;
    for(let i =0; i < arg.length; i++){
      if(arg[i] === ""){
        isWrongString =true;
      }
    }
    return isWrongString;
  }
  const validateBoolean = (...arg) => {
    let isWrongBoolean = true;
    for(let i =0; i < arg.length; i++){
      if(arg[i] === false){
        isWrongBoolean = false;
      }
    }
    return isWrongBoolean;
  }
  const submit = (e) => {
    //既定のイベントをキャンセルさせる
    e.preventDefault()
    //送信ボタンを押したタイミングで、checkedItemsオブジェクトのvalueがtrueのkeyのみを配列にしてconsoleに表示させる
    const dataPushArray = Object.entries(reason).reduce((pre,[key, value])=>{
      value && pre.push(key)
      return pre
    },[])
    const reasonJudge = (dataPushArray == "");
    const isWrongString = validateString(lastName, firstName, lastKana, firstKana, mail, telNum, store, year, month, date, time);
    const isWrongBoolean = validateBoolean(reasonJudge);
    // console.log('＝＝＝＝＝＝＝＝＝＝＝＝＝＝');
    // console.log("String：　　　   "+isWrongString);
    // console.log("Boolean：　　  　"+isWrongBoolean);
    console.log("dataPushArray： "+dataPushArray);
    // console.log("reason：         "+reason);
    if((isWrongString === false) && (isWrongBoolean === false)){
      console.log('OK');
    }else{
      document.getElementsByClassName('errorText')[0].classList.add('active');
      window.scrollTo(0,0);
      console.log('NO');
    }
  }

  const validateKana = (e) => {
    const regex = /^([ァ-ン]|ー)+$/;
    const result = regex.test(e.target.value);
    if(result){
      e.target.classList.add('val-ok');
    }else{
      e.target.classList.remove('val-ok');
    }
  }

  const onChangeLastName = useCallback((e) => {
    setLastName(e.target.value);
  },[setLastName])
  const onChangeFirstName = useCallback((e) => {
    setFirstName(e.target.value);
  })
  const onChangeLastKana = useCallback((e) => {
    validateKana(e);
    setLastKana(e.target.value);
  })
  const onChangeFirstKana = useCallback((e) => {
    validateKana(e);
    setFirstKana(e.target.value);
  })
  const onChangeMail = useCallback((e) => {
    const regex = /^\S+@\S+\.\S+$/;
    const result = regex.test(e.target.value);
    if(result){
      e.target.classList.add('val-ok');
    }else{
      e.target.classList.remove('val-ok');
    }
    setMail(e.target.value);
  })
  const onChangeTell = useCallback((e) => {
    const regex = /^\d{10}$|^\d{11}$/;
    const result = regex.test(e.target.value);
    if(result){
      e.target.classList.add('val-ok');
    }else{
      e.target.classList.remove('val-ok');
    }
    setTellNum(e.target.value);
  })

  const select = (e) => {
    e.target.classList.add('selected');
  }

  const reasonCheckedState= (e) => {
    setReason({
      ...reason,
      [e.target.id]:e.target.checked
    })

    // const reasonSome = Object.values(reason).some((reason) => {
    //   return reason === true;
    // })
    // console.log('＝＝＝＝＝＝＝＝＝＝＝＝＝＝');
    // console.log(reason);
    // console.log("reasonJudge："+reasonJudge);
    // console.log("reasonSome："+reasonSome);
    // console.log('＝＝＝＝＝＝＝＝＝＝＝＝＝＝');
    // setReasonJudge(reasonSome);
  }

  const reasonValidated = (e) => {
    const obj = document.getElementsByClassName('checkBox_off');
    const inputObj = document.getElementsByClassName('reason_check');
    const reasonTextarea = document.getElementById('reason06');
    if(e.target.checked){
      if(!(e.target.classList.contains('checked'))){
        for(let i = 0; i < obj.length; i++){
          obj[i].classList.add('checked');
        }
      }
    }else{
      let referee = [];
      for(let i = 0; i < inputObj.length; i++){
        referee.push(inputObj[i].checked);
      }
      if(!(referee.some(value => value == true))){
        for(let i = 0; i < obj.length; i++){
          obj[i].classList.remove('checked');
        }
      }
    }
    if(document.getElementById('reason05').checked){
      reasonTextarea.classList.add('active');
      if(reasonTextarea.value == ""){
        reasonTextarea.classList.add('no-Value');
      }
    }else{
      reasonTextarea.classList.remove('active');
      reasonTextarea.classList.remove('no-Value');
    }
    reasonCheckedState(e);
  }
  const textareaChange = (e) => {
    const reasonTextarea = document.getElementById('reason06');
    if(e.target.value == ''){
      reasonTextarea.classList.add('no-Value');
    }else{
      reasonTextarea.classList.remove('no-Value');
    }
  }
  const sexChange = (e) => {
    const obj = document.getElementsByClassName('radio-required');
    for(let i = 0; i < obj.length; i++){
      obj[i].classList.add('radio-checked');
    }
  }
  const onChangePost = (e) => {
    const regex = /^\d{3}[-]\d{4}$/;
    const result = regex.test(e.target.value);
    if(result){
      e.target.classList.add('val-ok');
    }else{
      e.target.classList.remove('val-ok');
    }
  }
  return(
    <>
    <Header />
    <Nav/>
    <div className="pagebody contact">
		<div className="main">
			<p className="pagetitle"></p>
      <Tabs>
			<div className="container">
				<TabList id="tab">
					<Tab><div className="#reservation">来店予約</div></Tab>
          <Tab><div className="#recruiting">採用について</div></Tab>
          <Tab><div className="#site">サイトについて</div></Tab>
          <Tab><div className="#other">その他</div></Tab>
				</TabList>

				<div className="formBox">
					<div id="reservation" className="tab-box">
					<p className="errorText">※赤枠の入力が正しくありません。</p>
						<form action="#" name="formBox">
              <TabPanel>
               <Basic
                 onChangeLastName={onChangeLastName}
                 onChangeFirstName={onChangeFirstName}
                 onChangeLastKana={onChangeLastKana}
                 onChangeFirstKana={onChangeFirstKana}
                 onChangeMail={onChangeMail}
                 onChangeTell={onChangeTell}
                />
							 <p className="contact_midbar">来店予約</p>
							  <ul className="reservaion_about">
								<li className="store">
									<p>ご来店予約店舗<span>(必須)</span></p>
									<select
                    name="booking-store"
                    className="store_selecter"
                    onChange={(e) => {
                      select(e);
                      setStore(e.target.value);
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
                          select(e);
                          setYear(e.target.value)
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
                          (e)=>{
                            select(e);
                            setMonth(e.target.value);
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
                          select(e);
                          setDate(e.target.value)
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
                          select(e);
                          setTime(e.target.value);
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
											<input type="checkbox" id="reason01" className="reason_check" onClick={reasonValidated} />
											<label htmlFor="reason01" className="checkBox_off">お車購入</label>
										</li>
										<li>
											<input type="checkbox" id="reason02" className="reason_check" onClick={reasonValidated} />
											<label htmlFor="reason02" className="checkBox_off">メンテナンス</label>
										</li>
										<li>
											<input type="checkbox" id="reason03" className="reason_check" onClick={reasonValidated} />
											<label htmlFor="reason03" className="checkBox_off">車検</label>
										</li>
										<li>
											<input type="checkbox" id="reason04" className="reason_check" onClick={reasonValidated} />
											<label htmlFor="reason04" className="checkBox_off">お車査定</label>
										</li>
										<li>
											<input type="checkbox" id="reason05" className="reason_check" onClick={reasonValidated} />
											<label htmlFor="reason05" className="checkBox_off">その他</label>
										</li>
										<li>
											<textarea name="reason" cols="30" rows="10" id="reason06" placeholder="(最大200文字まで)"/>
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
									<p>お問い合わせ内容</p>
									<textarea name="infodetail" cols="30" rows="10" placeholder="(最大500字まで)" className="content-inquiry"></textarea>
								</li>
							</ul>
              </TabPanel>
              <TabPanel>
                <Basic
                  onChangeLastName={onChangeLastName}
                  onChangeFirstName={onChangeFirstName}
                  onChangeLastKana={onChangeLastKana}
                  onChangeFirstKana={onChangeFirstKana}
                  onChangeMail={onChangeMail}
                  onChangeTell={onChangeTell}
                />
				        <p className="contact_midbar">採用について</p>
				        <ul className="recruit_about">
								<li className="birthday">
									<p>ご来店予定日時<span>(必須)</span></p>
									<ul className="data_selecterBox">
										<li>
											<div className="data_selecter">
												<select name="year" onChange={select}>
													<option value="" hidden>ーー</option>
													<option value="">2017</option>
													<option value="">2018</option>
													<option value="">2019</option>
													<option value="">2020</option>
												</select>
  											<div className="arrow-bg"></div>
											</div>
											<p>年</p>
										</li>
										<li>
											<div className="data_selecter">
												<select name="month" onChange={select}>
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
												<select name="day" onChange={select}>
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
										<input type="radio" id="male" name="sex" onChange={sexChange} />
										<label htmlFor="male" className="radio-required">男</label>
										<input type="radio" id="woman" name="sex" onChange={sexChange} />
										<label htmlFor="woman" className="radio-required">女</label>
									</div>
								</li>
								<li className="post">
								<p>現住所郵便番号<span>(必須)</span></p>
									<input type="text" className="recruit_about_textinput" placeholder="例) 272-0811" onChange={onChangePost} />
								</li>
								<li className="adress">
								<p>現住所<span>(必須)</span></p>
									<input type="text" className="recruit_about_textinput val-ok" placeholder="例) 千葉県市川市北方町4-1441-8" />
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
              </TabPanel>
              <TabPanel>
                <Basic
                  onChangeLastName={onChangeLastName}
                  onChangeFirstName={onChangeFirstName}
                  onChangeLastKana={onChangeLastKana}
                  onChangeFirstKana={onChangeFirstKana}
                  onChangeMail={onChangeMail}
                  onChangeTell={onChangeTell}
                />
					      <p className="contact_midbar">サイトについて</p>
					      <div className="inquiry site_about">
				  		    <p>お問い合わせ内容</p>
						      <textarea name="infodetilesite" cols="30" rows="10" placeholder="(最大500字まで)" className="content-inquiry"></textarea>
					      </div>
              </TabPanel>
              <TabPanel>
                <Basic
                  onChangeLastName={onChangeLastName}
                  onChangeFirstName={onChangeFirstName}
                  onChangeLastKana={onChangeLastKana}
                  onChangeFirstKana={onChangeFirstKana}
                  onChangeMail={onChangeMail}
                  onChangeTell={onChangeTell}
                />
					      <p className="contact_midbar">その他</p>
					      <div className="inquiry site_about">
					  	    <p>お問い合わせ内容</p>
						      <textarea cols="30" rows="10" placeholder="(最大500字まで)" className="content-inquiry"></textarea>
					      </div>
              </TabPanel>
              <div className="go-next" onClick={submit}>
                <p>確認画面へ</p>
                <input type="submit"/>
              </div>
            </form>
          </div>
				</div>
			</div>
    </Tabs>
		</div>
	</div>
  <Footer/>
  </>
  )
}


export default Contact
