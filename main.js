// 　　機能
// ・１０文字以上の時用のアラートを出す
// ・１０文字以下の時用のアラートを出す
//　・１０文字以下の時は背景赤
// ・１０文字以上の時は背景青


// ・input要素に入力された文字が
//　送信されたとき
//  10文字以上の時はアラートに
// 「オッケー！」と表示する
//  (10文字以下の時はほにゃらら)
const form = document.getElementsByTagName("form")[0]
const textInput = document.getElementById("textInput")
//textInput.value // input要素.value

// textInput.value.length

const showAlert = (e) => {
    e.preventDefault()
    if (textInput.value.length < 10) {
        console.log("10文字以上入力してください")
    } else if (textInput.value.length >= 10) {
        console.log("オッケー!")
    }
}

form.addEventListener("submit", showAlert)


//　背景変える処理

const changeInputBGC = () => {
    if (textInput.value.length < 10) {
        textInput.style.backgroundColor = "#ffa7a3"
    } else if (textInput.value.length >= 10) {
        textInput.style.backgroundColor = "#b5feff"
    }
}

textInput.addEventListener("input", changeInputBGC)



