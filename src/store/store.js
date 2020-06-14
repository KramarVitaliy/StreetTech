import streetTech from '../assets/img/preview/Start.jpg'
import streetItPreview from '../assets/img/preview/StreetItPreview.png'


const state = {
    newsData: [
        {
            label: "StreetTech починає свою роботу!",
            preview: streetTech,
            description: "Ми раді вітати всіх охочих до навчання людей на нашій платформі. Всі представлені курси абсолютно безкоштовні. Платформи зараз на стадії розробки, тож буде постійно наповнюватись.\n Успіхів в навчанні!!"
        },
        {}
    ],
    partnerData: [
        {
            label: "StreetIT team",
            preview: streetItPreview,
            description: "Вони команда з програмістів, дизайнерів та викладачів-початківців. \n" +
                "Ця команда допоможе тобі навчатися безкоштовно та дізнаватисяя світ \n" +
                "нових технологій. Ці люди хочуть прагнути до безкоштовной web-освіти \n" +
                "в нашій країні. Переходьте на їхній Youtube канал та дізнайтесь \n" +
                "докладніше про них. Вони чекають на вас.",
            contact: "mailto:streetitteam@gmail.com"
        }
    ]
};

export const coursesData = require('./CoursesData.json');
export const usersData = require('./UsersData.json');




export const usersLogin = (userLogin, userPassword, userData) => {
    let login, password, user;
    login = userLogin.current.value;
    password = userPassword.current.value;
    user = userData.find(element => element.login === login);
    if (user !== undefined){
        if (user.password === password){
            userLogin.current.value = "";
            userPassword.current.value = "";
            return user;
        }else{
            alert("Логін або пароль не вірний");
            return false;
        }
    }else{
        alert("Логін або пароль не вірний");
        return false;
    }
};

export default state;