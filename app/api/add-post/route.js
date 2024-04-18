import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(request){
	const res = await request.json()
	console.log('{res}', {res})


	const {title, content} = res

	// posteo a la base de datos
	// Utiliza Prisma para crear un nuevo registro en la tabla post.
	const result = await prisma.post.create({

		// dentro de data se encuentra cada registro de la tabla.
		data:{
			title:	title,
			content: content,
			published: true,
			author: {
				create:{
					name:"ryan"
				}
			}

		}
	})

	return NextResponse.json({result})
}