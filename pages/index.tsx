import type {NextPage} from 'next'
import ReactTooltip from 'react-tooltip';
import Head from 'next/head'
import Image, {StaticImageData} from 'next/image'
import adult from "../public/adult.png"
import child from "../public/child.png"
import scoliosis from "../public/scoliosis.png"
import breath from "../public/breath.png"
import chewing from "../public/chewing.png"
import fatigue from "../public/fatigue.png"
import hip from "../public/hip.png"
import joint from "../public/joint.png"
import raising_hands from "../public/raising_hands.png"
import gait from "../public/gait.png"
import plus from "../public/plus.png"

interface DataProps {
    id: number,
    description: string
}

interface CarouselProps {
    description: string,
    img: StaticImageData,
}

const Home: NextPage = () => {
    const childData: DataProps[] = [
        {
            id: 1, description: `Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, 
    с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, 
    но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, 
    вызывает настороженность в отношении наличия СМА.`
        },
        {
            id: 2, description: `Младенцам со СМА необходимо экстренное направление к специалисту, 
    ранняя диагностика и обеспечение терапией, спасающей жизнь, 
    поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания`
        },
    ]

    const adultsData: DataProps[] = [
        {
            id: 1, description: `Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.`
        },
        {
            id: 2, description: `По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, 
    но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.`
        },
        {
            id: 3,
            description: `По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.`
        }
    ]


    const carouselData: CarouselProps[] = [
        {description: "Нарушения жевания и глотания", img: chewing},
        {description: "Дыхательная недостаточность/ респираторная дисфункция", img: breath},
        {description: "Неспособность бегать, изменение походки", img: gait},
        {description: "Контрактура суставов", img: joint},
        {description: "Вывих бедра", img: hip},
        {description: "Утомляемость", img: fatigue},
        {description: "Сколиоз", img: scoliosis},
        {
            description: `Ограниченная способность поднимать руки 
            и переносить предметы`, img: raising_hands
        },
    ]

    return (
        <div className="container">
            <Head>
                <title>СМА</title>
                <meta name="description" content="Что делать, если у вас CMA?"/>
                <meta name="keywords" content="CMA, сколиоз, утомляемость, вывих бедра, лечение CMA взрослому, лечение CMA ребёнку,
        контрактура суставов, неспособность бегать, изменение походки, дыхательная недостаточность/респираторная дисфункция
        нарушения жевания и глотания, врачи в Москве, МирВрача"/>
                <meta name="author" content="Варламов Александр"/>
                <meta property="og:title" content="Признаки заболевания СМА"/>
                <meta property="og:description" content="Признаки заболевания СМА у взрослого и ребёнка.
        Среди часто встречающихся: сколиоз, утомляемость, изменение походки, дыхательная недостаточность"/>

                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="content">
                <h1 className="heading">
                    А вдруг СМА?
                </h1>
                <h2 className="subheading">
                    Выберите, кто Ваш пациент:
                </h2>
                <section className="content_data">
                    <div className="content_data__row">
                        <div className="content_data__column">
                            <div className="content_data__item">
                                <h3 className="heading">
                                    Взрослый
                                </h3>
                                <div className="img_place">
                                    <Image src={adult}
                                           alt="Взрослый"
                                           placeholder="blur"
                                           width={300}
                                           height={300}
                                    />
                                </div>
                            </div>
                            {adultsData.map(item => {
                                return (
                                    <div className="content_data__item" key={`adults-${item.id}`}>
                                        {item.description}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="content_data__column">
                            <div className="content_data__item">
                                <h3 className="heading">
                                    Ребёнок
                                </h3>
                                <div className="img_place">
                                    <Image src={child}
                                           alt="Ребёнок"
                                           placeholder="blur"
                                           width={300}
                                           height={300}
                                    />
                                </div>
                            </div>
                            {childData.map(item => {
                                return (
                                    <div className="content_data__item" key={`child-${item.id}`}>
                                        {item.description}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <p className="clarification">
                    Сообщает ли один из ваших пациентов о следующих симптомах? <span>(нажмите на любую иконку и узнайте больше)</span>
                </p>
                <section className="carousel">
                    <div className="carousel-circle">
                        {carouselData.map(item => {
                            return (
                                <div className="carousel-circle__item" key={item.description} data-tip={item.description}>
                                    <Image src={item.img} width={110} height={110} alt={item.description} placeholder="blur"/>
                                    <div className="carousel-circle__item_plus">
                                        <Image src={plus} width={110} height={110} alt="Посмотреть описание"/>
                                    </div>
                                    <ReactTooltip place="right" isCapture={true} effect="solid" event="click"/>
                                </div>
                            )

                        })}
                        <div className="carousel_center">
                            <div className="carousel_center__img">
                                <Image src={adult}
                                       alt="Взрослый"
                                       placeholder="blur"
                                       width={330}
                                       height={330}
                                />
                            </div>
                            <p className="heading">
                                Взрослый
                            </p>
                        </div>
                    </div>


                </section>
            </main>
        </div>
    )
}

export default Home
