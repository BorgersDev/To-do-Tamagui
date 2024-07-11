import { Task } from "components/Task"
import { Button, H2, H3, Input, Spacer, XStack, YStack } from "tamagui"



export const Home = () => {
    const handleRemove = () => {
        console.log("Dick")
    }
    return (
        <YStack f={1} bg="$blue1Dark" p="$6" >
            <H3 mt="$5" >To-do-List</H3>
            <Spacer />

            <XStack ai="center" space="$2"  >
                <Input f={1} size="$4.5" placeholder="Add Task" borderWidth="$1" borderColor="$gray1" />
                <Button  bg="$gray3">
                    <H2>+</H2>
                </Button>
            </XStack>
            <Spacer />
            <Task value="Clean my room" />
            <Task value="Take the trash out" />
        </YStack>
    )
}