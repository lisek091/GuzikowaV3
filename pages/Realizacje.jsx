import Image from 'next/image'
import { useEffect, useState } from 'react'

const OknaPCVNavs = [
    {
        label: "", navs: [
            {
                title: "DECCO 82",
                desc: "Idealny wybór dla tych, którzy poszukują najwyższych parametrów termicznych spełniających nowe wymagania budowlane, znakomitego designu przy zachowaniu rozsądnej ceny.",
                path: "/oferta/systemy/Decco82",
            },
            {
                title: "DECCO 83",
                desc: "Profil o ekstremalnych parametrach termicznych. Trzecia uszczelka i szerokie pakiety szybowe z ciepłą ramką zapewniają parametry, jakich nie gwarantują inne profile.",
                path: "/oferta/systemy/Decco83",               
            },
        ]
    }, {
        label: "", navs: [
            {
                title: "GEALAN-LINEAR®",
                desc: "Innowacyjna konstrukcja systemu została ukierunkowana na spełnienie aktualnych i przyszłych oczekiwań rynku.",
                path: "/oferta/systemy/Gealanlinear",
            },
            {
                title: "GEALAN S 9000",
                desc: "Doskonała izolacja termiczna i akustyczna dzięki sześciokomorowej budowie oraz zwiększonej głębokości ościeżnicy i skrzydła.",
                path: "/oferta/systemy/S9000",
            },
        ]
    }
]
const OknaAluminioweNavs = [
    {
        label: "", navs: [
            {
                title: "PE50",
                desc: "System profili aluminiowych bez izolacji termicznej przeznaczony do wykonywania konstrukcji wewnętrznych: lekkich ścianek i przeszkleń oraz okien otwieranych.",
                path: "/oferta/okna/Pe50",
            },
            {
                title: "PE68 / PE68HI",
                desc: "System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro oraz rowkiem okuciowym stosowanym w oknach i drzwiach balkonowych z profili PVC lub drewnianych o bardzo dobrych właściwościach izolacyjnych.",
                path: "/oferta/okna/Pe68",
            },
        ]
    }, {
        label: "", navs: [
            {
                title: "PE78NHL - okna uchylno-przesuwne",
                desc: "Zaawansowany system o trzykomorowej konstrukcji profili o bardzo dobrych właściwościach izolacyjnych.",
                path: "/oferta/okna/Pe78nhl",
            },
            {
                title: "PE78N - okna industrial",
                desc: "System o trzykomorowej konstrukcji z rowkiem okuciowym w standardzie euro.",
                path: "/oferta/okna/Pe78industrial",
            },
        ]
    }, {
        label: "", navs: [
            {
                title: "PE78 Slim",
                desc: "System o trzykomorowej konstrukcji z rowkiem okuciowym w standardzie euro.",
                path: "/oferta/okna/Pe78nslim",
            },
            {
                title: "PE78N / PE78NHI",
                desc: "System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro oraz rowkiem okuciowym stosowanym w oknach i drzwiach balkonowych z profili PVC lub drewnianych. Jest przeznaczony do konstrukcji okien o bardzo wysokich wymogach izolacyjności termicznej.",
                path: "/oferta/okna/Pe78",
            },
        ]
    },
    {
        label: "", navs: [
            {
                title: "PE96 Passive",
                desc: "System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro. Jest przeznaczony do konstrukcji okien o bardzo wysokich wymogach izolacyjności termicznej.",
                path: "/oferta/okna/Pe96",
            },
        ]
    }
]
const SystemyPrzesuwnePCVNavs = [
    {
        label: "", navs: [
            {
                title: "Decco Slide",
                desc: "Stanowi doskonałą alternatywę dla drzwi tarasowych typu PSK czy HST.",
                path: "/oferta/systemy/przesuwnePCV/DeccoSlide",
            },
        ]
    },  
   
]
const SystemyPrzesuwneAluminioweNavs = [
    {
        label: "", navs: [
            {
                title: "SL1600",
                desc: "Wariant systemu podnoszono-przesuwnego przeznaczony do wykonywania konstrukcji o szczególnie wysokich wymaganiach dotyczących izolacyjności termicznej.",
                path: "/oferta/systemy/przesuwneAlu/SL1600",              
            },
            {
                title: "SL1700",
                desc: "System przesuwny z doszczelnieniem domykowym izolowany termicznie przeznaczony do wykonywania elementów zabudowy zewnętrznej.",
                path: "/oferta/systemy/przesuwneAlu/SL1700",    
            },
        ]
    }, {
        label: "", navs: [
            {
                title: "SL1800",
                desc: "System podnoszono-przesuwny izolowany termicznie.",
                path: "/oferta/systemy/przesuwneAlu/SL1800",               
            },
            {
                title: "PE78Fold",
                desc: "Idealne rozwiązanie do domów, restauracji czy kawiarni, które łączy przestrzeń wewnętrzną z zewnętrzną.",
                path: "/oferta/systemy/przesuwneAlu/PE78Fold",               
            },
        ]
    }
]
const DrzwiAluminioweNavs = [
    {
        label: "", navs: [
            {
                title: "Ponzio PE68/PE78N",
                desc: "Rozwiązanie przeznaczone do wykonywania drzwi o specjalnej konstrukcji, która pozwala na uzyskanie jednolitej płaszczyzny skrzydła drzwiowego i ościeżnicy.",
                path: "/oferta/drzwiALU/PE68PE78N",
            },
            {
                title: "Ponzio PE78NHI",
                desc: "Wariant systemu PE78NHI przeznaczony do wykonywania drzwi o specjalnej konstrukcji, która pozwala na uzyskanie jednolitej płaszczyzny skrzydła drzwiowego.",
                path: "/oferta/drzwiALU/PE78NHLPlywajace",
            },
        ]
    }, {
        label: "", navs: [
            {
                title: "Ponzio PE78N/PE78NH",
                desc: "Trzykomorowy system izolowany termicznie przeznaczony do wykonywania konstrukcji drzwiowych.",
                path: "/oferta/drzwiALU/PE78NPE78NHL",
            },
            {
                title: "Ponzio PE96HI - drzwi",
                desc: "Symetryczny system o bardzo wysokiej izolacyjności termicznej przeznaczony do wykonywania konstrukcji drzwiowych.",
                path: "/oferta/drzwiALU/Pe96HL",
            },
        ]
    }, {
        label: "", navs: [
            {
                title: "Ponzio PE96HI - drzwi płaszczowe",
                desc: "System dla najbardziej wymagających użytkowników, charakteryzujący się bardzo wysoką izolacyjnością termiczną.",
                path: "/oferta/drzwiALU/Pe96HLPlaszczowe",
            },
        ]
    }
]

export default () => {

    const [state, setState] = useState(false)
    const [drapdownState, setDrapdownState] = useState({ isActive: false, idx: null })

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Okna PCV", path: "javascript:void(0)", isDrapdown: true, navs: OknaPCVNavs },
        { title: "Okna aluminiowe", path: "javascript:void(0)", isDrapdown: true, navs: OknaAluminioweNavs },
        { title: "Systemy przesuwne PCV", path: "javascript:void(0)", isDrapdown: true, navs: SystemyPrzesuwnePCVNavs },
        { title: "Systemy przesuwne aluminiowe", path: "javascript:void(0)", isDrapdown: true, navs: SystemyPrzesuwneAluminioweNavs },
        { title: "Drzwi aluminiowe", path: "javascript:void(0)", isDrapdown: true, navs:DrzwiAluminioweNavs },
        { title: "Kontakt", path: "/Kontakt", isDrapdown: false },
        { title: "Przykładowe realizacje", path: "/Realizacje", isDrapdown: false }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, [])

    return (
        <>
            <nav className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
                <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/" className='max-md:block hidden lg:block'>
                            <img
                                src="/logo1.8.jpg"
                                width={180}
                                height={60}
                                alt="MD1 logo"
                                className='rounded-lg'
                            />
                        </a>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>

                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            {
                                                item.isDrapdown ? (
                                                    <button className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600"
                                                        onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                                    >
                                                        {item.title}
                                                        {
                                                            drapdownState.idx == idx && drapdownState.isActive ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                                                </svg>

                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                                </svg>
                                                            )
                                                        }
                                                    </button>
                                                ) : (
                                                    <a href={item.path} className="block text-gray-700 hover:text-indigo-600">
                                                        {item.title}
                                                    </a>
                                                )
                                            }
                                            {
                                                item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                                                    <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                                                        <ul className='max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-2'>
                                                            {item?.navs.map((dropdownItem, idx) => (
                                                                <li key={idx}>
                                                                    <p className="text-indigo-600 text-sm">{dropdownItem.label}</p>
                                                                    <ul className='mt-5 space-y-6'>
                                                                        {dropdownItem.navs.map((navItem, idx) => (
                                                                            <li key={idx} className="group">
                                                                                <a href={navItem.path} className='flex gap-3 items-center'>
                                                                                    <div className='w-0 h-0 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white'>
                                                                                        {navItem.icon}
                                                                                    </div>
                                                                                    <div>
                                                                                        <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">{navItem.title}</span>
                                                                                        <p className='text-sm text-gray-600 group-hover:text-gray-800 mt-1'>{navItem.desc}</p>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : ""
                                            }
                                        </li>
                                    )
                                })
                            }
                            {
                                // TO PONIZEJ DO LOGOWANIA md:flex dodac hidden skasowac
                            }
                            <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:space-y-0 hidden'>
                                <li>
                                    <a href="javascript:void(0)" className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none">
                                        Log in
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                        Sign in
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                state ? (
                    <div
                        className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setState(false)}></div>
                ) : ""
            }
        </>
    )
}