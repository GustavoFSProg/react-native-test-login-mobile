import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Input from '../components/Input'
import { useEffect, useState } from "react";
// import { useState } from "react";
import api from "../api";



export default function Index() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [user, setUser] = useState<any>([])

  // async function handleLogin() {
  //   try {

  //     const data = { senha, email }
  //     const user = await api.post("/login", data)


  //     return alert("Logado")
  //   } catch (error) {
  //     return alert(error)

  //   }
  // }


  async function getUsers() {
    try {

      const {data} = await api.get("/get-all-users")

      setUser(data)


      // return alert("Logado")
    } catch (error) {
      return alert(error)

    }
  }

  useEffect(() => {
    getUsers()

  },[])



  return (
    <ScrollView style={{ flex: 1 }}
      className="bg-green-100"
      showsVerticalScrollIndicator={false}

    >
      <View className=" flex w-full h-screen flex-col items-center mt-[50px]">
        <Text className="flex items-center mb-20 flex-col justify-center text-black text-[28px]">
          Olá bom dia!
          {/* <View className="mb-[5px] mt-[30px] flex flex-col"> */}

          {user.map((items: { email: any; }) => {
            return (
              <>
              <View className="mb-[5px] mt-[30px] flex flex-col">
                <Text>

              {items.email}
                </Text>
              </View>
              </>
            )
          })}
          {/* </View> */}
        </Text>
        {/* <View className="flex w-full h-screen justify-start items-start"> */}

        <Text className="-ml-[270px] mb-2 text-[16px]">Email:</Text>
        <Input
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
          placeHolder='Digite o email' />

        {/* </View> */}

        <View className="flex w-full h-screen justify-start items-start">

          <Text className="ml-5 mt-5 mb-2 text-[16px]">Password</Text>
          <Input
            // value={senha}
            placeHolder='Digite a senha'
          // onChange={(e) => setSenha(e.target.value)}
          />
         {/* </View>
        <View
          className="flex  w-36 h-[40px] rounded-[15px] mt-[30px]
         justify-center items-center "
        >  */}

          < TouchableOpacity className="
          ml-[76px]
          mt-[37px]
          bg-green-600 w-[200px] h-14 flex 
    items-center justify-center text-white
    rounded-xl
    "
            // onPress={handleLogin}
          >


            <Text className="text-white  ">CLIQUE PARA LOGAR </Text >
          </ TouchableOpacity >

        </View>
      </View>
    </ScrollView>
  );
}

// const estilos = StyleSheet.create ({ 
//   // ...
//   appButtonContainer : { 
//     height: 8 ,​​ 
//     backgroundColor : "#009688" , 
//     borderRadius: 10 , 
//     width: 12 
//   },
//   appButtonText : { 
//     fontSize: 18 , 
//     color : "#fff" , 
//     fontWeight : "400" , 
//     alignSelf : "center" , 
//     textTransform : "capitalize" 
//   }
// });
