import { Title, Meta } from "solid-meta";
import { Link } from 'solid-app-router';
import { csvString2json } from "../lib/csv";
import { For } from "solid-js";

const response = await fetch("./assets/jobs.csv");
const data = await response.text();
const solidJobs = csvString2json(data);

const Jobs = () => {
    const pageTitle = 'Browse SolidJS Jobs';
    const pageDescription = 'Find all SolidJS jobs in one place';
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
                    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">SolidJS Jobs</h1>
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
                                                <th class="px-6 py-2 text-xs text-gray-500"> Company </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Job Title </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Job Description </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Featured </th>
                                                <th class="px-6 py-2 text-xs text-gray-500"> Apply </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-300">
                                            <For each={solidJobs}>{(solidJob, i) =>
                                                <tr class="whitespace-nowrap">
                                                    <td class="px-6 py-4 text-sm text-gray-500">
                                                        {i() + 1}
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm text-sm text-gray-500">
                                                        {solidJob['Created At']}
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm text-sm text-gray-500">
                                                        {solidJob['Company']}
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm">
                                                        <div class="text-sm text-gray-900">
                                                            {solidJob['Job Title aka Designation']}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 max-w-sm">
                                                        <div class="has-tooltip truncate text-sm text-gray-500">
                                                            <span class='tooltip w-auto whitespace-pre-line rounded shadow-lg p-1 bg-white text-blue-500 border-1 border-blue-500 -mt-8'>{solidJob['Job Description']}</span>
                                                            {solidJob['Job Description']}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {solidJob['Is Featured']}
                                                        <span class="px-4 py-1 text-xs text-red-500 bg-red-200 rounded-full">Featured</span>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href={solidJob['Job View or Apply Url']} target="_blank" class="px-4 py-1 text-xs text-white font-bold bg-blue-500 rounded-full hover:underline">Apply</a>
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
                        <p class="text-gray-800 font-bold">Looking for a SolidJS developer?  <a class="mx-auto lg:mx-0 hover:underline bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="https://github.com/rrjanbiah/solidjs-jobs">Post a Job</a></p>
                    </div>


                </div></section>


        </>
    );
};

export default Jobs;