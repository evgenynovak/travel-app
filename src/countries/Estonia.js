import oldCity from '../assets/image/Estonia/Estonia1.jpg';
import toompeya from '../assets/image/Estonia/Estonia2.jpg';
import sobor from '../assets/image/Estonia/Estonia3.jpg';
import lahemaa from '../assets/image/Estonia/Estonia4.jpg';
import palmse from '../assets/image/Estonia/Estonia5.jpg';
import saaremaa from '../assets/image/Estonia/Estonia6.jpg';
import main from '../assets/image/Estonia/Estonia0.jpg';


const Estonia = {
    name : 'Эстония',
    capital : 'Таллин',
    prev : main,
    id : 'EE',
    info : "Государство, расположенное в Северной Европе на восточном побережье Балтийского моря, омываемое водами Финского и Рижского заливов.",
    sights : [{
        place : 'Старый город Таллина',
        description : 'Исторический центр города изобилует разнообразием примечательных мест, благодаря которым он и был внесён в список наследия ЮНЕСКО.',
        image : oldCity,
    },
    {
        place : 'Замок Тоомпеа',
        description : 'Истории замка началась в далёком 13 веке. Он был возведён на территории деревянного городища эстов. Площадь замка составляет около 9 тыс. кв. м, а над уровнем моря он возвышается на 50 метров.',
        image : toompeya,
    },
    {
        place : 'Собор Александра Невского',
        description : 'Пятиглавый крестово-купольный храм возведён в конце 19 века и оформлен в неовизантийском стиле. Храм символизировал память о необыкновенном спасении благоверного князя Александра III Невского во время железнодорожной катастрофы.',
        image : sobor,
    },
    {
        place : 'Национальный парк Лахемаа',
        description : 'Живописный уголок природы, идеальный для пеших прогулок. Лахемааский парк был основан в 1971 году. Его площадь составляет целых 725 кв. км.',
        image : lahemaa,
    },
    {
        place : 'Музей-Усадьба Палмсе',
        description : 'Постройки Усадьбы были возведены в середине 18 века в стиле барокко, и более 2 столетий поместье принадлежало баронам фон дер Паленам.',
        image : palmse,
    },
    {
        place : 'Остров Сааремаа',
        description : 'Остров расположен в западной части страны и входит в Моондзундский архипелаг. Он также является 4-м по величине островом в Балтийском море.',
        image : saaremaa,
    }]
};

export default Estonia;