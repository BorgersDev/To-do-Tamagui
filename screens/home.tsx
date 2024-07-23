import { useState } from "react"

import { Task } from "components/Task"

import { Plus } from "@tamagui/lucide-icons"

import { Button, H3, Input, Spacer, XStack, YStack } from "tamagui"
import { Alert, FlatList } from "react-native"

export const Home = () => {
    const [ tasks, setTasks] = useState(["Clean the kitchen", "Vacuum the living room", "Do the laundry", "Mop the floors", "Dust the furniture", "Take out the trash", "Wash the dishes", "Organize the closet", "Water the plants", "Clean the bathroom", "Change the bed sheets", "Grocery shopping", "Walk the dog", "Pay the bills", "Clean the windows", "Prepare meals", "Wipe down countertops", "Sort the mail", "Clean the refrigerator", "Tidy up the garage"])
    const [ text, setText] = useState('')
    const handleAddTask = () => {
        if(text === '') {
            return Alert.alert('Fill the text', 'Please fill in the text with the task you want to add.')
        }
        if( tasks.includes(text)) {
            return Alert.alert( 'Task already exists')
        }
        setText('')
    }
    const handleRemove = (taskName: string) => {
        Alert.alert(`Remove`, `Do you want to remove the "${taskName}" task?`, [
            {
                text: 'No',
                style: 'cancel'
            },
            {text: 'Yes',
                onPress: () => setTasks(prevState => prevState.filter(text => text !== taskName)),
                style: 'destructive'
            }
            

        ])
    }
    return (
        <YStack f={1} bg="$blue1Dark" p="$4" pt="$7" > 
            <H3 mt="$5" >To-do-List</H3>
            <Spacer />

            <XStack ai="center" space="$2"  >
                <Input f={1} size="$4.5" placeholder="Add Task" borderWidth="$1" borderColor="$gray1" 
                    onChangeText={text => setText(text)} value={text} />
                <Button  bg="$gray3" size="$4.5" h="$5" w="$6" onPress={handleAddTask} >
                    <Plus size="2" />
                </Button>
            </XStack>
            
            <Spacer />
            
            <FlatList
            data={tasks}
            keyExtractor={item => item}
            renderItem={({item}) => 
                <Task taskName={item} onRemove={() => handleRemove(item)} />
            }
            showsVerticalScrollIndicator={false}
            />
        </YStack>
    )
}