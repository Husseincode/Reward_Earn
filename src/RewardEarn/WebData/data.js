import bus from '../Assets/Assets/bus.jpg';
import city from '../Assets/Assets/cityExplorer.jpg';
import travel from '../Assets/Assets/highway.jpg';
import lounge from '../Assets/Assets/track4.png';
import img4 from '../Assets/Assets/Gift-present.jpg';
import img5 from '../Assets/Assets/gifl.webp';

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
        reviews: '3,241',
        img: city,
        text: `Become a city explorer with the rewards you earn from your transactions.
        Redeem your points for exclusive experiences and adventures in vibrant cities around the world`
    },
    {
        id: 5,
        name: 'Double Rewards',
        stars: 5,
        reviews: '2,241',
        img: img4,
        text: `Exciting news! Introducing our Doubling Rewards program. Now, earn double points for every mile traveled. 
        Get closer to perks and upgrades faster. Join now!`
    },
    {
        id: 6,
        name: 'Go Premium',
        stars: 5,
        reviews: '1,341',
        img: img5,
        text: `Experience travel like never before with our Premium 
        Membership. Unlock exclusive perks, priority access, and VIP treatment. Upgrade now and enjoy the journey in style!"`
    }
]

const data2 = {
    name: 'King\'s Rewards'
}

export { data, data2 }