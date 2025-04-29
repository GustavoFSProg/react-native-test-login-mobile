import {View, TextInput} from 'react-native'

 function Input({placeHolder}) {
  return (
   <View className='w-full flex-row border  border-slate-500 h-14 rounded-full items-center
   gap-2 px-4 bg-transparent
   
   '>
    <TextInput placeholder={placeHolder}
     className='w-full h-full bg-transparent flex-1'
    />
      
   </View>
  )
}

export default Input



