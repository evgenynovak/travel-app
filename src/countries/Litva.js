import oldTown from '../assets/image/Litva/Litva1.jpg';
import trakai from '../assets/image/Litva/Litva2.jpg';
import neringa from '../assets/image/Litva/Litva3.jpg';
import kosa from '../assets/image/Litva/Litva4.jpg';
import kaunas from '../assets/image/Litva/Litva5.jpg';
import palanga from '../assets/image/Litva/Litva6.jpg';
import main from '../assets/image/Litva/Litva0.jpg';

const Litva = {
    name : 'Литва',
    capitalru : 'Вильнюс',
    capitalen : 'Vilnius',
    prev : main,
    preview : "https://www.youtube.com/embed/0-s5hp6aMQk",
    id : 'LT',
    info : "Государство  расположенное в северной части Европы. Имеет выход к Балтийскому морю, расположена на его восточном побережье.",
    sights : [{
        place : 'Старый город Вильнюса',
        description : 'Это настоящий исторический центр, в котором царит особая атмосфера прошлых столетий и есть множество памятников культуры.',
        image : oldTown,
    },
    {
        place : 'Тракайский замок',
        description : 'Островной замок представлен готическим архитектурным ансамблем. В центре возвышается огромный княжеский дворец. Главную постройку окружают мощные оборонительные стены и множество башен.',
        image : trakai,
    },
    {
        place : 'Город-курорт Неринга',
        description : 'Неринга располагается на Куршской Косе. Город-курорт по праву называют жемчужиной Литвы. Там можно по-настоящему расслабиться и отдохнуть.',
        image : neringa,
    },
    {
        place : 'Национальный парк Куршская Коса',
        description : 'Территорию парка омывают соленые воды Балтийского моря и пресноводный Куршский Залив. Краски дюнных ландшафтов поистине впечатляют.',
        image : kosa,
    },
    {
        place : 'Каунасский замок',
        description : 'Замок представлен готическим архитектурным стилем. С историей этой литовской достопримечательности можно ознакомиться в музее, организованном в одной из башен.',
        image : kaunas,
    },
    {
        place : 'Музей Янтаря в Паланге',
        description : 'Уникальнейший музей, который красочно рассказывает историю «солнечного камня». Побывав в стенах этой достопримечательности, можно окунуться в яркие краски каменной сказки.',
        image : palanga,
    }]
};

export default Litva;