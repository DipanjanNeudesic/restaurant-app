import  recipes  from "../../../../database/recipe"
import { NextResponse } from "next/server"

export const GET = async (request, { params}) => {
    const recipe = recipes.find(recipe => recipe.id === Number(params.id))
    return NextResponse.json(recipe)
}