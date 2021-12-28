import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Estado } from "../interfaces/Estado";
import { api } from "../services/api";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export function ListaEstados(){

    const [estados,setEstado] = useState<Estado[]>([])

    //const navegacao = useNavigation();

    async function carregaEstados(){
        const response = await api.get('?orderBy=nome');
        setEstado(response.data);
    }

    function handleToMunicipio(item:Estado){
        
    }

    useEffect( () => {
       carregaEstados();
    }, [])

    return (
        <Text>Lista de Estados</Text>
    );
}