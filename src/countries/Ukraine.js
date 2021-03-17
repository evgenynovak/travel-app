import kiev from '../assets/image/Ukraine/Ukraine1.jpg';
import maidan from '../assets/image/Ukraine/Ukraine2.jpg';
import odessa from '../assets/image/Ukraine/Ukraine3.jpg';
import hotin from '../assets/image/Ukraine/Ukraine4.jpg';
import sobor from '../assets/image/Ukraine/Ukraine5.jpg';
import tunnel from '../assets/image/Ukraine/Ukraine6.jpg';
import main from '../assets/image/Ukraine/Ukraine0.jpg';

const Ukraine = {
    name : 'Украина',
    capital : "Киев",
    capitalEng : 'Kyiv',
    id : 'UA',
    prev : main,
    preview : "https://www.youtube.com/embed/l-8vRH0W88g",
    info : 'Украина – это большая страна в Восточной Европе, известная православными церквями, черноморскими курортами и лесистыми горами.',
    sights : [{
        place : 'Киево-Печерская лавра',
        description : 'Одной из самых главных святынь православия по праву считается Киево-Печерская лавра – первый монастырь на Руси и символ веры.',
        image : kiev,
    },
    {
        place : 'Площадь Независимости',
        description : 'Площадь Независимости, именуемая украинцами «майдан», – главная площадь столицы.',
        image : maidan,
    },
    {
        place : 'Дерибасовская улица',
        description : 'На Дерибасовской находится множество кафе, ресторанов, летних площадок, она просто насквозь пропитана одесским колоритом.',
        image : odessa,
    },
    {
        place : 'Хотинская крепость',
        description : 'Настоящий памятник великой истории Руси, которому уже чуть более 1000 лет.',
        image : hotin,
    },
    {
        place : 'Собор Святой Софии',
        description : 'входит в список Всемирного наследия, богослужения проводятся лишь по великим христианским праздникам, в остальное время храм открыт для посещения туристов.',
        image : sobor,
    },
    {
        place : 'Тоннель любви',
        description : 'Данное место считается одним из самых красивых мест на Земле. Лучше всего наблюдать за тоннелем в конце весны, летом и в начале осени.',
        image : tunnel,
    }],
};


export default Ukraine;