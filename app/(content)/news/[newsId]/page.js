import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage({ params }) {
    const { newsId } = await params;
    const news = await getNewsItem(newsId);
    if (!news) {
        notFound();
    }
    return (
        <article id="news-article">
            <header >
                <Link href={`/news/${news.slug}/image`}>
                    <Image className="Image" src={`/images/news/${news.image}`} alt={news.title} width={950} height={700} />
                </Link>
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
            <Link href="/news">Back to News</Link>
        </article>
    )
}
