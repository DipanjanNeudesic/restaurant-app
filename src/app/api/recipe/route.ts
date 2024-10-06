import  recipes  from "../../../database/recipe"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid";

let id = 3
export const GET = async (request) => {
 return NextResponse.json(recipes)
}

export const POST = async (request) => {
  
  const recipe = await request.json()
  recipe.id = id++;
  recipes.push(recipe)
  return NextResponse.json(recipe)
}