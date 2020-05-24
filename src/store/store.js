import htmlCssCoder from '../assets/img/preview/HTML_CSS_coder.jpg'
import figmaEssential from '../assets/img/preview/Figma_Essential.jpg'
import pythonPreview from '../assets/img/preview/python.jpg'
import javaPreview  from '../assets/img/preview/Java.jpg'
import javaScriptPreview from '../assets/img/preview/javascript.jpg'
import streetTech from '../assets/img/preview/Start.jpg'
import streetItPreview from '../assets/img/preview/StreetItPreview.png'
import React from "react";
import {CoursesItem} from "../components/SectionTop/Courses/CoursesItem/CoursesItem";

const state = {
    coursesList : [
        [
            {
                path: "/courses/front_end/html_css_coder",
                label: "HTML/CSS coder",
                preview: htmlCssCoder,
                description: "Курс для тих хто розпочинає свій шлях в напрямі FrontEnd"
            },
            {
                path: "/courses/front_end/html_css_coder",
                label: "JavaScript",
                preview: javaScriptPreview,
                description: "For litle programer"
            }
        ],
        [
            {
                path: "#",
                label: "Python",
                preview: pythonPreview,
                description: "Python/BackEnd"},
        ],
        [
            {
                path: "#",
                label: "Java OOP",
                preview: javaPreview,
                description: "Java OOP course"},
        ],
        [
            {
                path: "/courses/web_design/figma_essential",
                label: "Figma Essential",
                preview: figmaEssential,
                description: "Короткий курс по створенню макетів в безкоштовному редакторі Figma"},
        ]
    ],
    concatArray : function () {
        return (this.coursesList[0].concat(this.coursesList[1],this.coursesList[2],this.coursesList[3]));
    },
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
                "Ця команда допоможе тобі навчатися безкоштовно та дізнавитя світ \n" +
                "нових технологій. Ці люди хочуть прагнути до безкоштовной web-освіти \n" +
                "в нашій країні. Переходьте на їхній Youtube канал та дізнайтесь \n" +
                "докладніше про них. Вони чекають на вас.",
            contact: "mailto:streetitteam@gmail.com"
        }
    ]
}

const allCourses = state.concatArray();

export const coursesDisplay = {
    FrontEndView :  state.coursesList[0].map(cours => {
        return(
            <CoursesItem cours={cours}/>
        );
    }),
    BackEndView :  state.coursesList[1].map(cours => {
        return(
            <CoursesItem cours={cours}/>
        );
    }),
    OOPView :  state.coursesList[2].map(cours => {
        return(
            <CoursesItem cours={cours}/>
        );
    }),
    WebDesignView :  state.coursesList[3].map(cours => {
        return(
            <CoursesItem cours={cours}/>
        );
    }),
    AllCoursesView :  allCourses.map(cours => {
        return(
            <CoursesItem cours={cours}/>
        );
    })

};


export default state;