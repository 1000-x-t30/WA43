import { GirlFriend } from './GirlFriend'

const girlFriends: GirlFriend[] = [
  new GirlFriend("まゆみ", 1998, 1, 5),
  new GirlFriend("さちこ", 2003, 5, 15),
  new GirlFriend("まい", 1996, 5, 25),
  new GirlFriend("なみ", 1999, 8, 3),
  new GirlFriend("えり", 2001, 11, 19),
  new GirlFriend("りえ", 1997, 12, 23)
]

const dateNow: Date = new Date()

for(let i = 1; i <= 12; i++) {
  let flg: boolean = true
  console.log(`■■■■ ${i}月です。`)

  for(const girlFriend of girlFriends) {
    if(girlFriend.isBirthMonth(i)) {
      console.log(`${girlFriend.name}が${girlFriend.birthDay}日に誕生日です。${girlFriend.getAge(dateNow.getFullYear())}歳になります。`)
    }
    flg = false
  }

  if(flg) {
    console.log("誕生日を迎える女性はいません。安心してください")
  }
}