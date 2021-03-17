import dom from '../assets/image/Latvia/Latvia1.jpg';
import rundal from '../assets/image/Latvia/Latvia2.jpg';
import urmala from '../assets/image/Latvia/Latvia3.jpg';
import gauja from '../assets/image/Latvia/Latvia4.jpg';
import kuldiga from '../assets/image/Latvia/Latvia5.jpg';
import turaid from '../assets/image/Latvia/Latvia6.jpg';
import main from '../assets/image/Latvia/Latvia0.jpg';


const Latvia = {
    name : 'Латвия',
    capital : 'Рига',
    capitalEng : 'Riga',
    prev : main,
    preview : "https://www.youtube.com/embed/-3OObhE-yaU",
    id : 'LV',
    info : "Государство  расположенное в Северной Европе. Экономика ориентирована на логистику, банковское обслуживание, туризм, пищевую промышленность.",
    sights : [{
        place : 'Дом Черноголовых',
        description : 'Основание Дома Черноголовых датируется 1334 годом. С момента основания здесь проводились различные собрания и мероприятия рижских обществ. К концу 15 века здание перешло в аренду обществу Черноголовых, в честь которого оно и было названо позже.',
        image : dom,
    },
    {
        place : 'Рундальский дворец – музей',
        description : 'Этот архитектурный шедевр разместился в самом центре страны, в культурно-историческом регионе Земгале. Совсем близко имеет место ещё одна достопримечательность — Природный парк Бауска.',
        image : rundal,
    },
    {
        place : 'Юрмала',
        description : 'Город-курорт Юрмала — настоящая жемчужина Латвии на побережье Рижского залива. Уже более двух веков Юрмала остаётся местом для отличного интересного отдыха.',
        image : urmala,
    },
    {
        place : 'Гауйский национальный парк',
        description : 'Раскинулся в долине реки Гауя на площади более 900 квадратных километров. Это крупнейший в Латвии парк-заповедник.',
        image : gauja,
    },
    {
        place : 'Город Кулдига',
        description : 'Именно здесь, на небольшой территории, можно встретить массу удивительных достопримечательностей Латвии.',
        image : kuldiga,
    },
    {
        place : 'Турайдский замок',
        description : 'Когда-то в средневековье здесь была резиденция епископа, располагался Ливонский орден и даже размещался гарнизон шведских солдат.',
        image : turaid,
    }]
};

export default Latvia;