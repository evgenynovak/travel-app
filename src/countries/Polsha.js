import oldCity from '../assets/image/Polsha/Polsha1.jpg';
import marienburg from '../assets/image/Polsha/Polsha2.jpg';
import tatri from '../assets/image/Polsha/Polsha3.jpg';
import vavel from '../assets/image/Polsha/Polsha4.jpg';
import kosteli from '../assets/image/Polsha/Polsha5.jpg';
import mazur from '../assets/image/Polsha/Polsha6.jpg';
import main from '../assets/image/Polsha/Polsha0.jpg';

const Polsha = {
    name : 'Польша',
    capital : 'Варшава',
    capitalEng : 'Warsaw',
    prev : main,
    preview : "https://www.youtube.com/embed/mSNqPwd38zY",
    id : 'PL',
    info : "Страна в Восточной Европе на берегу Балтийского моря, известная своей средневековой архитектурой и еврейскими кварталами.",
    sights : [{
        place : 'Старый город Варшавы',
        description : 'Основан Старый город был еще в XIII веке. Положительной особенностью этой достопримечательности является богатство района памятниками средневековой архитектуры.',
        image : oldCity,
    },
    {
        place : 'Замок Мариенбург',
        description : '«Гнездо» немецких рыцарей. Его история началась еще 700 лет назад, когда резиденция тевтонов официально была перенесена из Венеции в Мариенбург.',
        image : marienburg,
    },
    {
        place : 'Татры',
        description : 'Горная система Карпат, высшая точка которой достигает 2499 м. Здесь также есть горнолыжный курорт, известный под названием Закопане.',
        image : tatri,
    },
    {
        place : 'Вавельский замок',
        description : 'Это одна из лучших достопримечательностей Кракова, представленная большой пешеходной зоной. Замок возвышается над рекой Висла, а стоит на холме.',
        image : vavel,
    },
    {
        place : 'Деревянные костелы юга Малой Польши',
        description : 'Целая группа исторически ценных с архитектурной точки зрения костелов из натурального дерева. Большинство из них имеют вид сруба, а некоторые представляют различные архитектурные стили.',
        image : kosteli,
    },
    {
        place : 'Мазурское поозёрье',
        description : 'Мазуры представляют собой исторический и этнографический район в северной части страны. Эта достопримечательность Польши относится к числу самых красивых, от красоты местной природы туристы приходят в восторг.',
        image : mazur,
    }]
};

export default Polsha;