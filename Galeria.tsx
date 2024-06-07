import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'

export default function Galeria() {
    return (
        <div className="bg-verde-claro-700 py-8 h-[500px]">
            <div className="@apply z-10 pl-24 pr-1 border-b-azul-600 h-0 w-72 border-r-[25px] border-r-transparent border-b-[50px] border-solid;">
                <h3 className="font-bold text-xl pt-2 text-branco-50">CyberGames '23</h3>
            </div>
            <Grid
            h='320px'
            templateRows='repeat(2, 150px)'
            templateColumns='repeat(3, 1fr)'
            gap={2}
            className="mt-5 mx-10"
            >
                <GridItem colSpan={2} className="bg-verde-claro-300 rounded-lg" />
                <GridItem colSpan={1} className="bg-verde-claro-300 rounded-lg" />
                <GridItem colSpan={1} className="bg-verde-claro-300 rounded-lg" />
                <GridItem colSpan={2} className="bg-verde-claro-300 rounded-lg" />
            </Grid>
            <div className="flex justify-center items-center">
                <button className="bg-azul-600 text-branco-50 px-2 py-1 rounded-lg font-bold">
                    PARTICIPE DA PRÓXIMA EDIÇÃO!
                </button>
            </div>
        </div>
    )
}