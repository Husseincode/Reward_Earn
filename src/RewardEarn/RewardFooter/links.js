/* eslint-disable no-fallthrough */
export const openLink = (e) => {
    switch (e) {
        case 'Github':
            window.open('https://github.com/Husseincode', '_blank')
            break;
        case 'Facebook':
            window.open('https://facebook.com', '_blank')
            break;
        case 'Twitter':
            window.open('https://x.com/Abayomi_hussein', '_blank')
            break;
        case 'Email':
            window.location.href = 'mailto:akanjiabayomi2@gmail.com';
        default:
            break;
    }
};