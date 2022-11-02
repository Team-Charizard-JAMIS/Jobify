import { App } from '../Types/applicationTypes';

// export function getApplicants<T>():  {
//     console.log('it fucking ran')
// return fetch('http://localhost:3000/applications')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }
//         return response.json<T>()
//     })
// try {
//     const response = await axios.get('http://localhost:3000/applications');
//     return response.data;
// } catch (error: any) {
//     return error;
// }
// };

export const getApplicants = async () => {
    try {
        console.log('ready for lift off')
        const response = await fetch('http://localhost:3000/applications')
        console.log(response, 'it died')
        // return response.data;
    } catch (error: any) {
        return error;
    }
};