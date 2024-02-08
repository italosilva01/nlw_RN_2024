import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Loading } from "@/components/loading";

// Arquivo de configuração. Ele define as configurações da navegação do app. O expo router irá identificar o arquivo
export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  //useFonts é responsável por carregar as fontes do app

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <SafeAreaView className="flex-1 bg-slate-900 ">
      {/* o component SafeAreaView serve para livrar de detalhes fisicos dos aparelhos Ios/Android */}
      <Slot />
      {/* todas as telas/interfaces são colocadas nesse Slot; Existe um componente parecido com ele no React router e no next (não lembro 
        qual o nome dele)  */}
    </SafeAreaView>
  );
}
