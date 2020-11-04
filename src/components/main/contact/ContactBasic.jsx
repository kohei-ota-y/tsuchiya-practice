import React from 'react';
const Basic = (props) => {
  return(
      <ul className="basicInfo">
        <li className="name">
          <p>お名前<span>(必須)</span></p>
          <div className="basic_inputBox defaultInput">
            <input type="text" placeholder="姓" onChange={props.onChangeLastName} />
            <input type="text" placeholder="名" onChange={props.onChangeFirstName} />
          </div>
        </li>
        <li className="name">
          <p>お名前フリガナ<span>(必須)</span></p>
          <div className="basic_inputBox">
            <input type="text" placeholder="セイ" onChange={props.onChangeLastKana} />
            <input type="text" placeholder="メイ" onChange={props.onChangeFirstKana} />
          </div>
        </li>
        <li className="adress">
          <p>メールアドレス<span>(必須)</span></p>
          <div className="basic_inputBox">
            <input type="text" placeholder="tsuchiya-cars@xx.xx.jp" onChange={props.onChangeMail} />
          </div>
        </li>
        <li className="adress">
          <p>電話番号<span>(必須)</span></p>
          <div className="basic_inputBox">
            <input type="text" placeholder="043xxxxxxxx" onChange={props.onChangeTell} />
          </div>
        </li>
      </ul>
  )
}

export default Basic;
