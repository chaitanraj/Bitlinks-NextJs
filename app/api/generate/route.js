import clientPromise from "@/app/lib/mongodb"

export async function POST(req) {

    const body=await req.json();
    const client=await clientPromise;
    const db=client.db("bitlinks");
    const collections=db.collection("url");

    // Check if the sort url exists
    const doc=await collections.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({success:false ,error:true ,message:'URL already exists'})
    }

    await collections.insertOne({
        url:body.url,
        shorturl:body.shorturl
     })

    return Response.json({success:true, error:false, message:"URL Generated Successfully"})
}