export interface Event {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: Event[] = [
    {
        title: "Next.js Conference 2026",
        image: "/images/nextjs-conf-2026.jpg",
        slug: "nextjs-conf-2026",
        location: "San Francisco, CA",
        date: "March 15, 2026",
        time: "9:00 AM PST"
    },
    {
        title: "React Summit Europe",
        image: "/images/react-summit-2026.jpg",
        slug: "react-summit-europe-2026",
        location: "Amsterdam, Netherlands",
        date: "April 22-23, 2026",
        time: "10:00 AM CET"
    },
    {
        title: "GitHub Universe 2026",
        image: "/images/github-universe-2026.jpg",
        slug: "github-universe-2026",
        location: "London, UK",
        date: "May 10-12, 2026",
        time: "9:30 AM BST"
    },
    {
        title: "AI Dev World Conference",
        image: "/images/ai-dev-world-2026.jpg",
        slug: "ai-dev-world-2026",
        location: "Singapore",
        date: "June 5-7, 2026",
        time: "10:00 AM SGT"
    },
    {
        title: "Global Hackathon 2026",
        image: "/images/global-hackathon-2026.jpg",
        slug: "global-hackathon-2026",
        location: "Virtual Event",
        date: "July 15-17, 2026",
        time: "Starts 8:00 AM UTC"
    },
    {
        title: "TypeScript Congress",
        image: "/images/typescript-congress-2026.jpg",
        slug: "typescript-congress-2026",
        location: "Berlin, Germany",
        date: "August 25-26, 2026",
        time: "9:00 AM CEST"
    }
];