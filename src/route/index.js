// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '­600$ в місяць',
  address: 'Ukraine, Kyiv',
}
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
var education = [
  {
    name: 'NTUU KPI, programming and math',
    isEnd: true,
  },
  {
    name: 'MAUP, phsyhologyst',
    isEnd: true,
  },
  {
    name: 'It-Brains, Fullstack JS developer',
    isEnd: false,
  },
]
var certificates = [
  { name: 'Сертифікат1', id: 789 },
  { name: 'Сертифікат2', id: 254 },
  { name: 'Сертифікат3', id: 125 },
]
var hobbies = [
  { name: 'Math', isMain: true },
  { name: 'Painting', isMain: true },
  { name: 'Travelling', isMain: false },
]

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development.
       Whenever I start to work on a new project I learn the domain and try to understand the
       idea of the project. Good team player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport 
      statistics (tournament position, goals etc), analyzing by simple mathematics models
      and preparing probability for such events like: money line - first win / draw / second
      win, totals etc.`,
      },
    },
    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: '10',
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: '9',
          isTop: true,
        },
        {
          name: 'VS code & NPM',
          point: '10',
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: '8',
          isTop: true,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: false,
        },
        {
          name: 'PHP',
          point: null,
          isTop: false,
        },
      ],
      hobbies,
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      education,
      certificates,
    },
    footer,
  })
})
// ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT-Brains',
            url: null,
            // url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.12.2020',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'About me & my experience',
              stackAmoGnt: 4,
              awardAmoGnt: 7,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Increases sales',
                },
                {
                  name: 'Optimization processes',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
