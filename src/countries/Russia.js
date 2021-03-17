import moscow from '../assets/image/Russia/Russia1.jpg';
import stpeter from '../assets/image/Russia/Russia2.jpg';
import baikal from '../assets/image/Russia/Russia3.jpg';
import dolina from '../assets/image/Russia/Russia4.jpg';
import ermitaj from '../assets/image/Russia/Russia5.jpg';
import sochi from '../assets/image/Russia/Russia6.jpg';
import main from '../assets/image/Russia/Russia0.jpg';

const Russia = {
    name : 'Россия',
    capitalru : "Москва",
    capitalen : 'Moscow',
    prev : main,
    preview : "https://www.youtube.com/embed/WcQ96O5FV1k",
    id : 'RU',
    info : 'Государство в Восточной Европе и Северной Азии. Занимает первое место в мире по территории, и девятое - по численности населения',
    sights : [{
        place : 'Красная площадь',
        description : 'Красная площадь – визитная карточка Москвы. Cимволом Красной площади стал Кремль со Спасской башней – главными часами России.',
        image : moscow,
    },
    {
        place : 'Петергоф',
        description : 'Резиденция для летнего загородного отдыха с множеством дворцов и прекрасным парком на южном берегу Финского залива',
        image : stpeter,
    },
    {
        place : 'Озеро Байкал',
        description : 'Величайшее озеро на Земле, российскую святыню иногда называют «лабораторией разнообразия» и крупнейшим в мире хранилищем чистейшей пресной воды.',
        image : baikal,
    },
    {
        place : 'Долина гейзеров',
        description : 'Вулканический каньон, достигающий в ширину двух километров и простирающийся на четыре километра, напоминает фантастический «город» из сотен гейзеров и горячих источников.',
        image : dolina,
    },
    {
        place : 'Эрмитаж',
        description : 'Зимний дворец в Санкт-Петербурге – настоящее достояние страны и северной столицы. Исторический памятник, смотрящийся в воды Невы как в зеркало.',
        image : ermitaj,
    },
    {
        place : 'Красная поляна',
        description : 'Горнолыжный курорт рядом с Сочи (Адлер). Здесь есть трассы для экстремалов, профессионалов, любителей горнолыжных спусков и для начинающих.',
        image : sochi,
    }],
};


export default Russia;