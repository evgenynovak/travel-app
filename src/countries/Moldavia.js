import sad from '../assets/image/Moldavia/Moldavia1.jpg';
import kurki from '../assets/image/Moldavia/Moldavia2.jpg';
import sobor from '../assets/image/Moldavia/Moldavia3.jpg';
import cipov from '../assets/image/Moldavia/Moldavia4.jpg';
import kapri from '../assets/image/Moldavia/Moldavia5.jpg';
import pushkin from '../assets/image/Moldavia/Moldavia6.jpg';
import main from '../assets/image/Moldavia/Moldavia0.jpg';

const Moldavia = {
    name : 'Молдавия',
    capital : "Кишинёв",
    capitalEng : 'Chisinau',
    prev : main,
    preview : "https://www.youtube.com/embed/wzPjHMBL9n8",
    id : 'MD',
    info : 'Государство в Юго-Восточной Европе. Площадь территории — 33 846 км², однако де-факто около 12,3 % территории не контролируется молдавскими властями.',
    sights : [{
        place : 'Кишиневский ботанический сад',
        description : 'Создан в 1950 году. Площадь в более чем 100 га разделена на сектора. Одни вмещают исключительно дендрарии, кустарники, имеется участок цветопроизводства.',
        image : sad,
    },
    {
        place : 'Монастырь Курки',
        description : 'Примечательный объект духовного творчества XVII века. Он возвышается на красивых холмах с густыми лесами.',
        image : kurki,
    },
    {
        place : 'Собор Рождества Христова в Кишинёве',
        description : 'Был построен буквадьно за год. Большая церковь является частью архитектурного комплекса, включающего в себя несколько построек.',
        image : sobor,
    },
    {
        place : 'Монастырь Цыпова',
        description : 'Уникальный исторический памятник. Его красотой и неповторимостью просто нельзя не восхищаться.',
        image : cipov,
    },
    {
        place : 'Каприянский монастырь',
        description : 'Впервые он был построен из дерева в 1429 году, но через несколько столетий на его месте «выросла» большая церковь из камня.',
        image : kapri,
    },
    {
        place : 'Дом-музей Пушкина в Кишинёве',
        description : 'Дом, в котором жил известный поэт А.С.Пушкин во время ссылки. Этот период своей жизни он описал в произведении «Черная шаль».',
        image : pushkin,
    }],
};


export default Moldavia;