let userWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

const updateWord = (element) => {
    userWord = element.value

    console.log(userWord)
}

const handleSubmit = () => {
    let newListItem = document.createElement('li')
    newListItem.innerText = userWord

    if (userWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
    }
    else {
        oddList.appendChild(newListItem)
    }

    userWord = ""
    document.getElementById("even-odd-form").reset()

}