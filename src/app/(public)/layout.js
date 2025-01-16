import Navbar from "@/components/landingPage/Navbar";


export default function PublicLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="bg-gray-50 dark:bg-gray-900">{children}</main>
        </>
    );
}
