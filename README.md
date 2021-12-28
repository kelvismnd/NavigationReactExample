# NavigationReactExample
## Trecho de Codigo para criação de navegação em ReactNative + simples consumo de API

#### Estrutura das pastas
* :file_folder: src
  * :file_folder: pages
    *  Home
    * About
  * :file_folder: services
    * api.tsx
  * :file_folder: interfaces
    * Estado.ts
  * :file_folder: components
    * ListaEstados.tsx
* App.tsx
  

## Detalhamento

O App.tsx é responsavel por carregar o 

<NavigationContainer>
   <Stack.Navigator>
       <Stack.Screen name="Home" component={ Home }/>
       <Stack.Screen name="About" component={ About }/>
   </Stack.Navigator>
</NavigationContainer>
    
No App.tsx cada Component (ex: component={Home} ) é considerado uma page que pode ser chamado utilizando o :

useNavigation()

Ex:

``` 
( About.tsx )
import { useNavigation } from "@react-navigation/native";

export function Home(){
  
  const navegacao = useNavigation();
  
  function clickParaHome(){
      navegacao.navigate('Home')
  }
  
  return(
      <TouchableOpacity onPress={ clickParaHome }>
             <Text> Clique aqui para ir pra Home Page</Text>
      </TouchableOpacity>
  );

}

## Instação

``` expo install axios 
``` npm install @react-navigation/native
``` expo install react-native-screens react-native-safe-area-context
``` expo install @react-navigation/native
``` expo install @react-navigation/native-stack 




