
import Image from "next/image";
import NewsList from "@/components/newsList";
import { getAllNews } from "@/lib/news";


export default async function NewsPage() {


    const news = await getAllNews();


    return (
        <>
            <div>
                <h1>News Page</h1>
            </div>
            <NewsList news={news} />
        </>
    )
}