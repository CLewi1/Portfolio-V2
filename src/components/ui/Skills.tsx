'use client'

import { useState } from 'react'

export default function Skills() {
    const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})

    const handleFlip = (skillName: string) => {
        setFlippedCards(prev => ({
            ...prev,
            [skillName]: !prev[skillName]
        }))
    }

    return (
        <div className="relative my-6 grid grid-cols-4 gap-2 overflow-hidden bg-background">

            {/* TypeScript */}
            <button 
                type="button"
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-100 perspective transition-transform duration-500 transform-style-preserve-3d ${flippedCards['TypeScript'] ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip('TypeScript')}
            >
                <div className="flex flex-col items-center gap-3 backface-hidden">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sm:group-hover:-translate-y-1 size-6 transition-all duration-300 group-hover:text-[#3178C6]">
                        <title>TypeScript</title>
                        <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                    </svg>
                    <p className="hidden font-medium text-neutral-600 dark:text-neutral-400 text-xs leading-none sm:block">TypeScript</p>
                </div>
                <div className="flex absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex-col items-center justify-center p-2">
                    <p className="text-xs sm:text-sm font-medium text-center px-2 mb-2">Proficiency:</p>
                    <div className="w-full flex border border-neutral-700 rounded overflow-hidden h-[25%]">
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700"></div>
                    </div>
                </div>
            </button>

            {/* Next.js */}
            <button 
                type="button"
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-100 perspective transition-transform duration-500 transform-style-preserve-3d ${flippedCards['NextJs'] ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip('NextJs')}
            >
                <div className="flex flex-col items-center gap-3 backface-hidden">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sm:group-hover:-translate-y-1 size-6 transition-all duration-300">
                        <title>Next.js</title>
                        <path fill="currentColor" d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                    </svg>
                    <p className="hidden font-medium text-neutral-600 dark:text-neutral-400 text-xs leading-none sm:block">Next.js</p>
                </div>
                <div className="flex absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex-col items-center justify-center p-2">
                    <p className="text-xs sm:text-sm font-medium text-center px-2 mb-2">Proficiency:</p>
                    <div className="w-full flex border border-neutral-700 rounded overflow-hidden h-[25%]">
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700"></div>
                    </div>
                </div>
            </button>

            {/* Tailwind CSS */}
            <button 
                type="button" 
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-100 perspective transition-transform duration-500 transform-style-preserve-3d ${flippedCards['TailwindCSS'] ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip('TailwindCSS')}
            >
                <div className="flex flex-col items-center gap-3 backface-hidden">
                        <svg viewBox="0 0 24 24" className="sm:group-hover:-translate-y-1 size-6 transition-all duration-300 group-hover:text-[#06B6D4]">
                            <title>Tailwind CSS</title>
                            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="currentColor"></path>
                        </svg>
                        <p className="hidden font-medium text-neutral-600 dark:text-neutral-400 text-xs leading-none sm:block">Tailwind CSS</p>
                </div>
                <div className="flex absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex-col items-center justify-center p-2">
                    <p className="text-xs sm:text-sm font-medium text-center px-2 mb-2">Proficiency:</p>
                    <div className="w-full flex border border-neutral-700 rounded overflow-hidden h-[25%]">
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700"></div>
                    </div>
                </div>
            </button>

            {/* Swift */}
            <button 
                type="button" 
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-100 perspective transition-transform duration-500 transform-style-preserve-3d ${flippedCards['Swift'] ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip('Swift')}
            >
                <div className="flex flex-col items-center gap-3 backface-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="sm:group-hover:-translate-y-1 size-6 transition-all duration-300">
                            <path fill="currentColor" d="M29.312 21.797c.073-.152.073-.297.152-.448c1.791-7.032-2.469-15.256-9.797-19.589c3.213 4.333 4.484 9.495 3.364 14.131a7 7 0 0 1-.375 1.197a7 7 0 0 1-.599-.375S14.806 12.229 7.03 4.374c-.224-.224 4.188 6.281 9.12 11.443c-2.317-1.348-8.896-6.057-13.011-9.869c.448.817 1.125 1.64 1.797 2.464c3.437 4.411 7.927 9.796 13.308 13.905c-3.813 2.323-9.12 2.469-14.505 0c-1.344-.593-2.469-1.344-3.74-2.239c2.245 3.515 5.76 6.728 9.948 8.448c5.011 2.171 10.093 2.02 13.755 0h.079c.145-.073.297-.152.448-.297c1.792-.901 5.307-1.869 7.249 1.869c.527 1.047 1.495-3.812-2.167-8.301z"/>
                        </svg>
                        <p className="hidden font-medium text-neutral-600 dark:text-neutral-400 text-xs leading-none sm:block">Swift</p>
                </div>
                <div className="flex absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex-col items-center justify-center p-2">
                    <p className="text-xs sm:text-sm font-medium text-center px-2 mb-2">Proficiency:</p>
                    <div className="w-full flex border border-neutral-700 rounded overflow-hidden h-[25%]">
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700"></div>
                        <div className="flex-1 border border-neutral-700"></div>
                    </div>
                </div>
            </button>

            {/* Python */}
            <button 
                type="button" 
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-100 perspective transition-transform duration-500 transform-style-preserve-3d ${flippedCards['Python'] ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip('Python')}
            >
                <div className="flex flex-col items-center gap-3 backface-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="sm:group-hover:-translate-y-1 size-6 transition-all duration-300 group-hover:text-[#d4d006]">
                            <title>Python</title>
                            <path fill="currentColor" d="M19.14 7.5A2.86 2.86 0 0 1 22 10.36v3.78A2.86 2.86 0 0 1 19.14 17H12c0 .39.32.96.71.96H17v1.68a2.86 2.86 0 0 1-2.86 2.86H9.86A2.86 2.86 0 0 1 7 19.64v-3.75a2.85 2.85 0 0 1 2.86-2.85h5.25a2.85 2.85 0 0 0 2.85-2.86V7.5zm-4.28 11.79c-.4 0-.72.3-.72.89s.32.71.72.71a.71.71 0 0 0 .71-.71c0-.59-.32-.89-.71-.89m-10-1.79A2.86 2.86 0 0 1 2 14.64v-3.78A2.86 2.86 0 0 1 4.86 8H12c0-.39-.32-.96-.71-.96H7V5.36A2.86 2.86 0 0 1 9.86 2.5h4.28A2.86 2.86 0 0 1 17 5.36v3.75a2.85 2.85 0 0 1-2.86 2.85H8.89a2.85 2.85 0 0 0-2.85 2.86v2.68zM9.14 5.71c.4 0 .72-.3.72-.89s-.32-.71-.72-.71c-.39 0-.71.12-.71.71s.32.89.71.89"/>
                        </svg>
                        <p className="hidden font-medium text-neutral-600 dark:text-neutral-400 text-xs leading-none sm:block">Python</p>
                </div>
                <div className="flex absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex-col items-center justify-center p-2">
                    <p className="text-xs sm:text-sm font-medium text-center px-2 mb-2">Proficiency:</p>
                    <div className="w-full flex border border-neutral-700 rounded overflow-hidden h-[25%]">
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                    </div>
                </div>
            </button>

            {/* Flask */}
            <button 
                type="button" 
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-100 perspective transition-transform duration-500 transform-style-preserve-3d ${flippedCards['Flask'] ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip('Flask')}
            >
                <div className="absolute w-full h-full backface-hidden">
                    <div className="flex flex-col items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="sm:group-hover:-translate-y-1 size-6 transition-all duration-300">
                            <path fill="currentColor" d="M153.001 434.531c-53.682-31.457-99.53-107.4-123.226-174.012c-9.518-28.896-12.778-59.876-25.048-87.656c-12.835-20.176 2.2-42.233 24.3-48.646c9.84-1.889 27.142-11.17 6.257-4.536c-18.723 13.737-20.535-12.47-1.336-14.13c13.103-1.74 17.927-12.467 13.446-22.123c-14.065-9.172 34.106-19.253 9.868-32.939c-25.25-27.24 35.318-32.485 20.375-1.547c-3.577 23.79 42.322-4.36 31.673 23.111c10.824 13.193 40.533 3.003 39.796 21.512c15.768 1.084 21.18 14.35 35.982 15.37c15.34 6.927 43.151 12.386 48.371 29.674c-15.22 12.05-50.463-24.89-52.156 8.464c6.422 117.654 12.507 158.22 69.32 219.855c38.268 43.3 90.852 63.719 135.244 70.988c9.562-7.314 26.444-34.505 41.36-23.04c.709 12.884-29.606 26.932-1.425 25.509c16.547-4.992 28.025 12.797 41.651-3.25c12.555 14.872 52.18-9.5 43.248 20.896c-12.078 7.792-29.695 3.083-41.793 13.804c-19.948-9.963-35.83 8.915-57.913 6.527c-85.133 14.9-196.073 1.46-257.994-43.831m100.061 36.821c37.114 5.162 75.442 13.102 112.689 5.86c-16.858-7.613-34.286 2.965-51.08-5.444c-20.142 4.335-41.757-1.104-62.234-3.781c-23.286-10.373-48.416-17.505-70.222-30.968c-27.248-9.953 14.092 12.763 21.45 14.603c17.034 9.668-18.73-4.957-23.773-8.976c-14.266-8.003-16.445-6.137-1.773 1.99c22.878 14.173 51.55 23.782 74.943 26.716m-106.228-50.599c20.684 7.662-.092-14.546-9.57-13.255c-4.2-7.286-16.044-11.888-7.689-15.802c-15.03 5.218-15.744-19.842-22.81-16.262c-15.9-5.02-6.188-22.806-25.128-33.729c-1.729-11.508-18.818-21.49-24.268-38.85c-2.408-8.888-19.307-34.412-8.926-10.658c8.84 22.866 24.392 42.449 37.334 62.01c10.05 18.623 21.916 38.087 40.218 49.705c6.17 5.918 12.126 14.986 20.839 16.841m26.638-36.043c-11.317-6.033-35.955-9.155-18.569 4.646c11.161 4.51 39.606 6.698 18.57-4.646m18.97 23.984c24.306 6.876-20.44-15.371-5.998-2.53zm.205-12.88c17.658 2.277-21.01-12.01-3.874-1.278zm61.37 37.735c16.486-9.856 11.051 23.08 27.97 2.782c16.688-12.185-14.412 15.065 6.156 2.173c14.874-9.949 36.845 4.716 50.724 9.5c9.982-.49 19.685 8.632 29.917 3.083c19.698-5.306-38.518-7.87-23.257-17.282c-18.024 5.245-31.34-6.254-40.209-17.798c-20.217-4.669-43.592-15.005-53.682-32.896c-4.114-6.718 5.943.946-3.55-10.034c-12.183-10.836-18.266-23.136-26.444-36.307c-9.77-5.212-10.908-20.552-11.896-.514c.078-12.646-11.795-21.158-14.693-17.62c-.052-12.18 12.706-6.074 3.775-15.086c-1.922-12.623-8.252-25.777-10.154-40.029c-2.956-6.87-.416-21.584-10.089-6.032c-3.524 16.437-1.17-20.198 4.31-8.118c7.193-12.327-2.582-10.877-2.982-9.165c4.685-10.402 2.966-25.155-1.223-19.527c2.497-11.023 3.945-40.57-3.736-35.335c4.656-11.527 8.83-52.748-11.382-37.032c-8.192.115-22.377 2.974-29.082 6.308c21.024 11.59-2.115 4.186-10.673 2.344c-1.116 10.723-9.592 6.085-20.182 6.19c16.914 2.093-8.237 17.3-17.94 11.393c-12.603 6.023 10.875 21.058.252 25.706c1.306 7.008-19.306-2.53-17.688 13.654c-12.234-5.147-1.684 19.198 4.437 10.965c20.808 5.631 14.648 18.47 15.178 30.667c-3.39 7.107-16.739-16.705-2.973-15.602c-10.86-17.642-12.013-6.377-21.038 1.819c-2.099.595 23.02 11.66 7.256 17.133c13.869 2.14 14.263 14.276 17.087 21.956c8.335 8.682 6.63-9.587 16.603.846c-6.311-9.295-33.431-26.19-11.596-20.771c-.117-9.356-3.95-16.9 2.74-16.717c6.625-11.997-6.938 29.58 7.995 14.333c4.133-1.805 5.157-12.012 12.587.964c10.792 10.616 3.898 18.309-11.325 8.588c2.724 9.24 20.364 12.541 17.05 26.99c3.514 12.706 8.43 8.026 12.716 7.291c3.362 12.347 5.271 3.268 5.43-2.607c15.395 3.295 11.789 12.395 16.606 18.752c10.607 4.788-15.183-32.454 3.028-11.198c19.16 17.298 7.29 23.261-10.009 21.748c14.388 1.178 14.69 13.994 28.005 14.165c11.572 5.967 20.693 28.354-.704 18.913c-12.065-7.486-33.558-14.714-12.108-1.987c5.077 3.214 35.545 14.663 54.652 26.178c10.579 7.232 19.582 20.943 24.765 23.156c-11.493 5.49-34.634-4.383-17.45-7.409c-10.719-1.952-22.402-7.45-12.508 5.982c8.508 7.779 30.928 6.517 34.907 7.342c-3.373 7.433-9.162 8.024.139 8.6c-10.376 5.53 3.327 6.386 4.288 9.545m-22.337-68.123c-6.824-10.76-5.192 1.606 1.12 8.207c10.09 12 2.379-6.802-1.12-8.207m-37.672-55.658s1.682-11.35-3.507-12.605c-5.19-1.256-2.33.834 1.822 9.819c.99 2.143 1.602 2.886 1.594 2.837m-56.712-43.072c-5.155-11.545 2.453-5.276 1.345-10.2c-2.38-4.95-25.508-31.236-14.973-11.391c9.534 23.673-5.998-2.972-7.618-11.038c-1.791 4.953 3.772 21.176 7.135 26.705c8.561 13.185 4.71-7.22 14.11 5.924m-47.363-45.524c-13.386-11.26 4.127 5.55-1.309 5.338c-14.107-10.303-8.34-3.004-.372 4.914c8.632 12.827 15.757-7.686 1.681-10.252m6.873 1.936c25.322 6.957-26.949-24.436-3.785-3.822zm70.076 29.93c-7.268.147 3.014-15.827-6.73-12.675c-3.419-24.828-10.786 11.474-.762 17.484c3.095 8.893 6.346 5.27 7.492-4.81m-59.785-35.319c33.717 15.562-24.413-25.739-9.532-5.207c1.769 3.957 6.008 4.286 9.532 5.207m3.864-8.066c25.537 10.556-2.272-6.869-11.116-4.977c2.23 3.263 8.278 1.836 11.116 4.977m3.42-9.555c8.29-1.656-1.1-4.314-6.054-8.25c-11.465-17.223 1.705 1.39-1.898 6.677c4.771 4.69 20.99 13.075 7.951 1.573m58.647-26.721c-3.385 17.891-6.838 10.43-1.985-2.91c-1.161-17.12-11.565 10.484-6.967 18.587c7.602 12.109 15.204-29.758 8.952-15.677m10.109 213.016c13.167 3.379 13.1-2.048 1.2-3.66c-6.402-5.955-26.599-12.271-8.521-.74c1.197 3.033 4.98 2.963 7.32 4.4m-46.75-31.05c7.254 5.409 27.323 15.33 10.334 2.058c5.728-6.654-10.963-10.197-5.426-14.648c-14.084-8.618-11.11-7.852-1.244-7.58c-16.925-7.566 2.444-7 1.532-10.877c-6.527-1.289-32.417-11.508-17.186.84c-15.484-7.895-3.69 2.94-8.37 1.795c-15.833-4.317 14.1 12.059-2.514 7.994c9.083 7.198 24.449 18.438 3.84 7.617c-2.716 3.909 14.748 9.834 19.034 12.8m164.515 96.479c6.945-6.73.284 10.72 11.508-1.648c.121-8.853-.346-14.082-12.898-3.328c-3.46 1.92-5.005 10.079 1.39 4.976m-113.73-73.02c7.725 6.863 35.482 5.036 9.383.845c-3.866-5.715-24.545-4.34-9.383-.844M59.833 293.379c-11.223-16.012-6.976-23.21-17.799-36.283c-2.048-9.998-18.565-32.685-8.543-8.65c9.18 14.057 11.909 35.822 26.342 44.933M392.335 451.41c10.919-2.213 35.8 5.558 39.821-2.895c-13.259-.321-45.873-9.354-47.417 2.156zm-371.8-275.906c-1.99-11.407-4.396-31.43 14.638-24.664c-25.407 5.044 17.584 31.579 12.155 10.629c10.683.523 20.899-6.314 15.293 4.062c21.048-2.325 35.641-20.578 55.973-18.02c15.838-2.096 33.154-3.685 50.22-10.06c14.033-1.011 27.541-16.12 19.85-25.074c-19.136-1.619-39.168.775-60.318 4.98c-23.438 4.872-44.727 14.129-68.375 18.102c-23.05 3.096 4.637 8.531-1.966 9.742c-12.028 4.173 14.344 6.988-1.56 11.387c-9.82-1.867-20.044-5.242-15.849-15.592c-22.08 2.865-41.481 12.029-24.037 34.498zm59.011-24.563c19.25 13.16-3.308-21.605-8.485-2.533c2.405-.592 6.186.812 8.485 2.533m5.48-8.819c18.248 1.836-2.796-11.586-3.47-3.159zm30.583-11.176c26.935-5.127-9.864-8.558-17.755.925c5 2.28 10.535-6.36 17.755-.925m46.2-9.176c17.028-2.615 2.677-10.431-2.305 2.623c1.806 4.116 2.675-1.234 2.305-2.623m-91.595 69.56c9.624-.66 15.057-10.616-1.862-10.044c-26.221-2.714 23.135 8.979-3.363 5.635c-3.561 2.358 5.018 5.062 5.225 4.41M56.737 115.31c17.176-5.843 38.86-10.806 48.527 3.286c-7.272-10.259-3.083-20.122 4.712-5.598c11.024 14.696 14.979-3.775 9.372-11.613c5.335 8.437 25.138 26.808 5.47.642c13.033-15.677-26.094 2.053-34.987 1.874c-4.28 1.92-44.177 10.175-33.094 11.41m10.066-19.278c9.796-7.394 33.88 4.398 18.425-7.348c-1.51-1.335-33.844 8.907-18.425 7.348m35.713 1.474c11.464.293-4.946-15.401 8.716-8.29c-2.244-7.33-15.906-8.702-22.585-11.63c-3.778 6.701 7.69 20.01 13.869 19.92m-42.109-50.25C47.4 30.274 84.872 50.11 71.655 32.33c-11.124-8.858-21.813 9.969-11.248 14.926m166.945 89.921c5.967-10.576-24.633-14.257-4.02-3.748c1.898.634 1.469 4.48 4.02 3.748"/>
                        </svg>
                        <p className="hidden font-medium text-neutral-600 dark:text-neutral-400 text-xs leading-none sm:block">Flask</p>
                    </div>
                </div>
                <div className="flex absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex-col items-center justify-center p-2">
                    <p className="text-xs sm:text-sm font-medium text-center px-2 mb-2">Proficiency:</p>
                    <div className="w-full flex border border-neutral-700 rounded overflow-hidden h-[25%]">
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700"></div>
                    </div>
                </div>
            </button>

            {/* Spring Boot */}
            <button 
                type="button" 
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-100 perspective transition-transform duration-500 transform-style-preserve-3d ${flippedCards['SpringBoot'] ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip('SpringBoot')}
            >
                <div className="flex flex-col items-center gap-3 backface-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128" className="sm:group-hover:-translate-y-1 size-6 transition-all duration-300 group-hover:text-[#06d417]">
                            <path fill="currentColor" d="M116.452 6.643a59.104 59.104 0 0 1-6.837 12.136A64.249 64.249 0 0 0 64.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0 0 19.945 46.562l2.368 2.1a64.22 64.22 0 0 0 41.358 15.122c33.487 0 61.637-26.24 64.021-59.683c1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 0 1-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502c0-3.017 2.485-5.501 5.487-5.501c1.25 0 2.485.433 3.452 1.234c2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02c0 0-3.852.234-7.721.867c0 0 1.45-.617 3.335-1.334c15.226-5.301 22.43-6.335 31.685-11.086c17.427-8.869 34.654-28.274 38.24-48.463c-6.637 19.422-26.75 36.11-45.077 42.895c-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78c12.291-4.735 24.048-2.134 37.323-5.302c14.175-3.367 30.568-14.004 37.238-27.874c7.471 22.19 16.46 56.932.35 78.405z"/>
                        </svg>
                        <p className="hidden font-medium text-neutral-600 dark:text-neutral-400 text-xs leading-none sm:block">Spring Boot</p>
                </div>
                <div className="flex absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex-col items-center justify-center p-2">
                    <p className="text-xs sm:text-sm font-medium text-center px-2 mb-2">Proficiency:</p>
                    <div className="w-full flex border border-neutral-700 rounded overflow-hidden h-[25%]">
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700"></div>
                    </div>
                </div>
            </button>

            {/* Java */}
            <button 
                type="button" 
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-100 perspective transition-transform duration-500 transform-style-preserve-3d ${flippedCards['Java'] ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip('Java')}
            >
                <div className="flex flex-col items-center gap-3 backface-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="sm:group-hover:-translate-y-1 size-6 transition-all duration-300">
                            <path fill="currentColor" d="M11.803 24.745s-1.224.713.869.952c2.536.292 3.833.251 6.625-.281c0 0 .733.464 1.76.865c-6.265 2.683-14.177-.161-9.255-1.536zm-.767-3.5s-1.375 1.015.719 1.228c2.715.281 4.849.308 8.552-.405c0 0 .511.516 1.319.801c-7.573 2.213-16.011.172-10.589-1.624zm6.453-5.942c1.541 1.776-.407 3.375-.407 3.375s3.917-2.027 2.12-4.557c-1.681-2.365-2.973-3.536 4.005-7.584c0 0-10.953 2.735-5.719 8.767zm8.282 12.036s.907.744-.995 1.323c-3.615 1.093-15.047 1.421-18.224.041c-1.14-.495 1-1.187 1.672-1.328c.703-.156 1.104-.124 1.104-.124c-1.271-.896-8.208 1.755-3.525 2.515c12.776 2.073 23.285-.932 19.968-2.427m-13.38-9.724s-5.817 1.38-2.063 1.88c1.589.213 4.751.167 7.699-.083c2.405-.204 4.823-.636 4.823-.636s-.849.364-1.464.787c-5.907 1.552-17.317.828-14.031-.76c2.776-1.339 5.036-1.188 5.036-1.188m10.432 5.833c6-3.125 3.224-6.12 1.292-5.713c-.475.093-.688.183-.688.183s.172-.277.511-.396c3.833-1.349 6.781 3.973-1.235 6.083c0-.005.095-.083.12-.156zM19.203 0s3.324 3.323-3.156 8.437c-5.192 4.104-1.183 6.443 0 9.115c-3.031-2.735-5.255-5.14-3.765-7.38C14.474 6.875 20.542 5.281 19.203 0m-6.224 31.901c5.761.364 14.609-.208 14.824-2.932c0 0-.407 1.031-4.767 1.853c-4.916.927-10.984.817-14.583.224c0 0 .74.609 4.525.855z"/>
                        </svg>
                        <p className="hidden font-medium text-neutral-600 dark:text-neutral-400 text-xs leading-none sm:block">Java</p>
                </div>
                <div className="flex absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex-col items-center justify-center p-2">
                    <p className="text-xs sm:text-sm font-medium text-center px-2 mb-2">Proficiency:</p>
                    <div className="w-full flex border border-neutral-700 rounded overflow-hidden h-[25%]">
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700 bg-blue-500 animate-pulse"></div>
                        <div className="flex-1 border border-neutral-700"></div>
                    </div>
                </div>
            </button>

        </div>
    )
}