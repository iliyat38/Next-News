import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";


export default async function ImagePage({ params }) {
    const { newsId } = await params
    const newsItem = await getNewsItem(newsId);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={950} height={700} className="Image1" />
        </div>
    )
}