// mock data
const SHOP_DATA = {
  handmadeart: {
    id: 1,
    title: "Handmade-art",
    routeName: "handmadeart",
    items: [
      {
        id: 1,
        name: "A1tank",
        imageUrl: "https://imgur.com/Ad1Lhor",
        price: 25,
      },
      {
        id: 2,
        name: "A2plane",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2015/523/844/2581448325_2022656010.400x400.jpg",
        price: 15,
      },
      {
        id: 3,
        name: "A3tower",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2017/809/211/4310112908_170595664.400x400.jpg",
        price: 10,
      },
      {
        id: 4,
        name: "A4motorbike",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2014/650/967/1518769056_2022656010.400x400.jpg",
        price: 15,
      },
      {
        id: 5,
        name: "A5tank",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2018/788/037/9490730887_2022656010.400x400.jpg",
        price: 25,
      },
    ],
  },
  keyring: {
    id: 2,
    title: "Keyring",
    routeName: "keyring",
    items: [
      {
        id: 9,
        name: "K1-80 designs ",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2012/778/274/608472877_935227936.400x400.jpg",
        price: 5,
      },
      {
        id: 10,
        name: "K2-10 colours",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2017/862/877/4065778268_43763277.400x400.jpg",
        price: 10,
      },
      {
        id: 11,
        name: "K3-10 colours",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2017/055/605/4048506550_43763277.400x400.jpg",
        price: 6,
      },
      {
        id: 12,
        name: "K4medium-50 design",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2012/647/484/665484746_935227936.400x400.jpg",
        price: 6,
      },
    ],
  },
  childrenpurse: {
    id: 3,
    title: "Children-purse",
    routeName: "childrenpurse",
    items: [
      {
        id: 17,
        name: "C1three cat purse(long&short-blue,navy,black,pink)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2018/459/113/9418311954_301242762.400x400.jpg",
        price: 15,
      },
      {
        id: 18,
        name: "C2cartoon boy purse(40 designs)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2016/667/179/3498971766_1758631755.400x400.jpg",
        price: 10,
      },
      {
        id: 19,
        name: "C3cat&dog coin purse(30 designs)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2018/043/973/8856379340_822287278.400x400.jpg",
        price: 6,
      },
      {
        id: 20,
        name: "C4Unicorn purse(long&short-10 designs:frozen,jack,kitty...)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2019/427/533/10926335724_1872069914.400x400.jpg",
        price: 10,
      },
    ],
  },
  purse: {
    id: 4,
    title: "Purse",
    routeName: "purse",
    items: [
      {
        id: 22,
        name: "L1flower purse(black,blue,khaki,pink)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2018/055/537/9398735550_1424842467.400x400.jpg",
        price: 15,
      },
      {
        id: 23,
        name: "L2Totoro(short-black,purple,orange,green)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2018/240/363/9454363042_301242762.400x400.jpg",
        price: 15,
      },
      {
        id: 24,
        name: "L3cat purse(purple,hotpink,blue,black)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2015/569/025/2639520965_1424842467.400x400.jpg",
        price: 15,
      },
      {
        id: 25,
        name: "L4handmade Thailand purse(40 designs)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2016/240/216/3101612042_645572075.400x400.jpg",
        price: 10,
      },
    ],
  },
  handbag: {
    id: 5,
    title: "Handbag",
    routeName: "handbag",
    items: [
      {
        id: 31,
        name: "B1Lipstick-Logo(blue,black,pink,grey)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2017/703/814/4381418307_27799352.400x400.jpg",
        price: 25,
      },
      {
        id: 32,
        name: "B2Elephant-Logo(black,green,white,pink)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2018/729/319/9005913927_1511143656.400x400.jpg",
        price: 25,
      },
      {
        id: 33,
        name: "B3bettle-logo(black,pink&red)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2019/956/874/11185478659_27799352.400x400.jpg",
        price: 25,
      },
      {
        id: 34,
        name: "B4hello-kitty handbag(white,lightpink,hotpink,gold)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2017/041/247/7771742140_1460651700.400x400.jpg",
        price: 15,
      },
    ],
  },
  jewellery: {
    id: 6,
    title: "Jewellery",
    routeName: "jewellery",
    items: [
      {
        id: 42,
        name: "J1star-light(10 different colour)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2017/484/876/4466678484_1984651542.400x400.jpg",
        price: 15,
      },
      {
        id: 43,
        name: "J2handmade crystal(40 designs&colour)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2017/395/125/4378521593_1844830307.400x400.jpg",
        price: 15,
      },

      {
        id: 44,
        name: "J3fancy sparkling design(pink,blue,multi,purple,gold)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2015/857/327/2479723758_1984651542.400x400.jpg",
        price: 15,
      },
    ],
  },
  sale: {
    id: 7,
    title: "Sale",
    routeName: "sale",
    items: [
      {
        id: 51,
        name: "S1Australian&American-logo purse",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2019/230/274/12692472032_2084417701.400x400.jpg",
        price: 10,
      },
      {
        id: 52,
        name: "S2kitty & Unicorn purse(more designs)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2018/111/657/9565756111_176921582.400x400.jpg",
        price: 7,
      },
      {
        id: 53,
        name: "S3angle handbag(black&pink)",
        imageUrl:
          "https://cbu01.alicdn.com/img/ibank/2018/757/320/9636023757_1511143656.400x400.jpg",
        price: 22,
      },
    ],
  },
};

export default SHOP_DATA;
