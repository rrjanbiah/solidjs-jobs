import { Title, Meta } from "solid-meta";
import { Link } from 'solid-app-router';

const Home = () => {
    const pageTitle = 'SolidJS Jobs Listing & SolidJS Developers/Freelancers Listing';
    const pageDescription = 'Find all SolidJS jobs in one place and also find SolidJS talents/developers/freelancers';
    return (
        <>
            <Meta name="robots" content="index, follow" />

            <Title>{pageTitle}</Title>
            <Meta name="title" content={pageTitle} />
            <Meta name="description" content={pageDescription} />

            <Meta property="og:type" content="website" />
            <Meta property="og:url" content="#" />
            <Meta property="og:title" content={pageTitle} />
            <Meta property="og:description" content={pageDescription} />
            <Meta property="og:image" content="cover.png" />

            <Meta property="twitter:card" content="summary_large_image" />
            <Meta property="twitter:url" content="#" />
            <Meta property="twitter:title" content={pageTitle} />
            <Meta property="twitter:description" content={pageDescription} />
            <Meta property="twitter:image" content="cover.png" />


            <div class="pt-24">
                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* <!--Left Col--> */}
                    <div class="flex flex-col w-full md:w-3/5 justify-center text-center md:text-left">
                        <p class="tracking-loose w-full">Searching for a SolidJS job or developers?</p>
                        <h1 class="my-4 text-5xl font-bold leading-tight">SolidJS jobs meet Solid developers and vice versa</h1>
                        <p class="leading-normal text-2xl mb-8">Community hub to find SolidJS jobs and
                            talents/developers/freelancers</p>

                        <Link href="/jobs" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Search Jobs...</Link>
                        <Link href="/developers" class="mx-auto lg:mx-0 hover:underline bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Find & Hire Developers</Link>

                    </div>
                    {/* <!--Right Col--> */}
                    <div class="w-full md:w-2/5 py-6 text-center">
                        <svg class="w-full md:w-4/5 z-50" data-name="Layer 1" viewBox="0 0 833.22 633.11"
                            xmlns="http://www.w3.org/2000/svg">
                            <path transform="translate(-183.39 -133.44)"
                                d="m954.31 708.91c-27.3 20.79-60.56 41.85-93.26 51.78a132.15 132.15 0 0 1-29 5.61 87.682 87.682 0 0 1-27.45-2.1299c-23.6-5.8701-45.49-16.15-66.67-28.16-6.92-3.93-13.76-8.04-20.56-12.24-11.1-6.86-22.09-13.96-33.11-20.89-1.65-1.05-3.29-2.08-4.94-3.1h-0.01q-3.99-2.505-8-4.94c-0.47-0.29-0.94-0.57-1.42-0.86q-7.5751-4.59-15.41-8.97c-0.64-0.35-1.28-0.71-1.92-1.06a337.76 337.76 0 0 0-31.12-15.23c-6.98-2.94-14.05-5.59-21.19-7.85h-0.01c-2.73-0.86-5.47-1.67-8.22-2.41a172.03 172.03 0 0 0-25.14-4.92 137.46 137.46 0 0 0-35.21 0.28c-0.79 0.11-1.57 0.22-2.36 0.35-31.6 5.06-60.44 22.12-92.18 26.14-1.03 0.13-2.05 0.25-3.08 0.34-0.44 0.04-0.88 0.09-1.32 0.12a126.18 126.18 0 0 1-27.68-0.68c-25.63-3.38-50.59-13.87-73.06-27.09-52.53-30.91-95.13-78.42-121.03-133.44a297.45 297.45 0 0 1-11.83-28.93 278.47 278.47 0 0 1-15.67-84.85c-2.43-100.36 54.6-201.05 144.14-246.44 89.55-45.39 207.35-30.38 279.57 39.35 43.81 42.3 69.16 99.62 102.13 150.83 32.97 51.2 79.83 100.11 140.27 107.57 30.79 3.8 63.01-3.55 92.52 6.01 16.34 5.3 30.28 15.44 41.51 28.36a127.19 127.19 0 0 1 18.78 29 141.93 141.93 0 0 1 8.73 23.54c0.41 1.49 0.79 2.98 1.16 4.47 14.7 60.04-8.7901 122.98-57.96 160.44z"
                                fill="#f2f2f2" />
                            <rect x="159.66" y="466.77" width="145" height="51" rx="25.5" fill="#3f3d56" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m434.05 638.22v42.43a125.55 125.55 0 0 1-29-0.56v-41.87z" fill="#3f3d56" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m531.67 653.82c-0.79 0.11-1.57 0.22-2.36 0.35-31.6 5.06-60.44 22.12-92.18 26.14-1.03 0.13-2.05 0.25-3.08 0.34-0.44 0.04-0.88 0.09-1.32 0.12-7.75-7.59-15.5-15.67-22.78-24.04-3.95-4.53-7.77-9.15-11.36-13.83-9.32-12.08-17.22-24.5-22.44-36.7 0.53-5.85-3.11-19.38-4.85-29.74l-0.01-0.01c-0.74-4.35-1.14-8.13-0.77-10.56 2.1201-14.02 13.57-12.41 17.09-26.15a77.5 77.5 0 0 1 10.11-7.11c0.59-0.35 1.19-0.7 1.81-1.05l38.2-26.4 14.6 14.32 22.22 21.8 24.08 23.61-20.44 20.65s17.08 19.69 37.05 45.94c5.36 7.0499 10.93 14.58 16.43 22.32z"
                                fill="#2f2e41" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m861.05 638.22v122.47a132.15 132.15 0 0 1-29 5.61v-128.08z" fill="#3f3d56" />
                            <rect x="595.66" y="494.77" width="145" height="51" rx="25.5" fill="#3f3d56" />
                            <path transform="translate(-183.39 -133.44)"
                                d="M669.89371,693.97718q-7.57508-4.59-15.41-8.97c-.64-.35-1.28-.71-1.92-1.06l3.44-1.47,9.28-3.99.09-.04.1.34Z"
                                fill="#ffb6b6" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m684.26 702.88c-1.65-1.05-3.29-2.08-4.94-3.1h-0.01q-3.99-2.505-8-4.94c-0.47-0.29-0.94-0.57-1.42-0.86q-7.5751-4.59-15.41-8.97c-0.64-0.35-1.28-0.71-1.92-1.06a337.76 337.76 0 0 0-31.12-15.23c-6.98-2.94-14.05-5.59-21.19-7.85h-0.01l-5.61-9.39-25.25-42.29-5.55-9.29s-18.93 5.6-45.72 10.97c-9.75 1.96-20.53 3.88-31.84 5.5-12.09 1.72-24.77 3.09-37.37 3.75-6.01 0.32-12 0.48-17.9 0.43-15.25-0.1-29.9-1.53-42.73-4.93-4.28-4.02-17.18-9.49-26.42-14.5h-0.01c-3.88-2.1-7.1-4.11-8.79-5.9-9.74-10.3-1.42-18.33-10.08-29.57a78.018 78.018 0 0 1 0.63-12.34c0.09-0.68 0.18-1.37 0.29-2.07l2.73-46.36 20.28-2.68 64.29-8.5 3.68 28.82s26.03-1.32 59.01-0.88c52.97 0.72 123.85 6 133.45 28.66 0.9 2.13 1.8 4.28 2.7 6.43q3.21 7.7099 6.36 15.5c7.61 18.8 14.87 37.78 21.5 55.72 4.12 11.16 8 21.92 11.57 31.99 2.8701 8.1 5.53 15.76 7.96 22.81 2.22 6.44 4.23 12.37 6.02 17.69 0.27997 0.83001 0.54999 1.65 0.82001 2.44z"
                                fill="#2f2e41" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m497.71 421.99-64.055-54.401 41.675-42.177 29.075 47.623 107.77 21.367a20.9 20.9 0 1 1-2.9696 30.678z"
                                fill="#a0616a" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m377.04 296.09c-7.4027 24.083 63.1 81.52 63.1 81.52 0.78339-5.7816 40.756 44.073 43.475 39.558 7.7291-12.832 16.234-44.552 25.157-48.606 5.1028-2.3185-24.171-34.543-24.171-34.543s-14.933-19.756-34.649-44.794a53.412 53.412 0 0 0-47.084-20.961s-18.426 3.744-25.828 27.827z"
                                fill="#3f3d56" />
                            <circle cx="224.83" cy="66.009" r="43.324" fill="#a0616a" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m429.88 271.41c9.3336 5.5489 14.917 15.744 18.122 26.119a247.52 247.52 0 0 1 10.636 59.137l3.3853 60.089 41.926 127.95c-36.336 30.746-172.92 6.9877-172.92 6.9877s-4.1926-1.3974 0-5.5902 8.2742-0.47818 4.0816-4.6709-1.3024 0.47819 0.0952-3.7145 0-1.3974-1.3976-2.7951 10.819-13.976 10.819-13.976l-11.18-73.443-13.975-148.14c16.771-20.963 50.498-33.321 50.498-33.321l8.7148-15.687 43.574 3.4859z"
                                fill="#3f3d56" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m443.93 176.44a20.078 20.078 0 0 1 7.1327 10.02 141.02 141.02 0 0 0 0.09279-19.659c-0.51064-4.6008-3.7497-5.6357-7.5004-6.8349-3.3872-1.0834-7.2178-2.3072-8.2484-6.7736-13.619-13.248-37.326-12.58-53.55-7.9591-8.9276 2.543-14.065 5.8102-14.524 7.7242l-0.09529 0.394-0.36256 0.18128c-6.8817 3.4408-8.2212 14.306-8.1327 22.815 0.16765 16.031 5.7029 34.239 8.8212 35.718 0.1651 0.07829 0.20679 0.04764 0.27828-0.0119 4.6953-3.7523 10.424 0.28515 12.941 2.48a45.059 45.059 0 0 1 40.346-38.219 70.703 70.703 0 0 0 9.7242-1.6306 20.472 20.472 0 0 1 4.9676-0.6519 14.137 14.137 0 0 1 8.1098 2.4084z"
                                fill="#2f2e41" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m389.34 487.26-13.253-6.7874a3.6323 3.6323 0 0 1 3.2764-6.3973l13.253 6.7874a3.6323 3.6323 0 0 1-3.2764 6.3973z"
                                fill="#536dfe" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m344.74 469.08-21.801-81.162 58.259-11.028-3.1329 55.709 76.547 78.818a20.9 20.9 0 1 1-19.875 23.558z"
                                fill="#a0616a" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m316.97 296.92c-19.775 15.612 5.6063 102.94 5.6063 102.94 3.9297-4.3126 8.4962 59.425 13.299 57.255 13.651-6.1681 38.673-27.438 48.319-25.704 5.5165 0.99153-0.26308-42.159-0.26308-42.159s-1.063-24.742-3.0609-56.548a53.412 53.412 0 0 0-26.836-44.001s-17.29-7.3881-37.065 8.2233z"
                                fill="#3f3d56" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m1002.4 520.46-791.42-0.9a297.45 297.45 0 0 1-11.83-28.93l784.47 0.83a127.19 127.19 0 0 1 18.78 29z"
                                fill="#3f3d56" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m750.31 730.28q-6.135 2.97-12.38 5.73c-6.92-3.93-13.76-8.04-20.56-12.24l25.22-11.08z"
                                fill="#ffb6b6" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m934.19 592.48q-6.1501 8.25-12.69 16.17-6.03 7.305-12.38 14.33c-1.75 1.94-3.52 3.87-5.33 5.78q-4.995 5.355-10.21 10.53c-6.26 1.97-18.94 5.44-32.53 8.68-9.89 2.35-20.26 4.58-29 6a104.49 104.49 0 0 1-14.81 1.58c-5.9 0.05-11.89-0.11-17.9-0.43-6.78-0.36-13.57-0.92-20.28-1.64-17.45-1.83-34.35-4.68-48.93-7.61-5.34-1.06-10.36-2.14-14.98-3.19-8.75-1.97-16.07-3.81-21.37-5.21-5.97-1.56-9.37-2.57-9.37-2.57l-14.95 25.04-7.7599 12.99-5.7 9.55-1.52 2.53c-0.64-0.35-1.28-0.71-1.92-1.06a337.76 337.76 0 0 0-31.12-15.23c-6.98-2.94-14.05-5.59-21.19-7.85h-0.01c-2.73-0.86-5.47-1.67-8.22-2.41q1.2901-3.465 2.61-6.98 2.4599-6.555 5.02-13.23c3.69-9.64 7.51-19.42 11.44-29.15 3.22-7.99 6.5-15.95 9.82-23.8 1.53-3.62 4.64-6.8 8.99-9.59a52.323 52.323 0 0 1 6.49-3.48c12.45-5.67 30.79-9.36 51-11.73 1.67-0.19 3.35-0.38 5.04-0.56 16.73-1.76 34.48-2.67 51.08-3.09 8.31-0.21 16.33-0.29 23.79-0.3q3.615 0 7.03 0.02h0.01c6.15 0.03 11.81 0.12 16.79 0.22 0.97 0.02 1.91 0.05 2.83 0.07h0.01c0.62 0.01 1.23 0.03 1.83 0.04 10.89 0.28 17.57 0.62 17.57 0.62l2.59-20.32 0.53-4.1 0.5-3.9v-0.01l0.06-0.49 0.41-0.01 7.2-0.14 60.52-1.18 33.06-0.65-5.24 22.46-8.65 37.06c0.87981 5.86 30.14 1.27 29.84 6.24z"
                                fill="#2f2e41" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m757.77 726.58c-2.47 1.26-4.96 2.5-7.46 3.7q-6.135 2.97-12.38 5.73c-6.92-3.93-13.76-8.04-20.56-12.24-11.1-6.86-22.09-13.96-33.11-20.89-1.65-1.05-3.29-2.08-4.94-3.1h-0.01c-4.54-6.74-9.17-13.76-13.84-20.99-0.07-0.1-0.13-0.2-0.19-0.30005q-1.7999-2.7599-3.58-5.56c-7.47-11.7-14.98-23.9-22.27-36.36l18.46-8.62 34.32-16.02 5.92-2.7599 17.02 33.51 15.18 29.89 3.3799 6.65z"
                                fill="#2f2e41" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m762.95 565.69 87.501-84.384 24.252-68.67-35.773-15.555c-18.375 17.601-38.237 72.424-38.237 72.424l-60.213 76.604c-0.4692 0.1607-0.93718 0.33133-1.3993 0.53544a17.231 17.231 0 1 0 23.869 19.045z"
                                fill="#ffb8b8" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m828.86 404.75 45.375 14.405 0.171-0.02847c16.889-2.829 30.903-30.412 39.684-53.054a31.596 31.596 0 0 0-16.087-40.025 31.666 31.666 0 0 0-33.165 4.1844l-23.301 19.039z"
                                fill="#536dfe" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m934.01 593.49 0.26505-0.35223c14.157-18.776-5.2058-65.273-8.1331-72.017l13.164-3.8992-2.2944-25.064-1.1051-11.176 10.235-9.7197 0.03447-0.24807 7.0388-50.092 9.2099-33.154a73.285 73.285 0 0 0-18.961-71.535l-18.827-18.693-22.556-35.306-37.819-0.97639-13.6 24.159a55.141 55.141 0 0 0-44.103 55.179l1.2804 64.316-13.57 79.687-0.3807 14.475-13.319 14.055 2.4624 14.21-9.963 3.9686-4.8754 20.191c-1.862 2.3296-14.156 17.87-14.268 22.202-0.01679 0.65043 0.44707 1.2915 1.4594 2.0156 7.958 5.6937 52.437 18.031 72.456 10.614 21.323-7.894 104.89 6.9318 105.74 7.0826z"
                                fill="#536dfe" />
                            <circle cx="696.48" cy="66.885" r="50.104" fill="#ffb8b8" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m873.76 251.1a136.27 136.27 0 0 0 23.181-1.62c7.5992-1.5453 24.599-14.003 29.339-21.5 3.5209-5.5699 5.7724-14.268 7.0415-20.583a60.914 60.914 0 0 0-10.654-48.358 19.245 19.245 0 0 0-7.7732-6.6344c-0.27844-0.10888-0.565-0.20537-0.85454-0.28786a23.745 23.745 0 0 1-11.812-7.3089 19.586 19.586 0 0 0-1.9636-2.0209 29.248 29.248 0 0 0-12.203-6.1273c-7.2539-1.9414-17.752-0.01431-31.202 5.7333-6.7572 2.8877-14.147 1.8427-19.832 0.60946a1.8601 1.8601 0 0 0-1.7514 0.6 13.132 13.132 0 0 1-8.9248 3.5577c-2.032 0.08923-4.1639 2.9028-6.7408 6.5717-0.5847 0.83285-1.267 1.8049-1.7591 2.3961l-0.06607-1.1358-1.1493 1.2671a15.935 15.935 0 0 0 7.1942 25.961 31.076 31.076 0 0 0 6.2501 0.996c1.2792 0.11508 2.6023 0.23413 3.8703 0.45413a24.025 24.025 0 0 1 17.853 15.59 6.2828 6.2828 0 0 0 9.483 3.0503 10.381 10.381 0 0 1 9.459-1.7224 6.8912 6.8912 0 0 1 3.046 3.455 8.9803 8.9803 0 0 0 3.4077 3.9757c5.1497 2.6551 5.5046 14.417 3.6551 24.222-1.7828 9.4512-5.307 16.288-8.57 16.626-2.512 0.25986-2.7993 0.43831-2.9811 0.88257l-0.16246 0.3977 0.28218 0.372a10.261 10.261 0 0 0 4.3377 0.57992z"
                                fill="#2f2e41" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m841.3 389.6-19.319-38.516c-28.041 1.9154-83.695 34.337-83.695 34.337l-105.3 22.326a19.023 19.023 0 1 0 5.1864 32.508l133.95-9.6013z"
                                fill="#ffb8b8" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m833.51 395.93 50.454-37.495 8.8873-32.027a34.982 34.982 0 0 0-10.521-35.394 34.899 34.899 0 0 0-47.624 1.5365c-18.987 18.951-40.642 45.39-35.99 63.723l0.04709 0.18584z"
                                fill="#536dfe" />
                            <rect x="452.66" y="362.77" width="135" height="18" fill="#fff" />
                            <rect x="107.66" y="362.77" width="135" height="18" fill="#fff" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m441.82 409.66v85.704a4.1223 4.1223 0 0 0 4.1191 4.1191h127a4.1223 4.1223 0 0 0 4.1191-4.1191v-85.704a4.1243 4.1243 0 0 0-4.1191-4.1145h-127a4.1243 4.1243 0 0 0-4.1191 4.1145z"
                                fill="#3f3d56" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m444.8 410.72v83.58a2.2052 2.2052 0 0 0 2.2014 2.2014h124.89a2.2052 2.2052 0 0 0 2.2014-2.2014v-83.58a2.2062 2.2062 0 0 0-2.2014-2.206h-124.89a2.2062 2.2062 0 0 0-2.2014 2.206z"
                                fill="#536dfe" />
                            <path transform="translate(-183.39 -133.44)"
                                d="m439.16 512.07a2.4699 2.4699 0 0 0 1.9435 0.92983h135.99a2.5024 2.5024 0 0 0 2.446-3.0157l-2.111-10.027a2.5069 2.5069 0 0 0-1.5581-1.8178 2.4247 2.4247 0 0 0-0.888-0.1675h-131.78a2.4246 2.4246 0 0 0-0.888 0.1675 2.5067 2.5067 0 0 0-1.5581 1.8178l-2.111 10.027a2.5005 2.5005 0 0 0 0.51101 2.0859z"
                                fill="#2f2e41" />
                            <rect transform="translate(960.46 868.63) rotate(180)" x="569.83" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(943.71 868.63) rotate(180)" x="561.45" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(926.95 868.63) rotate(180)" x="553.08" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(910.2 868.63) rotate(180)" x="544.7" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(893.45 868.63) rotate(180)" x="536.32" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(876.69 868.63) rotate(180)" x="527.95" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(859.94 868.63) rotate(180)" x="519.57" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(843.18 868.63) rotate(180)" x="511.19" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(826.43 868.63) rotate(180)" x="502.82" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(809.68 868.63) rotate(180)" x="494.44" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(792.92 868.63) rotate(180)" x="486.06" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(776.17 868.63) rotate(180)" x="477.68" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(759.42 868.63) rotate(180)" x="469.31" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(742.66 868.63) rotate(180)" x="460.93" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(725.91 868.63) rotate(180)" x="452.55" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(709.15 868.63) rotate(180)" x="444.18" y="499.78" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(960.66 877.01) rotate(180)" x="569.93" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(943.91 877.01) rotate(180)" x="561.55" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(927.15 877.01) rotate(180)" x="553.18" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(910.4 877.01) rotate(180)" x="544.8" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(893.64 877.01) rotate(180)" x="536.42" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(876.89 877.01) rotate(180)" x="528.05" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(860.14 877.01) rotate(180)" x="519.67" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(843.38 877.01) rotate(180)" x="511.29" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(826.63 877.01) rotate(180)" x="502.91" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(809.87 877.01) rotate(180)" x="494.54" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(793.12 877.01) rotate(180)" x="486.16" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(776.37 877.01) rotate(180)" x="477.78" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(759.61 877.01) rotate(180)" x="469.41" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(742.86 877.01) rotate(180)" x="461.03" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(726.11 877.01) rotate(180)" x="452.65" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(709.35 877.01) rotate(180)" x="444.28" y="503.97" width="4.1885"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                            <rect transform="translate(850.92 887.06) rotate(180)" x="500.4" y="509" width="33.508"
                                height="2.5131" rx=".48819" fill="#3f3d56" />
                        </svg>
                    </div>
                </div>
            </div>


            <div class="relative">
                <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path
                                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                opacity="0.100000001"></path>
                            <path
                                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                opacity="0.100000001"></path>
                            <path
                                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                id="Path-4" opacity="0.200000003"></path>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path
                                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>

            <section class="bg-white border-b py-8">
                <div class="container max-w-5xl mx-auto m-8">
                    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Why SolidJS Jobs?</h1>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-5/6 sm:w-1/2 p-6">
                            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">SolidJS is the fastest front-end framework</h3>
                            <p class="text-gray-600 mb-8">Based on the <a class="text-blue-600 hover:underline" href="https://github.com/krausest/js-framework-benchmark" target="_blank">js framework benchmark</a> project, SolidJS is faster when compared to its rivals. And, demand for SolidJS developers is on the rise.</p>
                            <p class="text-gray-600 mb-8">Remote jobs are the new norms. Finding talents and jobs across the world is somewhat challenging.</p>

                        </div>
                        <div class="w-full sm:w-1/2 p-6">
                            {/* <!-- https://www.potlabicons.com/ --> */}
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5/6 sm:h-64 mx-auto" fill="none">
                                <g style="animation:slide-out-tr 1s cubic-bezier(.47,0,.745,.715) infinite both"><path fill="#265BFF" d="M7.824 16.622l.287-.32-.642-.574-.287.321.642.573zM4.66 18.875a.43.43 0 10.642.573l-.642-.573zm2.523-2.826L4.66 18.875l.642.573 2.523-2.826-.642-.573z" /><path fill="#0A0A30" fill-rule="evenodd" d="M11.586 15.532l.692-3.729-3.574 1.265.557.476-1.922 2.249-.324.379.38.323 1.01.864.378.324.324-.38 1.922-2.248.557.477zm-3.165.53l1.51-1.769.254.216-1.512 1.768-.252-.216z" clip-rule="evenodd" /></g></svg>
                        </div>
                    </div>
                    <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <svg class="w-5/6 sm:h-64 mx-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <circle cx="12.735" cy="12" r="7" stroke="#0A0A30" stroke-width="1.5" /><circle cx="9.735" cy="10.277" r="1" fill="#0A0A30" /><circle cx="15.735" cy="10.277" r="1" fill="#0A0A30" /><path stroke="#265BFF" stroke-linecap="round" d="M15.735 14.147l-.049.04a4.631 4.631 0 01-5.951-.04" style="animation:happy 3s infinite linear" stroke-dasharray="100" /></svg>
                        </div>
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <div class="align-middle">
                                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">ReactJS Vs. SolidJS or ReactJS to SolidJS</h3>
                                <p class="text-gray-600 mb-8">Based on <a class="text-blue-600 hover:underline" href="https://trends.google.com/trends/explore?q=%2Fm%2F012l1vxv,solidjs" target="_blank">Google Trends</a>, React is still the popular front-end library.</p>
                                <p class="text-gray-600 mb-8">Some mission-critical projects such as <a class="text-blue-600 hover:underline" href="https://blog.asciinema.org/post/smaller-faster/" target="_blank">asciinema</a> have experienced an enormous performance by using SolidJS.</p>
                                <p class="text-gray-600 mb-8">Time to switch from React and other front-end libraries to SolidJS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="bg-white border-b py-8">
                <div class="container mx-auto flex flex-wrap pt-4 pb-12">
                    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Are you a client?</h1>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <p class="w-full text-gray-600 text-xs md:text-sm px-6">Post a job</p>
                                <div class="w-full font-bold text-xl text-gray-800 px-6">Remote or in-house</div>
                                <p class="text-gray-800 text-base px-6 mb-5">
                                    Post a job to SolidJS using GitHub
                                </p>
                            </a>
                        </div>
                        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div class="flex items-center justify-start">
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <p class="w-full text-gray-600 text-xs md:text-sm px-6">Choose developers</p>
                                <div class="w-full font-bold text-xl text-gray-800 px-6">Shortlist developers</div>
                                <p class="text-gray-800 text-base px-6 mb-5">
                                    Start your next Google or Facebook or Apple!
                                </p>
                            </a>
                        </div>
                        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div class="flex items-center justify-center">
                                <a href="https://github.com/rrjanbiah/solidjs-jobs" target="_blank"
                                    class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Post a job</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <p class="w-full text-gray-600 text-xs md:text-sm px-6">Questions?</p>
                                <div class="w-full font-bold text-xl text-gray-800 px-6">Still not clear?</div>
                                <p class="text-gray-800 text-base px-6 mb-5">
                                    Post your questions through GitHub or Twitter!
                                </p>
                            </a>
                        </div>
                        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div class="flex items-center justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;