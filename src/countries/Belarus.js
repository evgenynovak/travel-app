import brest from '../assets/image/Belarus/Belarus1.jpg';
import nesvij from '../assets/image/Belarus/Belarus2.jpg';
import mir from '../assets/image/Belarus/Belarus3.jpg';
import minsk from '../assets/image/Belarus/Belarus4.jpg';
import polotsk from '../assets/image/Belarus/Belarus5.jpg';
import hatin from '../assets/image/Belarus/Belarus6.jpg';
import main from '../assets/image/Belarus/Belarus0.jpg'

const Belarus = {
    name : "Беларусь",
    capital : 'Минск',
    capitalEng : 'Minsk',
    prev : main,
    id : 'BY',
    info : "Государство в Восточной Европе. Территория — 207 595 км². Государственными языками являются белорусский и русский.",
    sights : [{
        place : 'Брестская крепость',
        description : 'Брестская крепость стала свидетелем героических сражений во время Великой Отечественной войны. Подвиг народа запечатлен в камне.',
        image : brest,
    },
    {
        place : 'Несвижский замок',
        description : 'Несвижский замок является отражением роскоши Литовской знати. Большое, амбициозное и очень строгое архитектурное сооружение построено в шестнадцатом веке.',
        image : nesvij,
    },
    {
        place : 'Мирский замок',
        description : 'Это мощное фортификационное сооружение. Башни замка имеют высоту 25 м. В Мирском замке есть все для тех туристов, которые думают, что посмотреть в Беларуси.',
        image : mir,
    },
    {
        place : 'Костел Святых Симеона и Елены',
        description : 'Костел возведен из красного кирпича. Он виден из разных точек города, поскольку здание является достаточно высоким. Был построен в начале прошлого века.',
        image : minsk,
    },
    {
        place : 'Софийский собор',
        description : 'Христианская святыня, возведенная в одиннадцатом веке. Собор является шедевром архитектурных достопримечательностей Белоруссии.',
        image : polotsk,
    },
    {
        place : 'Хатынь',
        description : 'Мемориальный комплекс Хатынь — это знаковый символ горячей боли белорусского народа. События войны запечатлены здесь в суровых и выразительных архитектурных решениях.',
        image : hatin,
    }]
};

export default Belarus;