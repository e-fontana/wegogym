import { View, Text } from "react-native"
import { TaskbarElement } from "./icon"

export const TaskBar = () => {
    return (
        <View className="absolute w-full bottom-0 bg-zinc-300 dark:bg-zinc-900 h-[10%]">
            <View className="w-full h-full flex-row px-4 items-center justify-between">
                <TaskbarElement title="Friends" icon="friends" />
                <TaskbarElement title="Workout" icon="weight"/>
                <TaskbarElement title="Home" icon="home" />
                <TaskbarElement title="Add" icon="add" />
                <TaskbarElement title="Settings" icon="settings" />
            </View>
        </View>
    )
}