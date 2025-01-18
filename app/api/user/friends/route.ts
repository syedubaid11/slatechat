import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma=new PrismaClient()

export async function POST(req:NextRequest,userId:number,friendId:number){
    const friendRequest=await prisma.friend.create({
        data:{  
            userId,
            friendId,
            status:'Pending'
        }

    })
}
