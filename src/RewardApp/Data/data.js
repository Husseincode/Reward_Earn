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
        img: travel
    },
    {
        id: 2,
        name: 'Track your activities',
        stars: 5,
        reviews: '5,621',
        img: lounge,
    },
    {
        id: 3,
        name: 'Vacation Perks',
        stars: 5,
        reviews: '3,784',
        img: bus,
    },
    {
        id: 4,
        name: 'City Explorer',
        stars: 5,
        reviews: '3241',
        img: city
    }
]
const details = {
    appName: 'Earn Reward',
}

export { data, details }