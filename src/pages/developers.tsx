import { Title, Meta } from "solid-meta";
import { Link } from 'solid-app-router';
import { csvString2json } from "../lib/csv";
import { For } from "solid-js";

const response = await fetch("./assets/developers.csv");
const data = await response.text();
const solidDevelopers = csvString2json(data);


const Developers = () => {
    const pageTitle = 'SolidJS Developers Listing';
    const pageDescription = 'List of SolidJS developers/freelancers looking to work in SolidJS';
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


            <section class="bg-white border-b py-8">
                <div class="container max-w-5xl mx-auto m-8">
                    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">SolidJS Developers</h1>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    <div class="container flex justify-center mx-auto">
                        <div class="flex flex-col">
                            <div class="w-full">
                                <div class="border-b border-gray-200 shadow">
                                    <table class="divide-y divide-gray-300 ">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-2 text-xs text-gray-500"> No. </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Created At </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> GitHub </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Country </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Bio </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Skills </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Featured </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Twitter/ Contact </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-300">
                                            <For each={solidDevelopers}>{(solidDeveloper, i) =>
                                                <tr class="whitespace-nowrap">
                                                    <td class="px-6 py-4 text-sm text-gray-500">
                                                        {i() + 1}
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm text-sm text-gray-500">
                                                        {solidDeveloper['Created At']}
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm text-sm text-gray-500">
                                                        <a href={`https://github.com/${solidDeveloper['GitHub Handle']}`} target="_blank" class="ml-3 text-gray-500 hover:text-blue-500"><img src={`https://github.com/${solidDeveloper['GitHub Handle']}.png?size=40`} />{solidDeveloper['GitHub Handle']}</a>
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm">
                                                        <div class="text-sm text-gray-900">
                                                            {solidDeveloper['Country']}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm">
                                                        <div class="has-tooltip truncate text-sm text-gray-900">
                                                            <span class='tooltip w-auto whitespace-pre-line rounded shadow-lg p-1 bg-white text-blue-500 border-1 border-blue-500 -mt-8'>{solidDeveloper['Bio']}</span>
                                                            {solidDeveloper['Bio']}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm">
                                                        <div class="has-tooltip truncate text-sm text-gray-500">
                                                            <span class='tooltip w-auto whitespace-pre-line rounded shadow-lg p-1 bg-white text-blue-500 border-1 border-blue-500 -mt-8'>{solidDeveloper['Skills']}</span>
                                                            {solidDeveloper['Skills']}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {solidDeveloper['Is Featured']}
                                                        <span class="px-4 py-1 text-xs text-red-500 bg-red-200 rounded-full">Featured</span>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href={`https://twitter.com/${solidDeveloper['Twitter Handle']}`} class="ml-3 text-gray-500 hover:text-blue-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 inline" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a>
                                                    </td>
                                                </tr>

                                            }
                                            </For>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container flex justify-center mx-auto pt-36">
                        <p class="text-gray-800 font-bold">Looking for a SolidJS job?  <a class="mx-auto lg:mx-0 hover:underline bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="https://github.com/rrjanbiah/solidjs-jobs">List your profile</a></p>
                    </div>


                </div></section>


        </>
    );
};

export default Developers;