
var fs = require('fs')

firebase.initializeApp({
  apiKey: 'AIzaSyDOpnWwgDajQaMpmncBUL0Rv5CcLMUsVkk',
  authDomain: 'aplus-4ae14.firebaseapp.com',
  projectId: 'aplus-4ae14',
  storageBucket: 'aplus-4ae14.appspot.com',
  messagingSenderId: '1065455070773',
  appId: '1:1065455070773:web:5f16f442e1ed6b28becb7c',
  measurementId: 'G-YZLRQ0WT1X',
})

function myFunction() {
    var data = fs.readFileSync(
      '/Users/enkhba.dendev/Desktop/typingPracticeApp/src/app/components/header/registration/database.txt',
      'utf8'
    )
  
    const listOfwords = data.split('\n').filter((word: string) => word !== '')
  
    for (let i = 0; i < 4; i += 2) {
      console.log(listOfwords[i], listOfwords[i + 1])
      firestore
        .collection('engMonDict')
        .doc(`${listOfwords[i]}`)
        .set({
          mn: `${listOfwords[i + 1]}`,
        })
        .then(() => {
          console.log('haha')
        })
    }
  }

myFunction()