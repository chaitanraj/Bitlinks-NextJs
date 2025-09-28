import { redirect } from "next/navigation"
import { MongoClient } from "mongodb"
import clientPromise from "../lib/mongodb"

export default async function Page({ params }) {
    const shorturl= (await params).shorturl
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collections = db.collection("url");

    // Check if the sort url exists
    const doc = await collections.findOne({ shorturl: shorturl })
    if (doc) {
        redirect(doc.url)
    }
    else{
        redirect(`${NEXT_PUBLIC_HOST}`)
    }
    return <div>My Post: {url}</div>
}