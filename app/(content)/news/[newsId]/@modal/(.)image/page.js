
import Image from "next/image";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modalBackdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {

    const { newsId } = await params;

    const newsItem = await getNewsItem(newsId);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={950} height={700} className="Image1" />
                </div>
            </dialog>
        </>
    )
}