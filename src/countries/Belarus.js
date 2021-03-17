import brest from '../assets/image/Belarus/Belarus1.jpg';
import nesvij from '../assets/image/Belarus/Belarus2.jpg';
import mir from '../assets/image/Belarus/Belarus3.jpg';
import minsk from '../assets/image/Belarus/Belarus4.jpg';
import polotsk from '../assets/image/Belarus/Belarus5.jpg';
import hatin from '../assets/image/Belarus/Belarus6.jpg';
import main from '../assets/image/Belarus/Belarus0.jpg';

const Belarus = {
    nameru : "Беларусь",
    nameen : "Belarus",
    namede: "Belarus",
    capitalru : 'Минск',
    capitalen : 'Minsk',
    capitalde : 'Minsk',
    prev : main,
    preview : 'https://www.youtube.com/embed/QNdYybI3Pgs',
    id : 'BY',
    inforu : "Государство в Восточной Европе. Территория — 207 595 км². Государственными языками являются белорусский и русский.",
    infoen : "State in Eastern Europe. Territory — 207 595 км². The official languages are Belarusian and Russian.",
    infode : "Staat in Osteuropa. Gebiet — 207 595 км². Die offiziellen Sprachen sind Weißrussisch und Russisch.",
    sights : [{
        placeru : 'Брестская крепость',
        placeen : 'Brest Fortress',
        placede : 'Festung Brest',
        descriptionru : 'Брестская крепость стала свидетелем героических сражений во время Великой Отечественной войны. Подвиг народа запечатлен в камне.',
        descriptionen : 'The Brest Fortress witnessed heroic battles during the Great Patriotic War. The feat of the people is etched in stone.',
        descriptionde : 'Die Brester Festung war Zeuge heldenhafter Schlachten während des Großen Vaterländischen Krieges. Das Kunststück des Volkes ist in Stein gemeißelt.',
        image : brest,
    },
    {
        placeru : 'Мирский замок',
        placeen : 'Mir Castle',
        placede : 'Mir Schloss',
        descriptionru : 'Это мощное фортификационное сооружение. Башни замка имеют высоту 25 м. В Мирском замке есть все для тех туристов, которые думают, что посмотреть в Беларуси.',
        descriptionen : 'This is a powerful fortification. The castle towers are 25 m high. Mir Castle has everything for those tourists who think what to see in Belarus.',
        descriptionde : 'Dies ist eine mächtige Festung. Die Burgtürme sind 25 m hoch. Mir Castle bietet alles für Touristen, die sich überlegen, was sie in Belarus sehen sollen.',
        image : mir,
    },
    {
        placrue : 'Костел Святых Симеона и Елены',
        placeen : 'Church of Saints Simeon and Helena',
        placede : 'Kirche der Heiligen Simeon und Helena',
        descriptionru : 'Костел возведен из красного кирпича. Он виден из разных точек города, поскольку здание является достаточно высоким. Был построен в начале прошлого века.',
        descriptionen : 'The church was built of red brick. It is visible from different points of the city because the building is quite tall. It was built at the beginning of the last century.',
        descriptionde : 'Die Kirche wurde aus rotem Backstein gebaut. Es ist von verschiedenen Punkten der Stadt aus sichtbar, da das Gebäude ziemlich hoch ist. Es wurde zu Beginn des letzten Jahrhunderts erbaut.',
        image : minsk,
    },
    {
        placrue : 'Софийский собор',
        placeen : 'Saint Sophia Cathedral',
        placede : 'St. Sophia Kathedrale',
        descriptionru : 'Христианская святыня, возведенная в одиннадцатом веке. Собор является шедевром архитектурных достопримечательностей Белоруссии.',
        descriptionen : 'Christian shrine, erected in the eleventh century. The cathedral is a masterpiece of the architectural landmarks of Belarus.',
        descriptionde : 'Christliches Heiligtum, erbaut im elften Jahrhundert. Die Kathedrale ist ein Meisterwerk der architektonischen Wahrzeichen von Belarus.',
        image : polotsk,
    },
    {
        placrue : 'Хатынь',
        placeen : 'Saint Sophia Cathedral',
        placede : 'St. Sophia Kathedrale',
        descriptionru : 'Мемориальный комплекс Хатынь — это знаковый символ горячей боли белорусского народа. События войны запечатлены здесь в суровых и выразительных архитектурных решениях.',
        descriptionen : 'The Khatyn Memorial Complex is a symbolic symbol of the ardent pain of the Belarusian people. The events of the war are captured here in harsh and expressive architectural solutions.',
        descriptionde : 'Der Khatyn Memorial Complex ist ein symbolisches Symbol für den brennenden Schmerz des belarussischen Volkes. Die Ereignisse des Krieges werden hier in harten und ausdrucksstarken architektonischen Lösungen festgehalten.',
        image : hatin,
    }]
};

export default Belarus;