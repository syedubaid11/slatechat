import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const signup=z.object({
    username:z.string(),
    password:z.string()
})


export async function POST(req:NextRequest){
    console.log('')
    return NextResponse.json({message:"you hit signup route"})
}


