import React, { useEffect, useState, useCallback } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Header, Footer, Nav } from '../../common/index';
import { Basic, Recruit, Book, Inquiry } from './index'

const Contact = () => {

	const [lastName, setLastName] = useState(false),
		[firstName, setFirstName] = useState(false),
		[lastKana, setLastKana] = useState(false),
		[firstKana, setFirstKana] = useState(false),
		[mail, setMail] = useState(false),
		[telNum, setTellNum] = useState(false),
		[store, setStore] = useState(false),
		[year, setYear] = useState(false),
		[month, setMonth] = useState(false),
		[date, setDate] = useState(false),
		[time, setTime] = useState(false),
		[reason, setReason] = useState({}),
		[sex, setSex] = useState(false),
		[postal, setPostal] = useState(false),
		[address, setAddress] = useState(false),
		[otherReason, setOtherReason] = useState(false),
		[tabs, setTabs] = useState('reservation');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	// 引数のtfを全て検査し、全てtrueならtrueを返すÏ
	const validateSubmit = (...arg) => {
		let isWrongSubmit = true;
		for (let i = 0; i < arg.length; i++) {
			if (arg[i] === false) {
				isWrongSubmit = false;
			}
		} return isWrongSubmit;
	}

	const reasonJudgeFunc = () => {
		//checkedItemsオブジェクトのvalueを配列にpush
		const dataPushArray = Object.entries(reason).reduce((pre, [key, value]) => {
			value && pre.push(key)
			return pre
		}, [])
		let reasonJudge = false
		if (dataPushArray.length) {
			if (dataPushArray.includes("reason05")) {
				if (otherReason) {
					reasonJudge = true
				} else {
					reasonJudge = false
				}
			} else {
				reasonJudge = true
			}
		} else {
			reasonJudge = false
		}
		return reasonJudge
	}

	const submit = (e) => {
		//既定のイベントをキャンセルさせる
		e.preventDefault();
		//tabsのstateによって処理の変更
		if (tabs === 'reservation') {
			//理由のバリデーション結果を代入(t or f)
			const reasonJudge = reasonJudgeFunc();
			//対象のバリデーションを検査し代入（t or f）
			const isWrongSubmit = validateSubmit(lastName, firstName, lastKana, firstKana, mail, telNum, store, year, month, date, time, reasonJudge);
			//バリデーション結果がtrueの時エラーテキストを非表示、コンソール出力（ページ遷移予定）
			if (isWrongSubmit === true) {
				document.getElementsByClassName('errorText')[0].classList.remove('active');
				console.log('book OK');
			} else {
				//バリデーション結果がfalseの時エラーテキストを表示、一番上にスクロール
				document.getElementsByClassName('errorText')[0].classList.add('active');
				window.scrollTo(0, 0);
			}
		} else if (tabs === 'recruit') {
			const isWrongSubmit = validateSubmit(lastName, firstName, lastKana, firstKana, mail, telNum, year, month, date, sex, postal, address);
			if (isWrongSubmit === true) {
				document.getElementsByClassName('errorText')[0].classList.remove('active');
				console.log('recruit OK');
			} else {
				document.getElementsByClassName('errorText')[0].classList.add('active');
				window.scrollTo(0, 0);
			}
		} else {
			const isWrongSubmit = validateSubmit(lastName, firstName, lastKana, firstKana, mail, telNum);
			if (isWrongSubmit === true) {
				document.getElementsByClassName('errorText')[0].classList.remove('active');
				console.log('other OK');
			} else {
				document.getElementsByClassName('errorText')[0].classList.add('active');
				window.scrollTo(0, 0);
			}
		}
	}

	//カタカナの文字検査関数
	const validateKana = (e) => {
		const regex = /^([ァ-ン]|ー)+$/;
		const result = regex.test(e.target.value);
		if (result) {
			e.target.classList.add('val-ok');
		} else {
			e.target.classList.remove('val-ok');
		}
		return result;
	}

	//姓(漢字)の中身によってstate変更
	const onChangeLastName = useCallback((e) => {
		if (e.target.value === "") {
			setLastName(false);
		} else {
			setLastName(true);
		}
	}, [setLastName])
	//名(漢字)の中身によってstate変更
	const onChangeFirstName = useCallback((e) => {
		if (e.target.value === "") {
			setFirstName(false);
		} else {
			setFirstName(true);
		}
	}, [setFirstName])
	//姓(カタカナ)の中身によってstate変更
	const onChangeLastKana = useCallback((e) => {
		validateKana(e);
		const result = validateKana(e);
		if (result) {
			setLastKana(true);
		} else {
			setLastKana(false);
		}
	}, [setLastKana])
	//名(カナ)の中身によってstate変更
	const onChangeFirstKana = useCallback((e) => {
		validateKana(e);
		const result = validateKana(e);
		if (result) {
			setFirstKana(true);
		} else {
			setFirstKana(false);
		}
	}, [setFirstKana])
	//mailの中身によってstate変更、クラス変更
	const onChangeMail = useCallback((e) => {
		const regex = /^\S+@\S+\.\S+$/;
		const result = regex.test(e.target.value);
		if (result) {
			e.target.classList.add('val-ok');
			setMail(true);
		} else {
			e.target.classList.remove('val-ok');
			setMail(false);
		}
	}, [setMail])
	//tellの中身によってstate変更、クラス変更
	const onChangeTell = useCallback((e) => {
		const regex = /^\d{10}$|^\d{11}$/;
		const result = regex.test(e.target.value);
		if (result) {
			e.target.classList.add('val-ok');
			setTellNum(true);
		} else {
			e.target.classList.remove('val-ok');
			setTellNum(false);
		}
	}, [setTellNum])

	//selectBoxの選択時のスタイル変更
	const select = useCallback((e) => {
		e.target.classList.add('selected');
	})
	// reasonStateに選択された理由を追加
	const reasonCheckedState = (e) => {
		setReason({
			...reason,
			[e.target.id]: e.target.checked
		})
	}

	// 理由のスタイル変更、その他選択時の動作
	const reasonValidated = (e) => {
		const obj = document.getElementsByClassName('checkBox_off');
		const inputObj = document.getElementsByClassName('reason_check');
		const reasonTextarea = document.getElementById('reason06');
		if (e.target.checked) {
			if (!(e.target.classList.contains('checked'))) {
				for (let i = 0; i < obj.length; i++) {
					obj[i].classList.add('checked');
				}
			}
		} else {
			let referee = [];
			for (let i = 0; i < inputObj.length; i++) {
				referee.push(inputObj[i].checked);
			}
			if (!(referee.some(value => value === true))) {
				for (let i = 0; i < obj.length; i++) {
					obj[i].classList.remove('checked');
				}
			}
		}
		if (document.getElementById('reason05').checked) {
			reasonTextarea.classList.add('active');
			if (reasonTextarea.value === "") {
				reasonTextarea.classList.add('no-Value');
				setOtherReason(false)
			} else {
				setOtherReason(true)
			}
		} else {
			reasonTextarea.classList.remove('active');
			reasonTextarea.classList.remove('no-Value');
			setOtherReason(false)
		}
		reasonCheckedState(e);
	}

	// その他選択時のtextareaの中身によるスタイル、state変更
	const textareaChange = useCallback((e) => {
		const reasonTextarea = document.getElementById('reason06');
		if (e.target.value === '') {
			reasonTextarea.classList.add('no-Value');
			setOtherReason(false)
		} else {
			reasonTextarea.classList.remove('no-Value');
			setOtherReason(true)
		}
	})

	//性別選択時のスタイル、state変更
	const sexChange = useCallback((e) => {
		const obj = document.getElementsByClassName('radio-required');
		setSex(true);
		for (let i = 0; i < obj.length; i++) {
			obj[i].classList.add('radio-checked');
		}
	}, [setSex])

	// 郵便番号のバリデーション
	const onChangePost = useCallback((e) => {
		const regex = /^\d{3}[-]\d{4}$/;
		const result = regex.test(e.target.value);
		setPostal(e.target.value);
		if (result) {
			e.target.classList.add('val-ok');
		} else {
			e.target.classList.remove('val-ok');
		}
	})
	// tab切り替え時のreset関数ïï
	const tabChange = (e) => {
		setLastName(false);
		setFirstName(false);
		setLastKana(false);
		setFirstKana(false);
		setTellNum(false);
		setMail(false);
		setStore(false);
		setYear(false);
		setDate(false);
		setMonth(false);
		setTime(false);
		setReason(false);
	}

	return (
		<>
			<Header />
			<Nav />
			<div className="pagebody contact">
				<div className="main">
					<p className="pagetitle"></p>
					<Tabs>
						<div className="container">
							<TabList id="tab">
								<Tab><div className="#reservation" onClick={() => { setTabs('reservation'); tabChange() }} >来店予約</div></Tab>
								<Tab><div className="#recruiting" onClick={() => { setTabs('recruit'); tabChange() }}>採用について</div></Tab>
								<Tab><div className="#site" onClick={() => { setTabs('site'); tabChange() }}>サイトについて</div></Tab>
								<Tab><div className="#other" onClick={() => { setTabs('other'); tabChange() }}>その他</div></Tab>
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
											<Book
												select={select}
												setStore={setStore}
												setYear={setYear}
												setMonth={setMonth}
												setDate={setDate}
												setTime={setTime}
												sexChange={sexChange}
												onChangePost={onChangePost}
												textareaChange={textareaChange}
												reasonValidated={reasonValidated}
											/>
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
											<Recruit
												select={select}
												setYear={setYear}
												setMonth={setMonth}
												setDate={setDate}
												setTime={setTime}
												sexChange={sexChange}
												setSex={setSex}
												onChangePost={onChangePost}
												setPostal={setPostal}
												setAddress={setAddress}
											/>
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
												<Inquiry />
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
												<Inquiry />
											</div>
										</TabPanel>
										<div className="go-next" onClick={submit}>
											<p>確認画面へ</p>
											<input type="submit" />
										</div>
									</form>
								</div>
							</div>
						</div>
					</Tabs>
				</div>
			</div>
			<Footer />
		</>
	)
}


export default Contact
