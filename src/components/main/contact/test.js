import React, { useState, useEffect } from "react"

//checkboxのvalueリスト
const checkLists = [
  "パン",
  "おにぎり",
  "焼き肉",
  "ラーメン",
  "たこ焼き",
  "アイスクリーム",
]

//checkboxコンポーネント
const CheckBox = ({id, value, checked, onClick}) => {
  return (
    <>
    <input
      id={id}
      type="checkbox"
      name="inputNames"
      onClick={onClick}
      value={value}
    />
    </>
  )
}

const CheckBoxList = () => {

//checkedItemsは初期値を空のオブジェクトにする
  const [checkedItems, setCheckedItems] = useState({})
//ひとつでもcheckedになっている場合にのみ送信ボタンを表示させたいので、全体のStateを監視する
  const [isBtnHide, setIsBtnHide] = useState(true)

//   useEffect(() => {
// //checkedItemsが空では無い場合、送信ボタンを表示させる
//     Object.keys(checkedItems).length && setIsBtnHide(false)
// //すべてのcheckedItemの値がfalseの場合に送信ボタンを表示させる
//     setTimeout(() => {
//       if (
//         Object.values(checkedItems).every(checkedItem => {
//           return checkedItem === false
//         })
//       ) {
//         setIsBtnHide(true)
//       }
//     },100);
//   }, [checkedItems])

  const handleChange = e => {
//checkedItemsのstateをセット
    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked
    })
    console.log(checkedItems)
  }

  const dataSendBtn = e => {
//既定のイベントをキャンセルさせる
    e.preventDefault()
//送信ボタンを押したタイミングで、checkedItemsオブジェクトのvalueがtrueのkeyのみを配列にしてconsoleに表示させる
    console.log('checedItem: ' + checkedItems);
    const dataPushArray = Object.entries(checkedItems).reduce((pre,[key, value])=>{
    console.log(value);
      value && pre.push(key)
      return pre
    },[])
    console.log("dataPushArray:", dataPushArray)
  }

  return (
    <>
      <h2>好きな食べ物</h2>
      <form>
        {checkLists.map((item, index) => {
          index = index + 1
          return (
            <label htmlFor={`id_${index}`} key={`key_${index}`}>
              <CheckBox
                id={`id_${index}`}
                value={item}
                onClick={handleChange}
                checked={checkedItems[item.id]}
              />
              {item}
            </label>
          )
        })}
        <button onClick={dataSendBtn}>アンケート送信ボタン</button>
      </form>
    </>
  )
}

export default CheckBoxList
