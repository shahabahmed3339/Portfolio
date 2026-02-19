import { ArrowRightIcon } from "lucide-react";

type HeroSectionProps = {
    onContactClick: () => void;
    onDownloadClick: () => void;
    isDownloading: boolean;
}

export default function HeroSection({ onContactClick, onDownloadClick, isDownloading }: HeroSectionProps) {
    return (
        <main className="flex flex-col items-center pt-20 max-md:px-4">

            {!isDownloading && (
                <div className="mt-6 flex gap-4 mb-6">
                    {/* <a href="/assets/Shahab-Ahmed-Resume.pdf" download="Shahab-Ahmed-Resume.pdf"> */}
                    <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-lg" onClick={onDownloadClick}>
                        Resume
                        <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5 inline-flex" />
                    </button>
                    {/* </a> */}
                    <button className="border border-gray-400 hover:bg-gray-100/70 px-6 py-2.5 rounded-lg ml-4" onClick={onContactClick}>
                        Connect me
                    </button>
                </div>
            )}

            <div className="flex flex-col md:flex-row items-center justify-between md:items-start w-full max-w-5xl mx-auto">

                {/* LEFT SIDE */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-semibold">
                        Shahab Ahmed
                    </h2>

                    <p className="text-2xl md:text-3xl font-mono mt-2">
                        Software Engineer
                    </p>

                    <div className="mt-2 text-xs flex flex-row items-center justify-center md:justify-start hover:-translate-y-0.5 transition">
                        <svg height={24} width={24} role="img" viewBox="0 0 48 48" fill="#000000"><g id="SVGRepo_iconCarrier"> <title>Whatsapp-color</title><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-700.000000, -360.000000)" fill="#67C15E"> <path d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z" id="Whatsapp"> </path> </g> </g> </g></svg>
                        <a href="https://wa.me/923151586289" target="_blank" className="hover:underline ml-1">
                            +92 315 1586289
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://wa.me/923301573989" target="_blank" className="hover:underline ml-1">
                            +92 330 1573989
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-center">
                    <img
                        src="/assets/Profile.png"
                        alt="Profile Image"
                        className="size-36 rounded-full"
                        width={144}
                        height={144}
                    />
                </div>
            </div>

            {/* Links */}
            <div className="mt-2 text-xs flex flex-col md:flex-row gap-2 items-center justify-start w-full max-w-5xl mx-auto">
                <a href="mailto:shahabahmed@3339@gmail.com" className="flex flex-row block hover:underline hover:-translate-y-0.5 transition">
                    <svg height={24} width={24} role="img" viewBox="5 7 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white" />
                        <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335" />
                        <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05" />
                        <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853" />
                        <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F" />
                        <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F" />
                        <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F" />
                        <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4" />
                    </svg>
                    <span className="ml-1 mt-1">shahabahmed@3339@gmail.com</span>
                </a>
                <a href="https://github.com/shahabahmed3339" target="_blank" className="flex flex-row block hover:underline hover:-translate-y-0.5 transition">
                    <svg height={24} width={24} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    <span className="ml-1 mt-1">https://github.com/shahabahmed3339</span>
                </a>
                <a href="https://www.linkedin.com/in/its-shahab-ahmed/" target="_blank" className="flex flex-row block hover:underline hover:-translate-y-0.5 transition">
                    <svg height={24} width={24} role="img" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="#0077B7" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472V330.654z" /></svg>
                    <span className="ml-1 mt-1">https://www.linkedin.com/in/its-shahab-ahmed/</span>
                </a>
            </div>
        </main>
    );
}