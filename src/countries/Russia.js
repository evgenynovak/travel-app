import moscow from '../assets/image/Russia/Russia1.jpg';
import stpeter from '../assets/image/Russia/Russia2.jpg';
import baikal from '../assets/image/Russia/Russia3.jpg';
import dolina from '../assets/image/Russia/Russia4.jpg';
import ermitaj from '../assets/image/Russia/Russia5.jpg';
import sochi from '../assets/image/Russia/Russia6.jpg';
import main from '../assets/image/Russia/Russia0.jpg';

const Russia = {
    nameru : 'Россия',
    nameen : 'Russia',
    namede : 'Russland',
    capitalru : "Москва",
    capitalen : 'Moscow',
    capitalde : "Moskau",
    prev : main,
    preview : "https://www.youtube.com/embed/WcQ96O5FV1k",
    id : 'RU',
    inforu : 'Государство в Восточной Европе и Северной Азии. Занимает первое место в мире по территории, и девятое - по численности населения',
    infoen : "State in Eastern Europe and North Asia. Ranked first in the world in terms of territory, and ninth in terms of population",
    infode : "Staat in Osteuropa und Nordasien. In Bezug auf das Territorium an erster Stelle der Welt und in Bezug auf die Bevölkerung auf dem neunten Platz",
    sights : [{
        placeru : 'Красная площадь',
        placeen : 'The Red Square',
        placede : 'Roter Platz',
        descriptionru : 'Красная площадь – визитная карточка Москвы. Cимволом Красной площади стал Кремль со Спасской башней – главными часами России.',
        descriptionen : 'Red Square is a visiting card of Moscow. The Kremlin with the Spasskaya Tower, the main clock of Russia, has become the symbol of Red Square.',
        descriptionde : 'Der Rote Platz ist eine Visitenkarte von Moskau. Der Kreml mit dem Spasskaya-Turm, der Hauptuhr Russlands, ist zum Symbol des Roten Platzes geworden.',
        image : moscow,
    },
    {
        placeru : 'Петергоф',
        placeen : 'Peterhof',
        placede : 'Peterhof',
        descriptionru : 'Резиденция для летнего загородного отдыха с множеством дворцов и прекрасным парком на южном берегу Финского залива',
        descriptionen : 'Residence for a summer country vacation with many palaces and a beautiful park on the southern coast of the Gulf of Finland',
        descriptionde : 'Residenz für einen Sommerurlaub auf dem Land mit vielen Palästen und einem wunderschönen Park an der Südküste des Finnischen Meerbusens',
        image : stpeter,
    },
    {
        placeru : 'Озеро Байкал',
        placeen : 'Lake Baikal',
        placede : 'Baikalsee',
        descriptionru : 'Величайшее озеро на Земле, российскую святыню иногда называют «лабораторией разнообразия» и крупнейшим в мире хранилищем чистейшей пресной воды.',
        descriptionen : "The greatest lake on Earth, the Russian shrine is sometimes called the “laboratory of diversity” and the world's largest repository of the purest fresh water.",
        descriptionde : 'Der größte Schrein der Erde, der russische Schrein, wird manchmal als „Labor der Vielfalt“ und als weltweit größter Speicher für reinstes Süßwasser bezeichnet.',
        image : baikal,
    },
    {
        placeru : 'Долина гейзеров',
        placeen : 'Valley of Geysers',
        placede : 'Tal der Geysire',
        descriptionru : 'Вулканический каньон, достигающий в ширину двух километров и простирающийся на четыре километра, напоминает фантастический «город» из сотен гейзеров и горячих источников.',
        descriptionen : "The volcanic canyon, two kilometers wide and four kilometers long, resembles a fantastic 'city' of hundreds of geysers and hot springs.",
        descriptionde : "Die zwei Kilometer breite und vier Kilometer lange Vulkanschlucht ähnelt einer fantastischen 'Stadt' mit Hunderten von Geysiren und heißen Quellen.",
        image : dolina,
    },
    {
        placeru : 'Эрмитаж',
        placeen : 'Hermitage Museum',
        placede : 'Einsiedelei Museum',        
        descriptionru : 'Зимний дворец в Санкт-Петербурге – настоящее достояние страны и северной столицы. Исторический памятник, смотрящийся в воды Невы как в зеркало.',
        descriptionen : 'The Winter Palace in St. Petersburg is a real treasure of the country and the northern capital. A historical monument looking into the waters of the Neva as in a mirror.',
        descriptionde : 'Der Winterpalast in St. Petersburg ist ein wahrer Schatz des Landes und der nördlichen Hauptstadt. Ein historisches Denkmal, das wie in einem Spiegel in das Wasser der Newa schaut.',
        image : ermitaj,
    },
    {
        placeru : 'Красная поляна',
        placeen : 'Krasnaya Polyana',
        placede : 'Krasnaya Polyana',  
        descriptionru : 'Горнолыжный курорт рядом с Сочи (Адлер). Здесь есть трассы для экстремалов, профессионалов, любителей горнолыжных спусков и для начинающих.',
        descriptionen : 'Ski resort near Sochi (Adler). There are trails for extreme lovers, professionals, amateurs of ski slopes and for beginners.',
        descriptionde : 'Skigebiet in der Nähe von Sotschi (Adler). Es gibt Trails für Extremliebhaber, Profis, Amateure von Skipisten und für Anfänger.',
        image : sochi,
    }],
};


export default Russia;