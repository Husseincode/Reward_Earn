import bus from '../Assets/bus.jpg'
import city from '../Assets/cityExplorer.jpg'
import travel from '../Assets/highway.jpg'
import lounge from '../Assets/track4.png'

const data = [
    {
        id: 1,
        name: 'Per mile reward',
        stars: 5,
        reviews: '1,234',
        img: travel,
        text: `Earn points with every purchase and redeem and redeem them for exciting rewards.
         With 0.15% of your spending converted into miles, you're opening up a realm of opportunities
         of free travel.`
    },
    {
        id: 2,
        name: 'Track your activities',
        stars: 5,
        reviews: '5,621',
        img: lounge,
        text: `Effortlessly access your transaction history and cashback rewards, 
        gaining complete visibility into your spending patterns and potential earnings`
    },
    {
        id: 3,
        name: 'Vacation Perks',
        stars: 5,
        reviews: '3,784',
        img: bus,
        text: `Unlock vacation perks as you accumulate poins with every transaction
        , allowing you to redeem them for exciting travel rewards`
    },
    {
        id: 4,
        name: 'City Explorer',
        stars: 5,
        reviews: '3241',
        img: city,
        text: `Become a city explorer with the rewards you earn from your transactions.
        Redeem your points for exclusive experiences and adventures in vibrant cities around the world`
    }
]
const details = {
    appName: 'Earn Reward',
}

export { data, details }