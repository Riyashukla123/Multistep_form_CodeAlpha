const prevBtns = document.querySelectorAll('.btn-prev')
const nextBtns = document.querySelectorAll('.btn-next')
const progress = document.getElementById('progress')
const formSteps = document.querySelectorAll('.form-step')
const progressSteps = document.querySelectorAll('.progress-step')
// let captchaText = document.querySelector('#captcha')
// var ctx = captchaText.getContext('2d')
// ctx.font = '40px Roboto'
// ctx.fillStyle = 'rgb(11, 78, 179)'

// let userText = document.querySelector('#textBox')
// let refreshButton = document.querySelector('#refreshButton')
let alphaNums = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]
let emptyArr = []

// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA
// for (let i = 1; i <= 7; i++) {
//   emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)])
// }
// var c = emptyArr.join('')
// ctx.fillText(emptyArr.join(''), captchaText.width / 4, captchaText.height / 2)

// userText.addEventListener('keyup', function (e) {
//   // Key Code Value of "Enter" Button is 13
//   if (e.keyCode === 13) {
//     if (userText.value === c) {
//       output.classList.add('correctCaptcha')
//       output.innerHTML = 'Correct!'
//     } else {
//       output.classList.add('incorrectCaptcha')
//       output.innerHTML = 'Incorrect, please try again'
//     }
//   }
// })
// function refresh(event) {
//   event.preventDefault()
//   userText.value = ''
//   let refreshArr = []
//   for (let j = 1; j <= 7; j++) {
//     refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)])
//   }
//   ctx.clearRect(0, 0, captchaText.width, captchaText.height)
//   c = refreshArr.join('')
//   ctx.fillText(
//     refreshArr.join(''),
//     captchaText.width / 4,
//     captchaText.height / 2
//   )
//   output.innerHTML = ''
// }
let formStepsNum = 0
let values = {
  username: '',
  position: '',
  phone: '',
  email_id: '',
  dob: '',
  ID: '',
  password: '',
}
nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepsNum++
    updateFormSteps()
    updateProgressbar()
  })
})

prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepsNum--
    updateFormSteps()
    updateProgressbar()
  })
})
const setvalue = (id) => {
  const value = document.getElementById(id).value
  values = { ...values, [id]: value }
  console.log(values)
}
const submitform = (event) => {
  event.preventDefault()
  // if (userText.value === c) {
  emailjs.sendForm('service_otrrz44', 'template_p61tnk4', 'form').then(
    (result) => {
      // show the user a success message
      alert('Your message has been sent to me. Thank You. I will contact you.')
    },
    (error) => {
      // show the user an error
    }
  )
  // } else {
  //   output.classList.add('incorrectCaptcha')
  //   output.innerHTML = 'Incorrect, please try again'
  // }

  const form = document.getElementById('form')
  console.log(form)

  console.log('TT')
}
function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains('form-step-active') &&
      formStep.classList.remove('form-step-active')
  })

  formSteps[formStepsNum].classList.add('form-step-active')
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add('progress-step-active')
    } else {
      progressStep.classList.remove('progress-step-active')
    }
  })

  const progressActive = document.querySelectorAll('.progress-step-active')

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%'
}
