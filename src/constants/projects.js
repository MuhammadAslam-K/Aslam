import {
    parkqwik,
    bookat,
    markbarber,
    stayscout,
} from "../assets/index"



export const projects = [
    {
        name: "ParkQwik",
        description:
            "Contributed to the backend development of ParkQwik, an innovative app designed to streamline parking by providing real-time information on available parking spots, making urban parking hassle-free and efficient",
        tags: [
            {
                name: "TypeScript",
                color: "pink-text-gradient",
            },
            {
                name: "NodeJs REST api",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            }

        ],
        image: parkqwik,
        source_code_link: "",
    },
    {
        name: "Book@",
        description:
            "Book@ is a cutting-edge taxi booking application built with the MERN stack and TypeScript, offering a quick and reliable way to book rides. This app features a user-friendly interface for effortless ride scheduling, real-time tracking, and seamless payment options. Designed to enhance urban mobility, Book@ connects users with nearby drivers for convenient and safe transportation services.",
        tags: [
            {
                name: "NodeJs REST api",
                color: "blue-text-gradient",
            },
            {
                name: "Socket.IO",
                color: "red-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "AWS",
                color: "pink-text-gradient",
            },
        ],
        image: bookat,
        source_code_link: "https://github.com/MuhammadAslam-K/Bookat-client",
    },
    {
        name: "Mark-Barber",
        description:
            "Mark-Barber is an intuitive salon booking app, developed using the MERN stack and TypeScript, designed to connect users with nearby salons effortlessly. The app features a user-friendly interface that allows customers to discover, book, and manage appointments with local salons. With real-time availability, detailed salon profiles, and easy navigation, Mark-Barber simplifies the process of finding and booking salon services tailored to your convenience and preference",
        tags: [
            {
                name: "NodeJs REST api",
                color: "blue-text-gradient",
            },
            {
                name: "MapBox",
                color: "red-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
        ],
        image: markbarber,
        source_code_link: "https://github.com/MuhammadAslam-K/Project-Mark-Barber_client",
    },
    {
        name: "stayscout",
        description:
            "Stayscout is an innovative hotel room booking website, leveraging the streamlined user experience. The platform offers an intuitive search and booking system, enabling users to effortlessly find and reserve hotels tailored to their preferences. Integrating smart filtering and real-time data, Stayscout ensures a convenient and personalized hotel booking journey.",
        tags: [
            {
                name: "NodeJs",
                color: "blue-text-gradient",
            },
            {
                name: "View Engine(HBS)",
                color: "red-text-gradient",
            },
            {
                name: "MongoDb",
                color: "green-text-gradient",
            },
        ],
        image: stayscout,
        source_code_link: "https://github.com/MuhammadAslam-K/Stay-Scout.git",
    },

];